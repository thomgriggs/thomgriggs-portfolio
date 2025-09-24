import Image from 'next/image'
import { getProjectBySlug } from '@/lib/sanity.queries'

export const revalidate = 300

export default async function ProjectDetail({ params }: { params: { slug: string } }) {
  const p = await getProjectBySlug(params.slug)
  if (!p) return <div>Not found</div>
  return (
    <article>
      <a href="/projects">← Back to projects</a>
      <h1 className="font-serif" style={{ fontSize: 'clamp(28px,4vw,48px)', margin: '8px 0' }}>{p.title}</h1>
      <p className="text-muted">{p.year}{p.role ? ` • ${p.role}` : ''}</p>
      {p.coverImage?.asset?.url ? (
        <div className="relative rounded-xl overflow-hidden border border-white/10" style={{ aspectRatio: '16/9' }}>
          <Image
            src={p.coverImage.asset.url}
            alt={p.title}
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      ) : null}
      {p.summary ? <p className="text-muted mt-4">{p.summary}</p> : null}
    </article>
  )
}
