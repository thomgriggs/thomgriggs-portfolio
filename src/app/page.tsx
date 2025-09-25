import Link from 'next/link';
import { getHomePage } from '@/lib/sanity.queries';
import { Section } from './components/Section';
import Image from 'next/image';

export default async function Page() {
	const h = await getHomePage();
	return (
		<Section>
			<div className="grid grid-cols-12 items-center gap-6">
				<div className="col-span-12 lg:col-span-7">
					{h?.heroEyebrow ? (
						<div className="eyebrow">{h.heroEyebrow}</div>
					) : null}
					{h?.heroTitle ? <h1 className="h1 mt-2">{h.heroTitle}</h1> : null}
					{h?.heroSubtitle ? (
						<p className="text-muted mt-3 text-[15px] leading-relaxed">
							{h.heroSubtitle}
						</p>
					) : null}
					<div className="mt-4 flex gap-3">
						{h?.ctaPrimaryLabel && h?.ctaPrimaryUrl ? (
							<Link href={h.ctaPrimaryUrl} className="btn-primary">
								{h.ctaPrimaryLabel}
							</Link>
						) : null}
						{h?.ctaSecondaryLabel && h?.ctaSecondaryUrl ? (
							<Link href={h.ctaSecondaryUrl} className="btn">
								{h.ctaSecondaryLabel}
							</Link>
						) : null}
					</div>
				</div>
				<div className="col-span-12 lg:col-span-5">
					<div
						className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-app)] border border-white/10"
						style={{ boxShadow: 'var(--shadow-l)' }}
					>
						<div
							className="absolute inset-0"
							style={{
								background:
									'radial-gradient(120% 120% at 0% 0%, rgba(90,130,255,.35) 0%, transparent 60%), radial-gradient(120% 120% at 100% 100%, rgba(48,84,200,.45) 0%, transparent 60%)',
							}}
						/>
					</div>
				</div>
			</div>
			{Array.isArray(h?.featuredProjects) && h.featuredProjects.length > 0 ? (
				<div className="mt-8 grid grid-cols-12 gap-4">
					{h.featuredProjects.map((p: any) => (
						<a
							key={p._id}
							href={`/projects/${p.slug}`}
							className="card col-span-12 no-underline md:col-span-6 lg:col-span-4"
						>
							{p?.coverImage?.url ? (
								<div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-card)] border border-white/10">
									<Image
										src={p.coverImage.url}
										alt={p.title}
										fill
										className="object-cover"
										sizes="33vw"
									/>
								</div>
							) : null}
							<div className="text-muted text-sm">
								{[p.year, p.company, p.role].filter(Boolean).join(' • ')}
							</div>
							<div className="h2">{p.title}</div>
							{p.summary ? (
								<p className="text-[15px] leading-relaxed">{p.summary}</p>
							) : null}
						</a>
					))}
				</div>
			) : null}
		</Section>
	);
}
