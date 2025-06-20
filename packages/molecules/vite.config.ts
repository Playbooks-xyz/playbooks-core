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
				path.resolve(__dirname, 'src/avatars/avatars'),
				path.resolve(__dirname, 'src/cards/cards'),
				path.resolve(__dirname, 'src/feedbacks/feedbacks'),
				path.resolve(__dirname, 'src/inputs/inputs'),
				path.resolve(__dirname, 'src/items/items'),
				path.resolve(__dirname, 'src/lists/lists'),
				path.resolve(__dirname, 'src/mdx/mdx'),
				path.resolve(__dirname, 'src/paginations/paginations'),
				path.resolve(__dirname, 'src/skeletons/skeletons'),
				path.resolve(__dirname, 'src/toasts/toasts'),
				path.resolve(__dirname, 'src/toggles/toggles'),
			],
			name: 'Molecules',
			formats: ['es', 'cjs'],
			fileName: (format, entryName) => (format === 'es' ? `${entryName}.mjs` : `${entryName}.cjs`),
		},
		rollupOptions: {
			external: ['react', 'react-dom', 'react/jsx-runtime'],
			output: {
				globals: {
					react: 'React',
					'react-dom': 'ReactDOM',
					'react/jsx-runtime': 'react/jsx-runtime',
				},
			},
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
