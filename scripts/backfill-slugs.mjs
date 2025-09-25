import { createClient } from '@sanity/client';

const {
	NEXT_PUBLIC_SANITY_PROJECT_ID: projectId,
	NEXT_PUBLIC_SANITY_DATASET: dataset,
	SANITY_API_VERSION: apiVersion,
	SANITY_MUTATION_TOKEN: token,
} = process.env;

if (!projectId || !dataset || !apiVersion) {
	console.error(
		'Missing env: projectId/dataset/apiVersion. Load .env.local first.'
	);
	process.exit(1);
}
if (!token) {
	console.error('Missing SANITY_MUTATION_TOKEN (Editor role).');
	process.exit(1);
}

const client = createClient({
	projectId,
	dataset,
	apiVersion,
	token,
	useCdn: false,
});

const DRY_RUN = process.argv.includes('--dry-run');

const queryMissing = `
*[_type == "project" && (!defined(slug.current) || slug.current == "")]{
  _id, _rev, title, "current": slug.current
}
`;

function basicSlugify(str) {
	return (str || '')
		.toString()
		.normalize('NFKD')
		.replace(/[\u0300-\u036f]/g, '')
		.toLowerCase()
		.trim()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/(^-|-$)+/g, '')
		.slice(0, 96);
}

async function makeUniqueSlug(base) {
	let candidate = base || 'project';
	let n = 1;
	while (true) {
		const exists = await client.fetch(
			'*[_type=="project" && slug.current == $s][0]._id',
			{ s: candidate }
		);
		if (!exists) return candidate;
		n += 1;
		candidate = `${base}-${n}`;
	}
}

(async () => {
	const docs = await client.fetch(queryMissing);
	console.log(`Found ${docs.length} project(s) without slugs.`);
	if (docs.length === 0) return;

	const patches = [];
	for (const d of docs) {
		const base = basicSlugify(d.title) || 'project';
		const unique = await makeUniqueSlug(base);
		patches.push({
			id: d._id,
			patch: { set: { slug: { _type: 'slug', current: unique } } },
		});
		console.log(`→ ${d._id}  "${d.title}"  slug: ${unique}`);
	}

	if (DRY_RUN) {
		console.log('\nDry run complete. Re-run without --dry-run to write.');
		return;
	}

	const CHUNK = 50;
	for (let i = 0; i < patches.length; i += CHUNK) {
		const tx = client.transaction();
		for (const p of patches.slice(i, i + CHUNK)) tx.patch(p.id, p.patch);
		await tx.commit({ visibility: 'async' });
		console.log(
			`Committed ${Math.min(i + CHUNK, patches.length)} / ${patches.length}`
		);
	}
	console.log('Done.');
})().catch((err) => {
	console.error(err);
	process.exit(1);
});
