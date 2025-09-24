import Link from 'next/link'

export default function Page() {
  return (
    <div className="grid-12" style={{ gridTemplateColumns: '1.2fr .8fr' }}>
      <section className="col-span-12 lg:col-span-8">
        <h1 className="h1 m-0">Front-end developer crafting fast, accessible, human websites</h1>
        <p className="text-[18px] text-muted mt-2">11+ years building bespoke hotel and commerce sites. Hand-coded UI, accessible patterns, performance-first habits.</p>
        <div className="flex gap-2 mt-3">
          <Link className="btn" href="/projects">View projects</Link>
        </div>
      </section>
      <aside aria-hidden className="col-span-12 lg:col-span-4">
        <div className="card aspect-[4/3]" />
      </aside>
    </div>
  )
}
