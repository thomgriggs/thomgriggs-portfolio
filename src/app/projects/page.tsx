import Link from 'next/link';
import Image from 'next/image';
import { getAllProjects } from '@/lib/sanity.queries';
import { Section } from '@/app/components/Section';

export const revalidate = 300;

export default async function ProjectsPage() {
	const projects = await getAllProjects();
	return (
		<Section>
			<h2 className="m-0 mb-4 font-serif text-[28px]">Projects</h2>
			<div className="grid-12">
				{projects.map((p) => {
					const hasSlug = Boolean(p.slug?.current);
					const CardInner = (
						<>
							<div className="relative aspect-[16/10] overflow-hidden rounded-[var(--radius-card)] border border-white/10 transition-transform will-change-transform">
								{p.coverImage?.asset?.url ? (
									<Image
										src={p.coverImage.asset.url}
										alt={p.title}
										fill
										sizes="(min-width:1024px) 33vw, 100vw"
										className="object-cover"
									/>
								) : null}
							</div>
							<h3 className="m-0">{p.title}</h3>
							<p className="text-muted m-0">{p.year}</p>
						</>
					);
					return hasSlug ? (
						<Link
							key={p._id}
							href={`/projects/${p.slug!.current}`}
							className="card col-span-12 text-inherit no-underline transition hover:scale-[1.01] md:col-span-6 lg:col-span-4"
						>
							{CardInner}
						</Link>
					) : (
						<div
							key={p._id}
							className="card col-span-12 opacity-75 md:col-span-6 lg:col-span-4"
							title="Add a slug to enable this link"
						>
							{CardInner}
						</div>
					);
				})}
			</div>
		</Section>
	);
}
