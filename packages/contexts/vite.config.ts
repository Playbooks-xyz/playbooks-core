import react from '@vitejs/plugin-react';

import path from 'path';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { defineConfig } from 'vite';
import { runCombined } from 'vite-plugin-yalc';

export default defineConfig(({ mode }) => ({
	base: './',
	build: {
		sourcemap: mode === 'development',
		lib: {
			entry: [
				path.resolve(__dirname, 'src/index.tsx'),
				path.resolve(__dirname, 'src/loading.tsx'),
				path.resolve(__dirname, 'src/seo.tsx'),
				path.resolve(__dirname, 'src/toast.tsx'),
			],
			name: 'Contexts',
			formats: ['es', 'cjs'],
			fileName: (format, entryName) => (format === 'es' ? `${entryName}.mjs` : `${entryName}.cjs`),
		},
		rollupOptions: {
			external: [
				'react',
				'react-dom',
				'react/jsx-runtime',
				'next',
				'next/dynamic',
				'next/head',
				'next/link',
				'next/router',
			],
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
