import path from 'path';
import { defineConfig } from 'vite';
import { runDts, runYalc } from 'vite-plugin-yalc';

export default defineConfig(({ mode }) => ({
	base: './',
	build: {
		sourcemap: mode === 'development',
		lib: {
			entry: path.resolve(__dirname, 'src/index.ts'),
			name: 'Normalizers',
			formats: ['es', 'cjs'],
			fileName: (format, entryName) => (format === 'es' ? `${entryName}.mjs` : `${entryName}.cjs`),
		},
	},
	plugins: mode === 'development' ? [runYalc(), runDts()] : [],
	resolve: {
		alias: {
			src: path.resolve(__dirname, '/src'),
		},
	},
}));
