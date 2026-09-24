// The portfolio screenshots shipped straight from `images/` at their original size — up to
// 2880px wide and 1.9MB for a column that is never wider than 960px. This script derives
// responsive AVIF/WebP (plus one legacy fallback) into `images/opt/` so the HTML can hand
// browsers something appropriately sized.
//
// GitHub Pages serves this branch raw, so there is no build step at deploy time: the
// derivatives are generated here and committed alongside the sources.
//
// Sources are discovered from the HTML rather than by globbing `images/`, so favicons and
// retired artwork never get processed and the build only ever emits what the site requests.
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const SRC_DIR = 'images';
const OUT_DIR = 'images/opt';

// The main column is capped at 960px (--content-width), so 1920 covers 2x displays and
// there is nothing to gain above it. 480 keeps phones off the desktop-sized file.
const WIDTHS = [480, 960, 1920];
const FALLBACK_WIDTH = 960;

// These are UI screenshots: text and hard edges. Full chroma resolution costs a little
// size but avoids the colour smearing that 4:2:0 puts on small text.
const AVIF = { quality: 55, effort: 6, chromaSubsampling: '4:4:4' };
const WEBP = { quality: 80, effort: 6, smartSubsample: true };
const JPEG = { quality: 82, mozjpeg: true, chromaSubsampling: '4:4:4' };
const PNG = { compressionLevel: 9, palette: true };

const IMG_REF_RE = /\/images\/([A-Za-z0-9._-]+\.(?:png|jpe?g))/gi;

function discoverSources() {
	const found = new Set();
	for (const file of readdirSync('.').filter((f) => f.endsWith('.html'))) {
		const html = readFileSync(file, 'utf8');
		for (const [, name] of html.matchAll(IMG_REF_RE)) found.add(name);
	}

	// After the first run the HTML points at images/opt/* and no longer names the originals,
	// which would leave this set empty and make the script a one-shot. The previous manifest
	// records what was built last time, so union it in to keep re-runs idempotent. Deleting
	// images/opt/manifest.json resets discovery back to whatever the HTML references.
	try {
		const previous = JSON.parse(readFileSync(path.join(OUT_DIR, 'manifest.json'), 'utf8'));
		for (const { name } of previous) found.add(name);
	} catch {
		// No manifest yet (first run) or it is unreadable — the HTML scan stands on its own.
	}

	// Only build what still exists; a source retired from images/ should drop out rather
	// than crash the build on a stale manifest entry.
	return [...found].filter((name) => existsSync(path.join(SRC_DIR, name))).sort();
}

const kb = (bytes) => `${(bytes / 1024).toFixed(0)}K`;

async function build(name) {
	const src = path.join(SRC_DIR, name);
	const base = name.replace(/\.[^.]+$/, '');
	const { width, height, hasAlpha } = await sharp(src).metadata();

	// Never upscale, and clamp to the source width. Deduping matters: a 750px source would
	// otherwise emit byte-identical files for 960 and 1920, and a srcset advertising a "1920w"
	// candidate that is really 750px wide makes the browser pick the wrong one. Files are named
	// for the width they actually are, so the srcset descriptors cannot drift from reality.
	const targets = [...new Set(WIDTHS.map((w) => Math.min(w, width)))].sort((a, b) => a - b);
	const sources = { avif: [], webp: [] };

	for (const target of targets) {
		const resized = () => sharp(src).resize({ width: target, withoutEnlargement: true });
		for (const [format, opts] of [
			['avif', AVIF],
			['webp', WEBP],
		]) {
			const out = path.join(OUT_DIR, `${base}-${target}.${format}`);
			const { size } = await resized()[format](opts).toFile(out);
			sources[format].push({ width: target, file: out, size });
		}
	}

	// One legacy fallback for the handful of browsers with neither AVIF nor WebP. It still
	// gets resized — falling back should not mean shipping the 1.9MB original. Named for its
	// real width like every other derivative.
	const fallbackWidth = Math.min(FALLBACK_WIDTH, width);
	const ext = hasAlpha ? 'png' : 'jpg';
	const fallbackFile = path.join(OUT_DIR, `${base}-${fallbackWidth}.${ext}`);
	const { size: fallbackSize } = await sharp(src)
		.resize({ width: fallbackWidth, withoutEnlargement: true })
		[hasAlpha ? 'png' : 'jpeg'](hasAlpha ? PNG : JPEG)
		.toFile(fallbackFile);

	return {
		name,
		base,
		width,
		height,
		hasAlpha,
		originalSize: readFileSync(src).length,
		fallback: { file: fallbackFile, size: fallbackSize, width: fallbackWidth },
		sources,
	};
}

await mkdir(OUT_DIR, { recursive: true });

const names = discoverSources();
if (names.length === 0) {
	console.error('No /images/*.{png,jpg} references found in any root HTML file.');
	process.exit(1);
}

const manifest = [];
let before = 0;
let after = 0;

for (const name of names) {
	const result = await build(name);
	manifest.push(result);

	// What a 960px-wide viewport actually downloads today vs. after.
	const pick = (list) => list.find((s) => s.width === 960) ?? list.at(-1);
	before += result.originalSize;
	after += pick(result.sources.avif).size;

	console.log(
		`${name.padEnd(26)} ${String(result.width).padStart(4)}px ${kb(result.originalSize).padStart(6)}` +
			`  ->  avif ${kb(pick(result.sources.avif).size).padStart(5)}` +
			`  webp ${kb(pick(result.sources.webp).size).padStart(5)}` +
			`  ${result.hasAlpha ? 'png ' : 'jpeg'} ${kb(result.fallback.size).padStart(5)}`,
	);
}

await writeFile(path.join(OUT_DIR, 'manifest.json'), `${JSON.stringify(manifest, null, '\t')}\n`);

console.log(
	`\n${names.length} images  ${kb(before)} -> ${kb(after)} at 960w/AVIF ` +
		`(${(100 - (after / before) * 100).toFixed(0)}% smaller)`,
);
