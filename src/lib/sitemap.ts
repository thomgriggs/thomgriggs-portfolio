import type { MetadataRoute } from 'next';
import { getAllProjects } from '@/lib/sanity.queries';

export async function buildSitemap(
	base: string
): Promise<MetadataRoute.Sitemap> {
	const projects = await getAllProjects();
	const items: MetadataRoute.Sitemap = [
		{ url: `${base}/`, lastModified: new Date() },
		{ url: `${base}/projects`, lastModified: new Date() },
	];
	for (const p of projects) {
		const slug = p?.slug?.current;
		if (slug)
			items.push({ url: `${base}/projects/${slug}`, lastModified: new Date() });
	}
	return items;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const base =
		process.env.NEXT_PUBLIC_SITE_URL ??
		'https://thomgriggs-portfolio.vercel.app';
	return buildSitemap(base);
}
