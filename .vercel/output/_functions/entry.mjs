import { r as renderers } from './chunks/_@astro-renderers_CReId-C5.mjs';
import { c as createExports } from './chunks/entrypoint_Cio-Iyyv.mjs';
import { manifest } from './manifest_C9CPUNim.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/contact.astro.mjs');
const _page3 = () => import('./pages/demos.astro.mjs');
const _page4 = () => import('./pages/experience/_slug_.astro.mjs');
const _page5 = () => import('./pages/experience.astro.mjs');
const _page6 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/contact.astro", _page2],
    ["src/pages/demos.astro", _page3],
    ["src/pages/experience/[slug].astro", _page4],
    ["src/pages/experience.astro", _page5],
    ["src/pages/index.astro", _page6]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "92dbc3da-5ac4-4ba0-8098-c8809967a663",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
