type Img = { asset?: { url?: string } } | null | undefined
export function Gallery({ items }: { items?: Img[] }) {
  const imgs = (items||[]).map(i=>i?.asset?.url).filter(Boolean) as string[]
  if (!imgs.length) return null
  return (
    <div className="grid grid-cols-12 gap-3 md:gap-4">
      {imgs.map((src, i)=>(
        <div key={i} className="col-span-12 md:col-span-6 lg:col-span-4">
          <div className="relative rounded-[var(--radius-card)] overflow-hidden border border-white/10 aspect-[4/3]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt="" className="h-full w-full object-cover" loading="lazy" />
          </div>
        </div>
      ))}
    </div>
  )
}
