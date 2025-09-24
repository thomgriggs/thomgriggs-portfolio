import Link from 'next/link';
import { Section } from './components/Section';

export default function Page() {
	return (
		<>
			<Section>
				<div className="grid-12" style={{ gridTemplateColumns: '1.2fr .8fr' }}>
					<section className="col-span-12 lg:col-span-8">
						<p className="eyebrow mb-2">Portfolio</p>
						<h1 className="h1 m-0">
							Front-end developer crafting fast, accessible, human websites
						</h1>
						<p className="text-muted mt-3 text-[18px]">
							11+ years building bespoke hotel and commerce sites. Hand-coded
							UI, accessible patterns, performance-first habits.
						</p>
						<div className="mt-4 flex gap-2">
							<Link className="btn-primary" href="/projects">
								View projects
							</Link>
							<Link className="btn" href="/about">
								About me
							</Link>
						</div>
					</section>
					<aside aria-hidden className="col-span-12 lg:col-span-4">
						<div className="card aspect-[4/3]" />
					</aside>
				</div>
				<div className="card mt-4 p-4">Tailwind OK</div>
				<div className="card mt-4 p-4">Tailwind OK</div>
			</Section>
		</>
	);
}
