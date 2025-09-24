import next from 'eslint-config-next';

export default [
	...next(),
	{
		rules: {
			// keep @next/next/link rule on (you already fixed anchors)
			'@next/next/no-html-link-for-pages': 'error',
			// useful with Tailwind: disallow @apply to custom classes = handled in CSS now
			// we simply avoid it by convention; no extra plugin needed
		},
	},
];
