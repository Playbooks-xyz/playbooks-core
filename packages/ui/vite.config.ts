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
				path.resolve(__dirname, 'src/accordions.tsx'),
				path.resolve(__dirname, 'src/alerts.tsx'),
				path.resolve(__dirname, 'src/avatars.tsx'),
				path.resolve(__dirname, 'src/badges.tsx'),
				path.resolve(__dirname, 'src/banners.tsx'),
				path.resolve(__dirname, 'src/breadcrumbs.tsx'),
				path.resolve(__dirname, 'src/button-groups.tsx'),
				path.resolve(__dirname, 'src/buttons.tsx'),
				path.resolve(__dirname, 'src/cards.tsx'),
				path.resolve(__dirname, 'src/commands.tsx'),
				path.resolve(__dirname, 'src/context.tsx'),
				path.resolve(__dirname, 'src/drops.tsx'),
				path.resolve(__dirname, 'src/feedbacks.tsx'),
				path.resolve(__dirname, 'src/fonts.tsx'),
				path.resolve(__dirname, 'src/footers.tsx'),
				path.resolve(__dirname, 'src/forms.tsx'),
				path.resolve(__dirname, 'src/grid.tsx'),
				path.resolve(__dirname, 'src/head.tsx'),
				path.resolve(__dirname, 'src/headers.tsx'),
				path.resolve(__dirname, 'src/heros.tsx'),
				path.resolve(__dirname, 'src/html.tsx'),
				path.resolve(__dirname, 'src/icons.tsx'),
				path.resolve(__dirname, 'src/input-groups.tsx'),
				path.resolve(__dirname, 'src/links.tsx'),
				path.resolve(__dirname, 'src/list-groups.tsx'),
				path.resolve(__dirname, 'src/loaders.tsx'),
				path.resolve(__dirname, 'src/menus.tsx'),
				path.resolve(__dirname, 'src/modals.tsx'),
				path.resolve(__dirname, 'src/navbars.tsx'),
				path.resolve(__dirname, 'src/navs.tsx'),
				path.resolve(__dirname, 'src/paginations.tsx'),
				path.resolve(__dirname, 'src/prefooters.tsx'),
				path.resolve(__dirname, 'src/progress-bars.tsx'),
				path.resolve(__dirname, 'src/radios.tsx'),
				path.resolve(__dirname, 'src/ranges.tsx'),
				path.resolve(__dirname, 'src/routes.tsx'),
				path.resolve(__dirname, 'src/sections.tsx'),
				path.resolve(__dirname, 'src/slides.tsx'),
				path.resolve(__dirname, 'src/spinners.tsx'),
				path.resolve(__dirname, 'src/switches.tsx'),
				path.resolve(__dirname, 'src/tables.tsx'),
				path.resolve(__dirname, 'src/tabs.tsx'),
				path.resolve(__dirname, 'src/tags.tsx'),
				path.resolve(__dirname, 'src/toasts.tsx'),
				path.resolve(__dirname, 'src/tooltips.tsx'),
				path.resolve(__dirname, 'src/styles.css'),
			],
			name: 'UI',
			formats: ['cjs'],
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
				'@fortawesome/fontawesome-svg-core',
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

// Docs
// https://github.com/vitejs/vite/discussions/9217
