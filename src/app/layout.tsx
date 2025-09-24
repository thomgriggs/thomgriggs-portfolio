import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
	title: 'Thom Griggs • Front-End Developer',
	description: 'Responsive, performant, accessible web experiences.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>
				<nav>
					<div className="brand">
						<span className="brand-mark">TG</span>
						<span className="brand-name">Thom Griggs</span>
					</div>
					<div>
						<a href="/projects">Projects</a>
					</div>
				</nav>
				<main className="container">{children}</main>
				<footer className="container footer">© {new Date().getFullYear()} Thom Griggs</footer>
			</body>
		</html>
	)
}
