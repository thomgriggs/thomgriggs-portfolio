import { defineConfig } from 'vitest/config';
import { fileURLToPath } from 'url';

export default defineConfig({
	test: {
		environment: 'jsdom',
		globals: true,
		setupFiles: ['./vitest.setup.ts'],
		include: ['src/**/*.test.{ts,tsx}'],
		environmentOptions: { url: 'http://localhost' },
	},
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
	esbuild: {
		jsx: 'automatic',
		jsxDev: true,
	},
});
