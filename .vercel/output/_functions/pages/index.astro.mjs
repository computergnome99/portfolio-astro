import { _ as __astro_tag_component__, c as createVNode, F as Fragment, a as createComponent, b as createAstro, r as renderComponent, d as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CA7pQFHm.mjs';
import 'kleur/colors';
import { $ as $$FrameLayout, a as $$Title } from '../chunks/Title_CNck2IP7.mjs';
import { _ as __vite_glob_0_5, a as __vite_glob_0_3, b as __vite_glob_0_4 } from '../chunks/logo-sm_CFCsl0fm.mjs';
import 'clsx';
/* empty css                                 */
export { r as renderers } from '../chunks/_@astro-renderers_CReId-C5.mjs';

const frontmatter = {};
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "intro",
      children: "intro"
    }), "\n", createVNode(_components.p, {
      children: "Hello, my name is Calvin Bonner. I am a developer from Grand Rapids, MI, with\nover a decade of experience in my field. My recent work has focused on utilizing\nweb technologies and frameworks to create robust web applications and\ncomprehensive enterprise design systems. I also invest time in teaching and\nmentoring the next generation of developers and doers. I’m passionate about\ndelivering my best in all endeavors, building engaging and useful tools with a\nstrong focus on the end-user."
    }), "\n", createVNode(_components.h2, {
      id: "site-contents",
      children: "Site Contents"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "/about",
          children: "about"
        }), " learn more about me and what I do"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "/experience",
          children: "experience"
        }), " a list of my past and current engagements"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "/demos",
          children: "demos"
        }), " projects and demos that I think are cool"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "/contact",
          children: "contact"
        }), " get in touch with me"]
      }), "\n"]
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
Content.moduleId = "/home/calvin/Documents/Code/portfolio/src/assets/md/index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "FrameLayout", $$FrameLayout, { "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate`   ${maybeRenderHead()}<pre id="logo" data-astro-cid-j7pv25f6>${__vite_glob_0_5}</pre> <pre id="logo-md" data-astro-cid-j7pv25f6>${__vite_glob_0_3}</pre> <pre id="logo-sm" data-astro-cid-j7pv25f6>${__vite_glob_0_4}</pre> ${renderComponent($$result2, "Data", Content, { "data-astro-cid-j7pv25f6": true })} `, "head": ($$result2) => renderTemplate`<title>Astro</title>`, "title": ($$result2) => renderTemplate`${renderComponent($$result2, "Title", $$Title, { "slot": "title", "parts": { "~": "/" }, "data-astro-cid-j7pv25f6": true })}` })} `;
}, "/home/calvin/Documents/Code/portfolio/src/pages/index.astro", void 0);

const $$file = "/home/calvin/Documents/Code/portfolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
