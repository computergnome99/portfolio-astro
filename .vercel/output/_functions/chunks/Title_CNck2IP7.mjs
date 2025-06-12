import { a as createComponent, b as createAstro, e as addAttribute, f as renderSlot, q as renderHead, d as renderTemplate, s as renderScript, t as spreadAttributes, u as unescapeHTML, m as maybeRenderHead, r as renderComponent, v as createTransitionScope } from './astro/server_CA7pQFHm.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */
import { p as push, a as pop } from './_@astro-renderers_CReId-C5.mjs';

const $$Astro$2 = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}>${renderSlot($$result, $$slots["head"])}${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/home/calvin/Documents/Code/portfolio/src/layouts/BaseLayout.astro", void 0);

function Background($$payload, $$props) {
	push();

	$$payload.out += `<div id="background-anchor" aria-hidden="true" class="svelte-ld67rl"></div>`;
	pop();
}

const $$Astro$1 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/home/calvin/Documents/Code/portfolio/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/calvin/Documents/Code/portfolio/node_modules/astro/components/ClientRouter.astro", void 0);

function createSvgComponent({ meta, attributes, children }) {
  const Component = createComponent((_, props) => {
    const normalizedProps = normalizeProps(attributes, props);
    return renderTemplate`<svg${spreadAttributes(normalizedProps)}>${unescapeHTML(children)}</svg>`;
  });
  return Object.assign(Component, meta);
}
const ATTRS_TO_DROP = ["xmlns", "xmlns:xlink", "version"];
const DEFAULT_ATTRS = {};
function dropAttributes(attributes) {
  for (const attr of ATTRS_TO_DROP) {
    delete attributes[attr];
  }
  return attributes;
}
function normalizeProps(attributes, props) {
  return dropAttributes({ ...DEFAULT_ATTRS, ...attributes, ...props });
}

const House = createSvgComponent({"meta":{"src":"/_astro/house.nbeTysIe.svg","width":576,"height":512,"format":"svg"},"attributes":{"viewBox":"0 0 576 512"},"children":"<!--!Font Awesome Pro 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2025 Fonticons, Inc.--><path d=\"M298.6 12L288 2.7 277.4 12 5.4 252l21.2 24L64 243l0 253 0 16 16 0 416 0 16 0 0-16 0-253 37.4 33 21.2-24L298.6 12zM96 480l0-265.3L288 45.3 480 214.7 480 480l-112 0 0-176 0-16-16 0-128 0-16 0 0 16 0 176L96 480zm144 0l0-160 96 0 0 160-96 0z\" />"});

const User = createSvgComponent({"meta":{"src":"/_astro/user.BXUwIZEx.svg","width":448,"height":512,"format":"svg"},"attributes":{"viewBox":"0 0 448 512"},"children":"<!--!Font Awesome Pro 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2025 Fonticons, Inc.--><path d=\"M320 128a96 96 0 1 0 -192 0 96 96 0 1 0 192 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM43.3 480l361.3 0L360.4 336 87.6 336 43.3 480zM64 304l320 0 54.2 176 9.8 32-33.5 0-381 0L0 512l9.8-32L64 304z\" />"});

const Briefcase = createSvgComponent({"meta":{"src":"/_astro/briefcase.DDNhXVFq.svg","width":512,"height":512,"format":"svg"},"attributes":{"viewBox":"0 0 512 512"},"children":"<!--!Font Awesome Pro 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2025 Fonticons, Inc.--><path d=\"M144 0L128 0l0 16 0 80L32 96 0 96l0 32L0 448l0 32 32 0 448 0 32 0 0-32 0-320 0-32-32 0-96 0 0-80 0-16L368 0 144 0zM352 96L160 96l0-64 192 0 0 64zM144 128l224 0 112 0 0 128-144 0-32 0-96 0-32 0L32 256l0-128 112 0zM480 288l0 160L32 448l0-160 144 0 0 48 0 32 32 0 96 0 32 0 0-32 0-48 144 0zm-272 0l96 0 0 48-96 0 0-48z\" />"});

const Lightbulb = createSvgComponent({"meta":{"src":"/_astro/lightbulb.C0wR536H.svg","width":384,"height":512,"format":"svg"},"attributes":{"viewBox":"0 0 384 512"},"children":"<!--!Font Awesome Pro 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2025 Fonticons, Inc.--><path d=\"M310.3 258.1C326.5 234.8 336 206.6 336 176c0-79.5-64.5-144-144-144S48 96.5 48 176c0 30.6 9.5 58.8 25.7 82.1c4.1 5.9 8.8 12.3 13.6 19c0 0 0 0 0 0c12.7 17.5 27.1 37.2 38 57.1c8.9 16.2 13.7 33.3 16.2 49.9L109 384c-2.2-12-5.9-23.7-11.8-34.5c-9.9-18-22.2-34.9-34.5-51.8c0 0 0 0 0 0s0 0 0 0s0 0 0 0c-5.2-7.1-10.4-14.2-15.4-21.4C27.6 247.9 16 213.3 16 176C16 78.8 94.8 0 192 0s176 78.8 176 176c0 37.3-11.6 71.9-31.4 100.3c-5 7.2-10.2 14.3-15.4 21.4c0 0 0 0 0 0s0 0 0 0c-12.3 16.8-24.6 33.7-34.5 51.8c-5.9 10.8-9.6 22.5-11.8 34.5l-32.4 0c2.5-16.6 7.3-33.7 16.2-49.9c10.9-20 25.3-39.7 38-57.1c4.9-6.7 9.5-13 13.6-19zM192 96c-44.2 0-80 35.8-80 80l-32 0c0-61.9 50.1-112 112-112l0 32zM144 448l0 32 96 0 0-32-96 0zm-32 0l0-32 32 0 96 0 32 0 0 32 0 32 0 32-32 0-96 0-32 0 0-32 0-32z\" />"});

const Messages = createSvgComponent({"meta":{"src":"/_astro/messages.D9LsyEN6.svg","width":640,"height":512,"format":"svg"},"attributes":{"viewBox":"0 0 640 512"},"children":"<!--!Font Awesome Pro 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2025 Fonticons, Inc.--><path d=\"M96 384l32-16 96-48 160 0 32 0 0-32 0-256 0-32L384 0 32 0 0 0 0 32 0 288l0 32 32 0 32 0 32 0 0 28.2 0 3.8 0 32zm113.7-92.6L128 332.2l0-12.2 0-32-32 0-64 0L32 32l352 0 0 256-160 0-7.6 0-6.8 3.4zM256 448l32 0 128 0 96 48 32 16 0-32 0-3.8 0-28.2 32 0 32 0 32 0 0-32 0-256 0-32-32 0-160 0 0 32 160 0 0 256-64 0-32 0 0 32 0 12.2-81.7-40.8-6.8-3.4-7.6 0-128 0 0-64-32 0 0 64 0 32z\" />"});

const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<ul data-astro-cid-cf5drfxn> <li data-astro-cid-cf5drfxn> <a href="/" aria-label="index" data-astro-cid-cf5drfxn> ${renderComponent($$result, "House", House, { "data-astro-cid-cf5drfxn": true })} </a> </li> <li data-astro-cid-cf5drfxn> <a href="/about" aria-label="about" data-astro-cid-cf5drfxn> ${renderComponent($$result, "User", User, { "data-astro-cid-cf5drfxn": true })} </a> </li> <li data-astro-cid-cf5drfxn> <a href="/experience" aria-label="experience" data-astro-cid-cf5drfxn> ${renderComponent($$result, "Briefcase", Briefcase, { "data-astro-cid-cf5drfxn": true })} </a> </li> <li data-astro-cid-cf5drfxn> <a href="/demos" aria-label="demos" data-astro-cid-cf5drfxn> ${renderComponent($$result, "Lightbulb", Lightbulb, { "data-astro-cid-cf5drfxn": true })} </a> </li> <li data-astro-cid-cf5drfxn> <a href="/contact" aria-label="contact" data-astro-cid-cf5drfxn> ${renderComponent($$result, "Messages", Messages, { "data-astro-cid-cf5drfxn": true })} </a> </li> </ul> `;
}, "/home/calvin/Documents/Code/portfolio/src/components/navigation/Navigation.astro", void 0);

const $$FrameLayout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "data-astro-cid-uz7xq7d7": true }, { "default": ($$result2) => renderTemplate`   ${renderComponent($$result2, "Background", Background, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@components/background", "client:component-export": "Background", "data-astro-cid-uz7xq7d7": true, "data-astro-transition-persist": createTransitionScope($$result2, "6wkvmbaz") })} ${maybeRenderHead()}<div frame-outer data-astro-cid-uz7xq7d7> <div frame-inner data-astro-cid-uz7xq7d7> <nav aria-label="Primary" data-astro-cid-uz7xq7d7${addAttribute(createTransitionScope($$result2, "y47l42x6"), "data-astro-transition-persist")}> ${renderComponent($$result2, "Navigation", $$Navigation, { "data-astro-cid-uz7xq7d7": true })} </nav> <div content-outer data-astro-cid-uz7xq7d7> ${renderSlot($$result2, $$slots["title"])} <main data-astro-cid-uz7xq7d7> ${renderSlot($$result2, $$slots["default"])} </main> </div> </div> </div> `, "head": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["head"])}${renderComponent($$result2, "ClientRouter", $$ClientRouter, { "slot": "head", "data-astro-cid-uz7xq7d7": true })}` })} `;
}, "/home/calvin/Documents/Code/portfolio/src/layouts/FrameLayout.astro", "self");

const $$Astro = createAstro();
const $$Title = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Title;
  const { parts } = Astro2.props;
  Object.entries(parts).map(([title, route]) => {
    console.log(`Title: ${title}`, `Route: ${route}`);
  });
  return renderTemplate`${maybeRenderHead()}<nav data-astro-cid-3xpdbqhn> <ul data-astro-cid-3xpdbqhn> ${Object.entries(parts).map(([title, route]) => renderTemplate`<li data-astro-cid-3xpdbqhn> <a${addAttribute(route, "href")} data-astro-cid-3xpdbqhn> ${title} </a> </li>`)} </ul> </nav> `;
}, "/home/calvin/Documents/Code/portfolio/src/components/title/Title.astro", void 0);

export { $$FrameLayout as $, $$Title as a };
