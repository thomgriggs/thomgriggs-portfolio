import Link from 'next/link'
import { Section } from './components/Section'

export default function Page(){
  return (
    <Section>
      <div className="grid grid-cols-12 gap-6 items-center">
        <div className="col-span-12 lg:col-span-7">
          <div className="eyebrow">Front-end developer</div>
          <h1 className="h1 mt-2">Interfaces that feel fast, accessible, and intentional</h1>
          <p className="mt-3 text-[15px] leading-relaxed text-muted">I build responsive, performant web experiences with modern stacks. Recent work spans marketing sites, product UI, and design systems.</p>
          <div className="mt-4 flex gap-3">
            <Link href="/projects" className="btn-primary">View projects</Link>
            <Link href="/contact" className="btn">Contact</Link>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-5">
          <div className="relative aspect-[4/3] rounded-[var(--radius-app)] border border-white/10 overflow-hidden" style={{boxShadow:'var(--shadow-l)'}}>
            <div className="absolute inset-0" style={{background:'radial-gradient(120% 120% at 0% 0%, rgba(90,130,255,.35) 0%, transparent 60%), radial-gradient(120% 120% at 100% 100%, rgba(48,84,200,.45) 0%, transparent 60%)'}} />
          </div>
        </div>
      </div>
    </Section>
  )
}
