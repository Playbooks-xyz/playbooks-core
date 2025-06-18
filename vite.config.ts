import react from '@vitejs/plugin-react';

import path from 'path';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => {
	return {
		base: './',
		build: {
			sourcemap: mode !== 'production',
			lib: {
				entry: path.resolve(__dirname, 'src/index.tsx'),
				name: 'mylib',
				formats: ['es', 'cjs', 'umd', 'iife'],
				fileName: format => `index.${format}.js`,
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
		plugins: [react()],
		resolve: {
			alias: {
				src: path.resolve(__dirname, '/src'),
			},
		},
	};
});
