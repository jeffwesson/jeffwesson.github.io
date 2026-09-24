// Everything the pages need from Web Awesome, bundled by `npm run build` into vendor/ so the
// browser makes two same-origin requests instead of chasing ~60 modules across the CDN.
// Add an import here when a page starts using another component.
import '@awesome.me/webawesome/dist/styles/themes/default.css';
import '@awesome.me/webawesome/dist/styles/native.css';

// page.js pulls in wa-button, wa-icon and wa-drawer itself for its mobile navigation drawer.
// With no `navigation` slot content the toggle stays hidden, but wa-icon still fetches its
// "bars" SVG from the Font Awesome CDN — one small request after render, not blocking.
import '@awesome.me/webawesome/dist/components/page/page.js';
import '@awesome.me/webawesome/dist/components/divider/divider.js';
