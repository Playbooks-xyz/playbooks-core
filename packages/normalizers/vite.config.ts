import path from 'path';
import { defineConfig } from 'vite';
import { runCommand } from 'vite-plugin-yalc';

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
	plugins: [runCommand('npm run build:ts')],
	resolve: {
		alias: {
			src: path.resolve(__dirname, '/src'),
		},
	},
}));
