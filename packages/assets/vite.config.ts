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
				path.resolve(__dirname, 'src/brand/brand.tsx'),
				path.resolve(__dirname, 'src/loaders/loaders.tsx'),
				path.resolve(__dirname, 'src/patterns/patterns.tsx'),
			],
			name: 'Assets',
			formats: ['es', 'cjs'],
			fileName: (format, entryName) => (format === 'es' ? `${entryName}.mjs` : `${entryName}.cjs`),
		},
		rollupOptions: {
			external: ['react', 'react-dom'],
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
