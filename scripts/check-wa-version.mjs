// The browser loads Web Awesome from vendor/, bundled out of the npm copy by `npm run build`
// and committed. Bumping package.json without rebuilding leaves the two out of step, and
// nothing else would notice, so check it here and wire this into `npm run format:check`-style CI.
import { readFileSync, readdirSync } from 'node:fs';

const VERSION_RE = /webawesome@(\d+\.\d+\.\d+)/g;

const pkg = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8'));
const installed = pkg.devDependencies['@awesome.me/webawesome'];

const mismatches = [];
let found = 0;

for (const file of [...readdirSync('.').filter((f) => f.endsWith('.html')), 'vendor/webawesome.js']) {
	const text = readFileSync(file, 'utf8');
	for (const [ref, version] of text.matchAll(VERSION_RE)) {
		found++;
		if (version !== installed) mismatches.push(`${file}: ${ref} (expected webawesome@${installed})`);
	}
}

if (!found) {
	console.error('No webawesome@x.y.z banner found in vendor/webawesome.js — check postBanner in vite.config.mjs');
	process.exit(1);
}

if (mismatches.length) {
	console.error(`Web Awesome version mismatch — package.json pins ${installed} (run \`npm run build\`):`);
	for (const m of mismatches) console.error(`  ${m}`);
	process.exit(1);
}

console.log(`Web Awesome ${installed}: ${found} reference(s) in sync.`);
