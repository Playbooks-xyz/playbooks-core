import react from '@vitejs/plugin-react';

import path from 'path';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { defineConfig } from 'vite';
import { runCommand } from 'vite-plugin-yalc';

export default defineConfig(({ mode }) => ({
	base: './',
	build: {
		cssCodeSplit: true,
		sourcemap: mode === 'development',
		lib: {
			entry: [
				path.resolve(__dirname, 'src/index.tsx'),
				path.resolve(__dirname, 'src/algolia-api-service.tsx'),
				path.resolve(__dirname, 'src/algolia-service.tsx'),
			],
			name: 'Services',
			formats: ['cjs'],
			fileName: (format, entryName) => (format === 'es' ? `${entryName}.mjs` : `${entryName}.cjs`),
		},
		rollupOptions: {
			external: ['react', 'react-dom'],
			plugins: [peerDepsExternal()],
		},
	},
	plugins: [react(), runCommand('npm run build:ts')],
	resolve: {
		alias: {
			src: path.resolve(__dirname, '/src'),
		},
	},
}));
