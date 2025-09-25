import '@testing-library/jest-dom'
import { vi } from 'vitest'

process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ||= 'demo'
process.env.NEXT_PUBLIC_SANITY_DATASET ||= 'production'
process.env.SANITY_API_VERSION ||= '2025-01-01'

vi.mock('@/lib/sanity.queries', () => ({
  getSiteSettings: async () => ({
    title: 'Thom Griggs',
    navLinks: [{label:'Projects',href:'/projects'},{label:'About',href:'/about'},{label:'Contact',href:'/contact'}],
    footerNote: '© Thom Griggs'
  }),
  getHomePage: async () => ({
    heroEyebrow: 'Front-end developer',
    heroTitle: 'Accessible, fast, beautiful web',
    heroSubtitle: 'I build responsive experiences.',
    ctaPrimaryLabel: 'Projects', ctaPrimaryUrl: '/projects',
    ctaSecondaryLabel: 'Contact', ctaSecondaryUrl: '/contact',
    featuredProjects: []
  }),
  getAboutPage: async () => ({
    title: 'About',
    portrait: { url: '', alt: '' },
    body: []
  }),
  getContactPage: async () => ({
    title: 'Contact',
    body: [],
    contacts: [{ label:'Email', value:'thom@example.com', url:'mailto:thom@example.com' }]
  }),
  getAllProjects: async () => [],
  getProjectBySlug: async () => null,
  getAllProjectSlugs: async () => []
}))
