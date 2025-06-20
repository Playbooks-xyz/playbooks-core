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
				path.resolve(__dirname, 'src/keyboard.tsx'),
				path.resolve(__dirname, 'src/mouse.tsx'),
				path.resolve(__dirname, 'src/store.tsx'),
				path.resolve(__dirname, 'src/util.tsx'),
				path.resolve(__dirname, 'src/window.tsx'),
				path.resolve(__dirname, 'src/wrappers.tsx'),
			],
			name: 'Hooks',
			formats: ['es', 'cjs'],
			fileName: (format, entryName) => (format === 'es' ? `${entryName}.mjs` : `${entryName}.cjs`),
		},
		rollupOptions: {
			external: ['react', 'react-dom', 'react/jsx-runtime', '@playbooks/contexts'],
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
