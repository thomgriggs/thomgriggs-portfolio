import { vi } from "vitest";
import React from 'react';
import { render, screen } from '@testing-library/react';
import Page from '../page';

vi.mock('next/link', () => ({
	default: ({ href, children, ...props }: any) => (
		<a href={href} {...props}>
			{children}
		</a>
	),
}));

test('home renders and shows nav links', () => {
	render(<Page />);
	expect(screen.getByText(/Front-end developer/i)).toBeInTheDocument();
});
