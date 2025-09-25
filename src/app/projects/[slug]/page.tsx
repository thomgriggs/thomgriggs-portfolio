import Image from 'next/image';
import { getProjectBySlug } from '@/lib/sanity.queries';
import { Section } from '@/app/components/Section';
import { Badge } from '@/app/components/Badge';
import { Lightbox } from '@/app/components/Lightbox';

export const revalidate = 300;

export default async function ProjectDetail(props: any) {
	const paramsMaybePromise = props?.params;
	const params =
		typeof paramsMaybePromise?.then === 'function'
			? await paramsMaybePromise
			: paramsMaybePromise;
	const slug = params?.slug;
	const p = await getProjectBySlug(slug);
	if (!p) return null;
	return (
		<Section title={p.title} eyebrow="Case study">
			<div className="text-muted text-sm">
				{[p.year, p.company, p.role].filter(Boolean).join(' • ')}
			</div>
			{p?.coverImage?.asset?.url && (
				<div className="relative mt-3 aspect-[16/9] overflow-hidden rounded-[var(--radius-card)] border border-white/10">
					<Image
						src={p.coverImage.asset.url}
						alt={p.coverImage?.alt || p.title}
						fill
						className="object-cover"
						sizes="100vw"
					/>
				</div>
			)}
			{p.summary && (
				<p className="mt-3 text-[15px] leading-relaxed">{p.summary}</p>
			)}
			{Array.isArray(p.stack) && p.stack.length > 0 && (
				<div className="flex flex-wrap gap-2 pt-3">
					{p.stack.map((s: string) => (
						<Badge key={s}>{s}</Badge>
					))}
				</div>
			)}
			{Array.isArray(p.links) && p.links.length > 0 && (
				<div className="flex flex-wrap gap-2 pt-3">
					{p.links.map((l: any, i: number) =>
						l?.url ? (
							<a
								key={i}
								href={l.url}
								target="_blank"
								rel="noreferrer"
								className="btn"
							>
								{l.label || 'Link'}
							</a>
						) : null
					)}
				</div>
			)}
			{Array.isArray(p.gallery) && p.gallery.length > 0 && (
				<div className="mt-4 grid grid-cols-12 gap-3 md:gap-4">
					{p.gallery.map((g: any, i: number) => (
						<div key={i} className="col-span-12 md:col-span-6 lg:col-span-4">
							<Lightbox src={g?.asset?.url} alt={g?.alt || ''} />
						</div>
					))}
				</div>
			)}
		</Section>
	);
}
