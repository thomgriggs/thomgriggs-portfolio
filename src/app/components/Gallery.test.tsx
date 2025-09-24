import React from 'react'
import { render, screen } from '@testing-library/react'
import { Gallery } from './Gallery'

test('renders images when gallery has items', () => {
  render(<Gallery items={[{ asset: { url: 'https://cdn.sanity.io/images/demo/demo/1.jpg' } }]} />)
  expect(screen.getAllByRole('presentation').length).toBeGreaterThan(0)
})
