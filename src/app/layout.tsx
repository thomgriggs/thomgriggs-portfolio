import type { Metadata } from 'next'
import Link from 'next/link'
import { Inter, Noto_Serif } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const noto = Noto_Serif({ subsets: ['latin'], variable: '--font-serif' })

export const metadata: Metadata = {
  title: 'Thom Griggs • Front-End Developer',
  description: 'Responsive, performant, accessible web experiences.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${noto.variable}`}>
      <body className="font-sans">
        <nav className="bg-surface/70 sticky top-0 z-50 border-b border-white/10 backdrop-blur-md">
          <div className="container flex items-center justify-between py-3">
            <Link href="/" className="brand text-inherit no-underline">
              <span className="brand-mark">TG</span>
              <span className="font-serif text-lg font-semibold tracking-wide">Thom Griggs</span>
            </Link>
            <div className="flex items-center gap-2">
              <Link className="btn" href="/projects">Projects</Link>
              <Link className="btn" href="/about">About</Link>
              <Link className="btn" href="/contact">Contact</Link>
            </div>
          </div>
        </nav>
        <main className="container">{children}</main>
        <footer className="container text-muted text-sm py-6">© {new Date().getFullYear()} Thom Griggs</footer>
      </body>
    </html>
  )
}
