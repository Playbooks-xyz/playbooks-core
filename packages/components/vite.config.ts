import path from 'path';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { defineConfig } from 'vite';
import { runCommand } from 'vite-plugin-yalc';

export default defineConfig(({ mode }) => ({
	base: './',
	build: {
		cssCodeSplit: true,
		sourcemap: mode === 'development',
		lib: {
			entry: [
				path.resolve(__dirname, 'src/index.tsx'),
				path.resolve(__dirname, 'src/animation.tsx'),
				path.resolve(__dirname, 'src/chart.tsx'),
				path.resolve(__dirname, 'src/context.tsx'),
				path.resolve(__dirname, 'src/currency-input.tsx'),
				path.resolve(__dirname, 'src/date-picker.tsx'),
				path.resolve(__dirname, 'src/date-range-picker.tsx'),
				path.resolve(__dirname, 'src/drag-drop.tsx'),
				path.resolve(__dirname, 'src/fade.tsx'),
				path.resolve(__dirname, 'src/font-awesome.tsx'),
				path.resolve(__dirname, 'src/google-autocomplete.tsx'),
				path.resolve(__dirname, 'src/masked-input.tsx'),
				path.resolve(__dirname, 'src/phone-input.tsx'),
				path.resolve(__dirname, 'src/scrollspy.tsx'),
				path.resolve(__dirname, 'src/skeleton.tsx'),
				path.resolve(__dirname, 'src/star-rating.tsx'),
				path.resolve(__dirname, 'src/waypoint.tsx'),
				path.resolve(__dirname, 'src/styles.css'),
			],
			name: 'Components',
			formats: ['cjs'],
			fileName: (format, entryName) => (format === 'es' ? `${entryName}.mjs` : `${entryName}.cjs`),
		},
		rollupOptions: {
			external: ['react', 'react-dom', 'next/router'],
			plugins: [peerDepsExternal()],
		},
	},
	plugins: [runCommand('npm run build:ts')],
	resolve: {
		alias: {
			src: path.resolve(__dirname, '/src'),
		},
	},
}));
