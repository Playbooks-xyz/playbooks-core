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
					path.resolve(__dirname, 'src/utils/arrays.ts'),
					path.resolve(__dirname, 'src/utils/dates.ts'),
					path.resolve(__dirname, 'src/utils/downloads.ts'),
					path.resolve(__dirname, 'src/utils/env.ts'),
					path.resolve(__dirname, 'src/utils/errors.ts'),
					path.resolve(__dirname, 'src/utils/helpers.ts'),
					path.resolve(__dirname, 'src/utils/inputs.ts'),
					path.resolve(__dirname, 'src/utils/logger.ts'),
					path.resolve(__dirname, 'src/utils/math.ts'),
					path.resolve(__dirname, 'src/utils/regex.ts'),
					path.resolve(__dirname, 'src/utils/tests.ts'),
					path.resolve(__dirname, 'src/utils/transforms.ts'),
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
				utils: path.resolve(__dirname, '/src/utils'),
			},
		},
	};
});
