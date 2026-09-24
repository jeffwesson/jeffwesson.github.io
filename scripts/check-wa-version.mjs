// The browser loads Web Awesome from the CDN in every environment; the npm copy exists
// only for tooling (editor autocomplete, greppable source, agent skills). Nothing enforces
// that the two agree, so check it here and wire this into `npm run format:check`-style CI.
import { readFileSync, readdirSync } from 'node:fs';

const CDN_VERSION_RE = /webawesome@(\d+\.\d+\.\d+)/g;

const pkg = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8'));
const installed = pkg.devDependencies['@awesome.me/webawesome'];

const mismatches = [];
let found = 0;

for (const file of readdirSync('.').filter((f) => f.endsWith('.html'))) {
	const html = readFileSync(file, 'utf8');
	for (const [ref, version] of html.matchAll(CDN_VERSION_RE)) {
		found++;
		if (version !== installed) mismatches.push(`${file}: ${ref} (expected webawesome@${installed})`);
	}
}

if (mismatches.length) {
	console.error(`CDN/npm version mismatch — package.json pins ${installed}:`);
	for (const m of mismatches) console.error(`  ${m}`);
	process.exit(1);
}

console.log(`Web Awesome ${installed}: ${found} CDN reference(s) in sync.`);
