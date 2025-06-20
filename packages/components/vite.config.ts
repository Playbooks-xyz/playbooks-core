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
				path.resolve(__dirname, 'src/animation.tsx'),
				path.resolve(__dirname, 'src/currency-input.tsx'),
				path.resolve(__dirname, 'src/fade.tsx'),
				path.resolve(__dirname, 'src/font-awesome.tsx'),
				path.resolve(__dirname, 'src/google-autocomplete.tsx'),
				path.resolve(__dirname, 'src/masked-input.tsx'),
				path.resolve(__dirname, 'src/phone-input.tsx'),
				path.resolve(__dirname, 'src/scrollspy.tsx'),
				path.resolve(__dirname, 'src/skeleton.tsx'),
				path.resolve(__dirname, 'src/waypoint.tsx'),
			],
			name: 'Components',
			formats: ['es', 'cjs'],
			fileName: (format, entryName) => (format === 'es' ? `${entryName}.mjs` : `${entryName}.cjs`),
		},
		rollupOptions: {
			external: ['react', 'react-dom'],
			output: {
				globals: {
					react: 'React',
					'react-dom': 'ReactDOM',
					'react/jsx-runtime': 'react/jsx-runtime',
				},
			},
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
