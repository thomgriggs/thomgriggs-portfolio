export default function Page() {
	return (
		<div className="grid" style={{ gridTemplateColumns: '1.2fr .8fr' }}>
			<section style={{ gridColumn: 'span 8' }}>
				<h1 style={{ fontFamily: 'Noto Serif, Georgia, serif', fontSize: 'clamp(36px,5vw,64px)', lineHeight: 1.05, margin: 0 }}>Front-end developer crafting fast, accessible, human websites</h1>
				<p style={{ color: '#a8acb3', fontSize: 18 }}>11+ years building bespoke hotel and commerce sites. Hand-coded UI, accessible patterns, performance-first habits.</p>
				<div style={{ display: 'flex', gap: 10 }}>
					<a href="/projects">View projects</a>
				</div>
			</section>
			<aside aria-hidden style={{ gridColumn: 'span 4' }}>
				<div className="card" style={{ aspectRatio: '4/3' }} />
			</aside>
		</div>
	)
}
