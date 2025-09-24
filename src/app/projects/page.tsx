import Link from 'next/link';
import Image from 'next/image';
import { getAllProjects } from '@/lib/sanity.queries';
import { Section } from '@/app/components/Section';
import { Badge } from '@/app/components/Badge';

export const revalidate = 300;

export default async function ProjectsPage() {
	const projects = await getAllProjects();
	return (
		<Section title="Projects" eyebrow="Selected work">
			<div className="grid grid-cols-12 gap-4">
				{projects?.map((p: any) => (
					<article
						key={p._id}
						className="card col-span-12 md:col-span-6 lg:col-span-4"
					>
						{p?.coverImage?.asset?.url && (
							<div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-card)] border border-white/10">
								<Image
									src={p.coverImage.asset.url}
									alt={p.coverImage?.alt || p.title}
									fill
									className="object-cover"
									sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
								/>
							</div>
						)}
						<h3 className="text-lg font-semibold">{p.title}</h3>
						<div className="text-muted text-sm">
							{[p.year, p.company, p.role].filter(Boolean).join(' • ')}
						</div>
						<div className="flex flex-wrap gap-2 pt-1">
							{Array.isArray(p.stack) &&
								p.stack
									.slice(0, 6)
									.map((s: string) => <Badge key={s}>{s}</Badge>)}
						</div>
						<div className="flex items-center gap-2 pt-2">
							<Link className="btn" href={`/projects/${p.slug?.current}`}>
								View
							</Link>
							{Array.isArray(p.links) &&
								p.links.slice(0, 2).map((l: any, i: number) =>
									l?.url ? (
										<a
											key={i}
											className="btn"
											href={l.url}
											target="_blank"
											rel="noreferrer"
										>
											{l.label || 'Link'}
										</a>
									) : null
								)}
						</div>
					</article>
				))}
			</div>
		</Section>
	);
}
