import { Section } from '../components/Section'

export const metadata = { title: 'Contact — Thom Griggs' }

export default function Contact() {
  return (
    <Section>
      <h1 className="font-serif text-[32px] m-0 mb-3">Contact</h1>
      <p className="text-muted">Reach me at <a className="underline" href="mailto:thomgriggs@gmail.com">thomgriggs@gmail.com</a></p>
    </Section>
  )
}
