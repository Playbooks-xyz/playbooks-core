import path from 'path';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { defineConfig } from 'vite';
import { runSize } from 'vite-plugin-size';
import { runCommand, runYalc } from 'vite-plugin-yalc';

export default defineConfig(({ mode }) => ({
	base: './',
	build: {
		cssCodeSplit: true,
		sourcemap: mode === 'development',
		lib: {
			entry: [
				path.resolve(__dirname, 'src/index.tsx'),
				path.resolve(__dirname, 'src/animation.tsx'),
				path.resolve(__dirname, 'src/context.tsx'),
				path.resolve(__dirname, 'src/count-up.tsx'),
				path.resolve(__dirname, 'src/currency-input.tsx'),
				path.resolve(__dirname, 'src/date-picker.tsx'),
				path.resolve(__dirname, 'src/date-range-picker.tsx'),
				path.resolve(__dirname, 'src/drag-drop.tsx'),
				path.resolve(__dirname, 'src/emojis.tsx'),
				path.resolve(__dirname, 'src/fade.tsx'),
				path.resolve(__dirname, 'src/font-awesome.tsx'),
				path.resolve(__dirname, 'src/google-autocomplete.tsx'),
				path.resolve(__dirname, 'src/google-map.tsx'),
				path.resolve(__dirname, 'src/masked-input.tsx'),
				path.resolve(__dirname, 'src/phone-input.tsx'),
				path.resolve(__dirname, 'src/scrollspy.tsx'),
				path.resolve(__dirname, 'src/skeleton.tsx'),
				path.resolve(__dirname, 'src/star-rating.tsx'),
				path.resolve(__dirname, 'src/waypoint.tsx'),
				path.resolve(__dirname, 'src/styles.css'),
			],
			name: 'Components',
			formats: ['es'],
			fileName: (format, entryName) => `${entryName}.${format}.js`,
		},
		rollupOptions: {
			external: ['os', 'react', 'react-dom', 'react/jsx-runtime'],
			plugins: [peerDepsExternal()],
		},
	},
	plugins: [runYalc(), runCommand('npm run build:dts'), runSize()],
	resolve: {
		alias: {
			src: path.resolve(__dirname, '/src'),
		},
	},
}));
