import {PortableText, type PortableTextComponents} from '@portabletext/react'

const components: PortableTextComponents = {
  block: {
    h2: ({children}) => <h2 className="mt-8 text-2xl font-semibold">{children}</h2>,
    normal: ({children}) => <p className="mt-4 leading-relaxed">{children}</p>,
  },
  list: {
    bullet: ({children}) => <ul className="mt-4 list-disc pl-6 space-y-2">{children}</ul>,
  },
  marks: {
    link: ({children, value}) => (
      <a href={value?.href} className="underline hover:opacity-80" target="_blank" rel="noreferrer">{children}</a>
    ),
  },
}
export default function RichText({value}:{value:any}) {
  if (!value) return null
  return <PortableText value={value} components={components} />
}
