type Props = {
  title?: string
  eyebrow?: string
  className?: string
  children: React.ReactNode
}
export function Section({ title, eyebrow, className, children }: Props) {
  return (
    <section className={className}>
      {eyebrow ? <div className="eyebrow">{eyebrow}</div> : null}
      {title ? <h1 className="h1 mt-1">{title}</h1> : null}
      <div className="mt-4">{children}</div>
    </section>
  )
}
