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
				path.resolve(__dirname, 'src/index.ts'),
				path.resolve(__dirname, 'src/arrays.ts'),
				path.resolve(__dirname, 'src/bytes.ts'),
				path.resolve(__dirname, 'src/countries.ts'),
				path.resolve(__dirname, 'src/dates.ts'),
				path.resolve(__dirname, 'src/downloads.ts'),
				path.resolve(__dirname, 'src/env.ts'),
				path.resolve(__dirname, 'src/errors.ts'),
				path.resolve(__dirname, 'src/extensions.ts'),
				path.resolve(__dirname, 'src/helpers.ts'),
				path.resolve(__dirname, 'src/inputs.ts'),
				path.resolve(__dirname, 'src/logger.ts'),
				path.resolve(__dirname, 'src/math.ts'),
				path.resolve(__dirname, 'src/regex.ts'),
				path.resolve(__dirname, 'src/strings.ts'),
				path.resolve(__dirname, 'src/tests.ts'),
				path.resolve(__dirname, 'src/transforms.ts'),
			],
			name: 'Utils',
			formats: ['es', 'cjs'],
			fileName: (format, entryName) => `${entryName}.${format}.js`,
		},
		rollupOptions: {
			external: ['uniqid'],
			plugins: [peerDepsExternal()],
		},
	},
	plugins: [runCommand('npm run build:ts'), runSize()],
	resolve: {
		alias: {
			src: path.resolve(__dirname, '/src'),
		},
	},
}));
