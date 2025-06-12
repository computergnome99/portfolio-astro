import { _ as __astro_tag_component__, c as createVNode, F as Fragment, a as createComponent, r as renderComponent, d as renderTemplate } from '../chunks/astro/server_CA7pQFHm.mjs';
import 'kleur/colors';
import { $ as $$FrameLayout, a as $$Title } from '../chunks/Title_CNck2IP7.mjs';
import 'clsx';
export { r as renderers } from '../chunks/_@astro-renderers_CReId-C5.mjs';

const frontmatter = {};
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "demos",
      children: "demos"
    }), "\n", createVNode(_components.p, {
      children: "I’ll be adding links to live versions of various projects here soon."
    }), "\n", createVNode(_components.p, {
      children: ["For now, check out my ", createVNode(_components.a, {
        href: "https://github.com/computergnome99",
        children: "GitHub"
      }), " to see any of my public projects there."]
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
Content.moduleId = "/home/calvin/Documents/Code/portfolio/src/assets/md/demos.mdx";
__astro_tag_component__(Content, 'astro:jsx');

const $$Demos = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "FrameLayout", $$FrameLayout, {}, { "default": ($$result2) => renderTemplate`   ${renderComponent($$result2, "Data", Content, {})} `, "head": ($$result2) => renderTemplate`<title>Demos</title>`, "title": ($$result2) => renderTemplate`${renderComponent($$result2, "Title", $$Title, { "slot": "title", "parts": { "~": "/", demos: "/demos" } })}` })}`;
}, "/home/calvin/Documents/Code/portfolio/src/pages/demos.astro", void 0);

const $$file = "/home/calvin/Documents/Code/portfolio/src/pages/demos.astro";
const $$url = "/demos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Demos,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
