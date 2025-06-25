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
				path.resolve(__dirname, 'src/context.tsx'),
				path.resolve(__dirname, 'src/keyboard-hooks.tsx'),
				path.resolve(__dirname, 'src/mouse-hooks.tsx'),
				path.resolve(__dirname, 'src/store-hooks.tsx'),
				path.resolve(__dirname, 'src/util-hooks.tsx'),
				path.resolve(__dirname, 'src/window-hooks.tsx'),
				path.resolve(__dirname, 'src/wrapper-hooks.tsx'),
			],
			name: 'Hooks',
			formats: ['es', 'cjs'],
			fileName: (format, entryName) => `${entryName}.${format}.js`,
		},
		rollupOptions: {
			external: ['react', 'react-dom', 'react/jsx-runtime', '@playbooks/contexts'],
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
