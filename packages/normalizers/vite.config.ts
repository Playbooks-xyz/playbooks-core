import path from 'path';
import { defineConfig } from 'vite';
import { runCommand } from 'vite-plugin-yalc';

export default defineConfig(({ mode }) => ({
	base: './',
	build: {
		ssr: true,
		sourcemap: mode === 'development',
		lib: {
			entry: [
				path.resolve(__dirname, 'src/index.ts'),
				path.resolve(__dirname, 'src/base.ts'),
				path.resolve(__dirname, 'src/json-api.ts'),
			],
			name: 'Normalizers',
			formats: ['es', 'cjs'],
		},
		rollupOptions: {
			external: ['os'],
		},
	},
	plugins: [runCommand('npm run build:ts')],
	resolve: {
		alias: {
			src: path.resolve(__dirname, '/src'),
		},
	},
}));
