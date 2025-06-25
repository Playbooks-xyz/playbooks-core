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
				path.resolve(__dirname, 'src/fathom-context.tsx'),
				path.resolve(__dirname, 'src/font-context.tsx'),
				path.resolve(__dirname, 'src/intercom-context.tsx'),
				path.resolve(__dirname, 'src/loading-context.tsx'),
				path.resolve(__dirname, 'src/mixpanel-context.tsx'),
				path.resolve(__dirname, 'src/session-context.tsx'),
				path.resolve(__dirname, 'src/storage-context.tsx'),
				path.resolve(__dirname, 'src/store-context.tsx'),
				path.resolve(__dirname, 'src/stripe-context.tsx'),
				path.resolve(__dirname, 'src/theme-context.tsx'),
				path.resolve(__dirname, 'src/toast-context.tsx'),
			],
			name: 'Contexts',
			formats: ['es', 'cjs'],
			fileName: (format, entryName) => `${entryName}.${format}.js`,
		},
		rollupOptions: {
			external: ['react', 'react-dom', 'react/jsx-runtime', 'next', 'next/font', 'next/router'],
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
