import type { Metadata } from 'next';
import Link from 'next/link';
import { Inter, Noto_Serif } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';
import { getSiteSettings } from '@/lib/sanity.queries';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const noto = Noto_Serif({ subsets: ['latin'], variable: '--font-serif' });
const siteUrl =
	process.env.NEXT_PUBLIC_SITE_URL || 'https://thomgriggs-portfolio.vercel.app';
const titleDefault = 'Thom Griggs • Front-End Developer';
const description = 'Responsive, performant, accessible web experiences.';

export const metadata: Metadata = {
	metadataBase: new URL(siteUrl),
	title: { default: titleDefault, template: '%s • Thom Griggs' },
	description,
	alternates: { canonical: '/' },
	openGraph: {
		type: 'website',
		url: siteUrl,
		title: titleDefault,
		description,
		siteName: 'Thom Griggs',
	},
	twitter: { card: 'summary_large_image', title: titleDefault, description },
};

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const settings = await getSiteSettings();
	const brand = settings?.title || 'Thom Griggs';
	const nav = Array.isArray(settings?.navLinks)
		? settings.navLinks
		: [
				{ label: 'Projects', href: '/projects' },
				{ label: 'About', href: '/about' },
				{ label: 'Contact', href: '/contact' },
			];
	const foot =
		settings?.footerNote || `© ${new Date().getFullYear()} ${brand}`;
	return (
		<html lang="en" className={`${inter.variable} ${noto.variable}`}>
			<body className="font-sans">
				<a href="#main" className="skip-link">
					Skip to content
				</a>
				<nav className="bg-surface/70 sticky top-0 z-50 border-b border-white/10 backdrop-blur-md">
					<div className="container flex items-center justify-between py-3">
						<Link href="/" className="brand text-inherit no-underline">
							<span className="brand-mark">TG</span>
							<span className="font-serif text-lg font-semibold tracking-wide">
								{brand}
							</span>
						</Link>
						<div className="flex items-center gap-2">
							{nav.map((n: { label: string; href: string }) => (
								<Link key={n.href} className="btn" href={n.href}>
									{n.label}
								</Link>
							))}
						</div>
					</div>
				</nav>
				<main id="main" className="container">
					{children}
				</main>
				<footer className="text-muted container py-6 text-sm">{foot}</footer>
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}
