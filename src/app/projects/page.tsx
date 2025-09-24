import Link from 'next/link'
import { getAllProjects } from '@/lib/sanity.queries'

export const revalidate = 300

export default async function ProjectsPage() {
	const projects = await getAllProjects()
	return (
		<div>
			<h2 className="brand-name" style={{ fontSize: 28, margin: 0, marginBottom: 16 }}>Projects</h2>
			<div className="grid">
				{projects.map(p => (
					<Link key={p._id} href={`/projects/${p.slug?.current ?? ''}`} className="card" style={{ gridColumn: 'span 4', textDecoration: 'none', color: 'inherit' }}>
						<div style={{ aspectRatio: '16/10', background: 'rgba(255,255,255,.06)', borderRadius: 12 }} />
						<h3 style={{ margin: 0 }}>{p.title}</h3>
						<p style={{ color: '#a8acb3', margin: 0 }}>{p.year}</p>
					</Link>
				))}
			</div>
		</div>
	)
}
