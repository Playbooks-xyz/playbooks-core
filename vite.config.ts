import react from '@vitejs/plugin-react';

import path from 'path';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => {
	return {
		base: './',
		build: {
			sourcemap: mode === 'development',
			lib: {
				entry: path.resolve(__dirname, 'src/index.tsx'),
				name: 'Core',
				formats: ['es', 'cjs'],
				fileName: (format, entryName) => (format === 'es' ? `${entryName}.mjs` : `${entryName}.cjs`),
			},
			rollupOptions: {
				external: ['react', 'react-dom'],
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
