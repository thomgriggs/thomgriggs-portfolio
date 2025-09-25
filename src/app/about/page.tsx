import Image from 'next/image'
import { getAboutPage } from '@/lib/sanity.queries'
import { Section } from '@/app/components/Section'
import { PortableText } from 'next-sanity'

export const revalidate = 300

export default async function AboutPage(){
  const a = await getAboutPage()
  return (
    <Section>
      <h1 className="h1">{a?.title}</h1>
      <div className="grid grid-cols-12 gap-6 mt-4">
        <div className="col-span-12 lg:col-span-4">
          {a?.portrait?.url ? (
            <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-card)] border border-white/10">
              <Image src={a.portrait.url} alt={a.portrait.alt||''} fill className="object-cover" sizes="33vw"/>
            </div>
          ) : null}
        </div>
        <div className="col-span-12 lg:col-span-8 prose prose-invert max-w-none">
          {a?.body ? <PortableText value={a.body} /> : null}
        </div>
      </div>
    </Section>
  )
}
