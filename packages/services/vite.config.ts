import react from '@vitejs/plugin-react';

import path from 'path';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { defineConfig } from 'vite';
import { runCombined } from 'vite-plugin-yalc';

export default defineConfig(({ mode }) => ({
	base: './',
	build: {
		cssCodeSplit: true,
		sourcemap: mode === 'development',
		lib: {
			entry: [
				path.resolve(__dirname, 'src/index.tsx'),
				path.resolve(__dirname, 'src/algolia-api-service.tsx'),
				path.resolve(__dirname, 'src/algolia-search-service.tsx'),
			],
			name: 'Services',
			formats: ['es', 'cjs'],
			fileName: (format, entryName) => (format === 'es' ? `${entryName}.mjs` : `${entryName}.cjs`),
		},
		rollupOptions: {
			external: ['react', 'react-dom'],
			plugins: [peerDepsExternal()],
		},
	},
	plugins: [react(), runCombined()],
	resolve: {
		alias: {
			src: path.resolve(__dirname, '/src'),
		},
	},
}));
