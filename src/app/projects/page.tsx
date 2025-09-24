import Link from 'next/link';
import Image from 'next/image';
import { getAllProjects } from '@/lib/sanity.queries';

export const revalidate = 300;

export default async function ProjectsPage() {
	const projects = await getAllProjects();
	return (
		<div>
			<h2 className="m-0 mb-4 font-serif text-[28px]">Projects</h2>
			<div className="grid-12">
				{projects.map((p) => (
					<Link
						key={p._id}
						href={`/projects/${p.slug?.current ?? ''}`}
						className="card col-span-12 text-inherit no-underline md:col-span-6 lg:col-span-4"
					>
						<div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-white/10">
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
					</Link>
				))}
			</div>
		</div>
	);
}
