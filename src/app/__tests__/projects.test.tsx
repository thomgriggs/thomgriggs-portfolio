import { vi } from "vitest";
import React from 'react';
import { render, screen } from '@testing-library/react';
import ProjectsPage from '../projects/page';
vi.mock('@/lib/sanity.queries', () => ({
	getAllProjects: async () => [
		{
			_id: '1',
			title: 'Demo',
			year: '2024',
			slug: { current: 'demo' },
			coverImage: {
				asset: { url: 'https://cdn.sanity.io/images/demo/demo/demo.jpg' },
			},
		},
	],
}));

vi.mock('next/link', () => ({
	default: ({ href, children, ...props }: any) => (
		<a href={href} {...props}>
			{children}
		</a>
	),
}));
vi.mock('next/image', () => ({
	__esModule: true,
	default: (props: any) => <img alt={props.alt} src={props.src} />,
}));

test('projects page renders project card', async () => {
	const ui = await ProjectsPage();
	render(ui as any);
	expect(screen.getByText('Demo')).toBeInTheDocument();
});
