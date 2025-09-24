import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
	title: 'Thom Griggs • Front-End Developer',
	description: 'Responsive, performant, accessible web experiences.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<nav className="bg-surface/70 sticky top-0 z-50 border-b border-white/10 backdrop-blur-md">
					<div className="container flex items-center justify-between py-3">
						<div className="brand">
							<span className="brand-mark">TG</span>
							<span className="font-serif text-lg font-semibold tracking-wide">
								Thom Griggs
							</span>
						</div>
						<div className="flex items-center gap-2">
							<Link className="btn" href="/projects">
								Projects
							</Link>
						</div>
					</div>
				</nav>
				<main className="container">{children}</main>
				<footer className="text-muted container py-6 text-sm">
					© {new Date().getFullYear()} Thom Griggs
				</footer>
			</body>
		</html>
	);
}
