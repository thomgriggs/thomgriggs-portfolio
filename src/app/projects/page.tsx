import Link from 'next/link'
import Image from 'next/image'
import { getAllProjects } from '@/lib/sanity.queries'

export const revalidate = 300

export default async function ProjectsPage() {
  const projects = await getAllProjects()
  return (
    <div>
      <h2 className="font-serif text-[28px] m-0 mb-4">Projects</h2>
      <div className="grid-12">
        {projects.map(p => (
          <Link
            key={p._id}
            href={`/projects/${p.slug?.current ?? ''}`}
            className="card col-span-12 md:col-span-6 lg:col-span-4 no-underline text-inherit"
          >
            <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-white/10">
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
  )
}
