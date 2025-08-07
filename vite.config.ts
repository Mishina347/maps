import { defineConfig } from 'vite'

export default defineConfig({
	build: {
		outDir: './dist',
		minify: 'esbuild',
		sourcemap: false,
		rollupOptions: {
			input: 'index.html',
		},
	},
})
