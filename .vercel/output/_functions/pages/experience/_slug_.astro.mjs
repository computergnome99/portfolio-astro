import { a as createComponent, b as createAstro, r as renderComponent, d as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../../chunks/astro/server_CA7pQFHm.mjs';
import 'kleur/colors';
import { $ as $$FrameLayout, a as $$Title } from '../../chunks/Title_CNck2IP7.mjs';
import { $ as $$ChipBowl, a as $$Chip } from '../../chunks/ChipBowl_C-CPE_oz.mjs';
import { g as getEntry, r as renderEntry } from '../../chunks/_astro_content_CQZ8_ruM.mjs';
export { r as renderers } from '../../chunks/_@astro-renderers_CReId-C5.mjs';

const $$Astro = createAstro();
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const page = await getEntry("experience", slug);
  if (page === void 0) return Astro2.redirect("/experience");
  const { Content } = await renderEntry(page);
  return renderTemplate`${renderComponent($$result, "FrameLayout", $$FrameLayout, {}, { "default": async ($$result2) => renderTemplate`   ${maybeRenderHead()}<h1>${page.data.title}</h1> ${renderComponent($$result2, "ChipBowl", $$ChipBowl, {}, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Chip", $$Chip, { "color": "blue" }, { "default": async ($$result4) => renderTemplate`${page.data.date}` })} ${!!page.data.role && renderTemplate`${renderComponent($$result3, "Chip", $$Chip, { "color": "teal" }, { "default": async ($$result4) => renderTemplate`${page.data.role}` })}`}${!!page.data.link && renderTemplate`${renderComponent($$result3, "Chip", $$Chip, { "color": "teal" }, { "default": async ($$result4) => renderTemplate`${" "}<a${addAttribute(page.data.link, "href")}>related link</a> (external)
` })}`}` })} ${renderComponent($$result2, "Content", Content, {})} `, "head": async ($$result2) => renderTemplate`<title>Experience / ${page.data.title}</title>`, "title": async ($$result2) => renderTemplate`${renderComponent($$result2, "Title", $$Title, { "slot": "title", "parts": {
    "~": "/",
    experience: "/experience",
    [slug]: `/experience/${slug ?? ""}`
  } })}` })}`;
}, "/home/calvin/Documents/Code/portfolio/src/pages/experience/[slug].astro", void 0);

const $$file = "/home/calvin/Documents/Code/portfolio/src/pages/experience/[slug].astro";
const $$url = "/experience/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
