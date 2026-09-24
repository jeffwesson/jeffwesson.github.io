import { readFileSync } from 'node:fs';
import { defineConfig } from 'vite';

const { version } = JSON.parse(readFileSync('node_modules/@awesome.me/webawesome/package.json', 'utf8'));

// The site itself has no build step — GitHub Pages serves this branch raw. `vite build` only
// produces the Web Awesome bundle in vendor/, which is committed alongside the HTML.
export default defineConfig({
	build: {
		outDir: 'vendor',
		emptyOutDir: true,
		rollupOptions: {
			input: 'src/webawesome.js',
			output: {
				entryFileNames: '[name].js',
				assetFileNames: '[name][extname]',
				// Read by scripts/check-wa-version.mjs to catch a version bump without a rebuild.
				// postBanner is applied after minification, which would strip a plain banner.
				postBanner: `/*! webawesome@${version} */`,
			},
		},
	},
});
