import react from '@vitejs/plugin-react';

import path from 'path';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { defineConfig } from 'vite';
import { runSize } from 'vite-plugin-size';
import { runCommand } from 'vite-plugin-yalc';

export default defineConfig(({ mode }) => ({
	base: './',
	build: {
		cssCodeSplit: true,
		sourcemap: mode === 'development',
		lib: {
			entry: [
				path.resolve(__dirname, 'src/index.tsx'),
				path.resolve(__dirname, 'src/fathom.tsx'),
				path.resolve(__dirname, 'src/font.tsx'),
				path.resolve(__dirname, 'src/intercom.tsx'),
				path.resolve(__dirname, 'src/loading.tsx'),
				// path.resolve(__dirname, 'src/mixpanel.tsx'),
				path.resolve(__dirname, 'src/session.tsx'),
				path.resolve(__dirname, 'src/storage.tsx'),
				path.resolve(__dirname, 'src/store.tsx'),
				path.resolve(__dirname, 'src/stripe.tsx'),
				path.resolve(__dirname, 'src/theme.tsx'),
				path.resolve(__dirname, 'src/toast.tsx'),
				path.resolve(__dirname, 'src/styles.css'),
			],
			name: 'Contexts',
			formats: ['es'],
			fileName: (format, entryName) => `${entryName}.${format}.js`,
		},
		rollupOptions: {
			external: ['os', 'react', 'react-dom', 'react/jsx-runtime'],
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
