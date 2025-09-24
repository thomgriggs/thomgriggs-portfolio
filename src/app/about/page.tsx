import { Section } from '../components/Section'

export const metadata = { title: 'About — Thom Griggs' }

export default function About() {
  return (
    <Section>
      <h1 className="font-serif text-[32px] m-0 mb-3">About</h1>
      <p className="text-muted max-w-[70ch]">
        Front-end developer focused on performance, accessibility, and design systems.
        I’ve shipped hotel and commerce sites for 11+ years, guiding teams from Figma to production with clarity.
      </p>
    </Section>
  )
}
