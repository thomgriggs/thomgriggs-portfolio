import React from 'react'
import { render, screen } from '@testing-library/react'
import { vi } from 'vitest'
import ProjectDetail from '../projects/[slug]/page'

vi.mock('next/link', () => ({ default: ({ href, children, ...p }: any) => <a href={href} {...p}>{children}</a> }))
vi.mock('next/image', () => ({ __esModule: true, default: (props: any) => <img alt={props.alt} src={props.src} /> }))
vi.mock('@/lib/sanity.queries', () => ({
  getProjectBySlug: async (_: string) => ({
    _id: '1',
    title: 'Detail Demo',
    year: '2024',
    role: 'Front-end',
    summary: 'A demo project.',
    slug: { current: 'detail-demo' },
    coverImage: { asset: { url: 'https://cdn.sanity.io/images/demo/demo/demo.jpg' } },
    gallery: [{ asset: { url: 'https://cdn.sanity.io/images/demo/demo/1.jpg' } }]
  }),
}))

test('renders project detail content', async () => {
  const ui = await ProjectDetail({ params: { slug: 'detail-demo' } } as any)
  render(ui as any)
  expect(screen.getByText('Detail Demo')).toBeInTheDocument()
  expect(screen.getByRole('img', { name: 'Detail Demo' })).toBeInTheDocument()
})
