import { describe, expect, it, vi } from 'vitest'
vi.mock('@/lib/sanity.queries', () => ({
  getAllProjects: async () => [{ slug: { current: 'demo' } }, { slug: { current: null } }]
}))
import sitemap from '@/lib/sitemap'

describe('sitemap', () => {
  it('includes base routes and project routes', async () => {
    const entries = await sitemap()
    const urls = entries.map(e => e.url)
    expect(urls).toContain('https://thomgriggs-portfolio.vercel.app/')
    expect(urls).toContain('https://thomgriggs-portfolio.vercel.app/projects')
    expect(urls).toContain('https://thomgriggs-portfolio.vercel.app/projects/demo')
  })
})
