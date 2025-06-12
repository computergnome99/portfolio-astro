import { _ as __astro_tag_component__, c as createVNode, F as Fragment, a as createComponent, b as createAstro, r as renderComponent, d as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../chunks/astro/server_CA7pQFHm.mjs';
import 'kleur/colors';
import { $ as $$FrameLayout, a as $$Title } from '../chunks/Title_CNck2IP7.mjs';
import { a as getCollection } from '../chunks/_astro_content_CQZ8_ruM.mjs';
import 'clsx';
export { r as renderers } from '../chunks/_@astro-renderers_CReId-C5.mjs';

const frontmatter = {};
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "experience",
      children: "experience"
    }), "\n", createVNode(_components.p, {
      children: "I’ve had the opportunity to work with a range of companies and teams over the\nyears - from startups to large enterprises - contributing to projects across\ndesign systems, software engineering, and web development."
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/calvin/Documents/Code/portfolio/src/assets/md/experience.mdx";
__astro_tag_component__(Content, 'astro:jsx');

const $$Astro = createAstro();
const $$Experience = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Experience;
  const pages = await getCollection("experience");
  const url = Astro2.url.pathname;
  return renderTemplate`${renderComponent($$result, "FrameLayout", $$FrameLayout, {}, { "default": async ($$result2) => renderTemplate`   ${renderComponent($$result2, "Data", Content, {})} ${maybeRenderHead()}<ul> ${pages.sort((a, b) => b.data.date.localeCompare(a.data.date)).map((page) => renderTemplate`<li> <a${addAttribute(`${url}/${page.id}`, "href")}>${page.data.title}</a> <em>(${page.data.date})</em> </li>`)} </ul> `, "head": async ($$result2) => renderTemplate`<title>Experience</title>`, "title": async ($$result2) => renderTemplate`${renderComponent($$result2, "Title", $$Title, { "slot": "title", "parts": { "~": "/", experience: "/experience" } })}` })}`;
}, "/home/calvin/Documents/Code/portfolio/src/pages/experience.astro", void 0);

const $$file = "/home/calvin/Documents/Code/portfolio/src/pages/experience.astro";
const $$url = "/experience";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Experience,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
