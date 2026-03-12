import path from 'path';
import { defineConfig } from 'vite';
import { runSize } from 'vite-plugin-size';
import { runCommand } from 'vite-plugin-yalc';

export default defineConfig(({ mode }) => ({
	base: './',
	build: {
		ssr: true,
		sourcemap: mode === 'development',
		lib: {
			entry: [
				path.resolve(__dirname, 'src/index.ts'),
				path.resolve(__dirname, 'src/base-serializer.ts'),
				path.resolve(__dirname, 'src/json-api-serializer.ts'),
			],
			name: 'Serializers',
			formats: ['es', 'cjs'],
		},
		rollupOptions: {
			external: ['os'],
		},
	},
	plugins: [runCommand('npm run build:ts'), runSize()],
	resolve: {
		alias: {
			src: path.resolve(__dirname, '/src'),
		},
	},
}));
