import { exec } from 'node:child_process';
import path from 'path';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { defineConfig } from 'vite';

export function pushBuild() {
	return {
		name: 'pushBuild',
		closeBundle: async () => {
			exec('dts-bundle-generator --config dts.config.ts', (response, error) => {
				if (error) console.error(error);
				if (response) console.log(response);
				exec('npx yalc push', (response, error) => (error ? console.error(error) : null));
			});
		},
	};
}

export default defineConfig(({ mode }) => {
	const plugins = mode !== 'production' ? [pushBuild()] : [];

	return {
		base: './',
		build: {
			sourcemap: mode !== 'production',
			lib: {
				entry: [
					path.resolve(__dirname, 'src/index.ts'),
					path.resolve(__dirname, 'src/arrays.ts'),
					path.resolve(__dirname, 'src/dates.ts'),
					path.resolve(__dirname, 'src/downloads.ts'),
					path.resolve(__dirname, 'src/env.ts'),
					path.resolve(__dirname, 'src/errors.ts'),
					path.resolve(__dirname, 'src/helpers.ts'),
					path.resolve(__dirname, 'src/inputs.ts'),
					path.resolve(__dirname, 'src/logger.ts'),
					path.resolve(__dirname, 'src/math.ts'),
					path.resolve(__dirname, 'src/regex.ts'),
					path.resolve(__dirname, 'src/tests.ts'),
					path.resolve(__dirname, 'src/transforms.ts'),
				],
				name: 'Utils',
				formats: ['es', 'cjs'],
				fileName: (format, entryName) => (format === 'es' ? `${entryName}.mjs` : `${entryName}.cjs`),
			},
			rollupOptions: {
				external: ['uniqid'],
				output: {
					globals: {
						uniqid: 'uniqid',
					},
				},
				plugins: [peerDepsExternal()],
			},
		},
		plugins,
		resolve: {
			alias: {
				src: path.resolve(__dirname, '/src'),
			},
		},
	};
});
