import React from 'react';
import { render, screen } from '@testing-library/react';
import { HomeContent } from '@/app/components/HomeContent';

test('home renders and shows nav links', () => {
	render(<HomeContent />);
	expect(screen.getByText(/Front-end developer/i)).toBeInTheDocument();
	expect(screen.getByRole('link', { name: /projects/i })).toBeInTheDocument();
	expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument();
	expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument();
});
