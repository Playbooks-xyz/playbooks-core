import path from 'path';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { defineConfig } from 'vite';
import { runCombined } from 'vite-plugin-yalc';

export default defineConfig(({ mode }) => ({
	base: './',
	build: {
		sourcemap: mode === 'development',
		lib: {
			entry: [path.resolve(__dirname, 'src/index.tsx')],
			name: 'Components',
			formats: ['es', 'cjs'],
			fileName: (format, entryName) => (format === 'es' ? `${entryName}.mjs` : `${entryName}.cjs`),
		},
		rollupOptions: {
			external: ['react', 'react-dom', 'next/router'],
			plugins: [peerDepsExternal()],
		},
	},
	plugins: [runCombined()],
	resolve: {
		alias: {
			src: path.resolve(__dirname, '/src'),
		},
	},
}));
