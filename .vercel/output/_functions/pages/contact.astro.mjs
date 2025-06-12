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
    h2: "h2",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "contact",
      children: "contact"
    }), "\n", createVNode(_components.p, {
      children: "Interested in connecting? I’d love to hear from you."
    }), "\n", createVNode(_components.h2, {
      id: "profiles",
      children: "Profiles"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://github.com/computergnome99",
          children: "GitHub"
        })
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "direct-contact",
      children: "Direct Contact"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "tel:616-552-3988",
          children: "Phone"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "mailto:me@calvinbonner.com",
          children: "Email"
        })
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "other",
      children: "Other"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "resume.calvinbonner.dev",
          children: "Resume"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://ko-fi.com/calvinbonner",
          children: "Ko-fi"
        })
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
Content.moduleId = "/home/calvin/Documents/Code/portfolio/src/assets/md/contact.mdx";
__astro_tag_component__(Content, 'astro:jsx');

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "FrameLayout", $$FrameLayout, {}, { "default": ($$result2) => renderTemplate`   ${renderComponent($$result2, "Data", Content, {})} `, "head": ($$result2) => renderTemplate`<title>Contact</title>`, "title": ($$result2) => renderTemplate`${renderComponent($$result2, "Title", $$Title, { "slot": "title", "parts": { "~": "/", contact: "/contact" } })}` })}`;
}, "/home/calvin/Documents/Code/portfolio/src/pages/contact.astro", void 0);

const $$file = "/home/calvin/Documents/Code/portfolio/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
