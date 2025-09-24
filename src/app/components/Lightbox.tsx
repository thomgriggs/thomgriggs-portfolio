'use client';
import { useState } from 'react';
export function Lightbox({ src, alt }: { src: string; alt: string }) {
	const [open, setOpen] = useState(false);
	return (
		<>
			<button
				className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-card)] border border-white/10"
				onClick={() => setOpen(true)}
			>
				<img
					src={src}
					alt={alt || ''}
					loading="lazy"
					className="h-full w-full object-cover"
				/>
			</button>
			{open && (
				<div
					className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
					onClick={() => setOpen(false)}
				>
					<img
						src={src}
						alt={alt || ''}
						className="max-h-[90vh] max-w-[90vw] rounded-[var(--radius-card)] border border-white/15"
					/>
				</div>
			)}
		</>
	);
}
