import react from '@vitejs/plugin-react';

import path from 'path';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { defineConfig } from 'vite';
import { runSize } from 'vite-plugin-size';
import { runCommand } from 'vite-plugin-yalc';

export default defineConfig(({ mode }) => ({
	base: './',
	build: {
		sourcemap: mode === 'development',
		lib: {
			entry: [
				path.resolve(__dirname, 'src/index.tsx'),
				path.resolve(__dirname, 'src/accordions/accordions'),
				path.resolve(__dirname, 'src/avatars/avatars'),
				path.resolve(__dirname, 'src/breadcrumbs/breadcrumbs'),
				path.resolve(__dirname, 'src/buttons/buttons'),
				path.resolve(__dirname, 'src/cards/cards'),
				path.resolve(__dirname, 'src/context/context'),
				path.resolve(__dirname, 'src/feedbacks/feedbacks'),
				path.resolve(__dirname, 'src/form-groups/form-groups'),
				path.resolve(__dirname, 'src/forms/forms'),
				path.resolve(__dirname, 'src/inputs/inputs'),
				path.resolve(__dirname, 'src/items/items'),
				path.resolve(__dirname, 'src/lists/lists'),
				path.resolve(__dirname, 'src/mdx/mdx'),
				path.resolve(__dirname, 'src/paginations/paginations'),
				path.resolve(__dirname, 'src/pixels/pixels'),
				path.resolve(__dirname, 'src/progress-bars/progress-bars'),
				path.resolve(__dirname, 'src/skeletons/skeletons'),
				path.resolve(__dirname, 'src/slides/slides'),
				path.resolve(__dirname, 'src/stats/stats'),
				path.resolve(__dirname, 'src/subnavs/subnavs'),
				path.resolve(__dirname, 'src/tags/tags'),
				path.resolve(__dirname, 'src/toasts/toasts'),
				path.resolve(__dirname, 'src/toggles/toggles'),
			],
			name: 'Molecules',
			formats: ['es', 'cjs'],
			fileName: (format, entryName) => `${entryName}.${format}.js`,
		},
		rollupOptions: {
			external: ['react', 'react-dom', 'react/jsx-runtime'],
			plugins: [peerDepsExternal()],
		},
	},
	plugins: [react(), runCommand('npm run build:ts'), runSize()],
	resolve: {
		alias: {
			src: path.resolve(__dirname, '/src'),
		},
	},
}));
