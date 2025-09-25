import Link from 'next/link';

export function HomeContent() {
	return (
		<>
			<h1 className="h1 mt-6">Front-end developer</h1>
			<p className="text-muted mt-3 max-w-[65ch] text-[15px] leading-relaxed">
				I build responsive, performant, accessible web experiences.
			</p>
			<div className="mt-4 flex gap-2">
				<Link className="btn" href="/projects">
					Projects
				</Link>
				<Link className="btn" href="/about">
					About
				</Link>
				<Link className="btn" href="/contact">
					Contact
				</Link>
			</div>
		</>
	);
}
