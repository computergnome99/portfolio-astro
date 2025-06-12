import { _ as __astro_tag_component__, c as createVNode, F as Fragment, a as createComponent, r as renderComponent, d as renderTemplate } from '../chunks/astro/server_CA7pQFHm.mjs';
import 'kleur/colors';
import { $ as $$FrameLayout, a as $$Title } from '../chunks/Title_CNck2IP7.mjs';
import { $ as $$ChipBowl, a as $$Chip } from '../chunks/ChipBowl_C-CPE_oz.mjs';
import 'clsx';
export { r as renderers } from '../chunks/_@astro-renderers_CReId-C5.mjs';

const frontmatter = {};
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "about",
      children: "about"
    }), "\n", createVNode(_components.h2, {
      id: "skills",
      children: "skills"
    }), "\n", createVNode(_components.p, {
      children: "Throughout my career, I have developed a diverse set of skills in various\nprogramming languages, frameworks, and tools."
    }), "\n", createVNode(_components.h3, {
      id: "known-languages",
      children: "known languages"
    }), "\n", createVNode($$ChipBowl, {
      children: [createVNode($$Chip, {
        color: "sapphire",
        children: " JavaScript "
      }), createVNode($$Chip, {
        color: "sapphire",
        children: " TypeScript "
      }), createVNode($$Chip, {
        color: "sapphire",
        children: " Go "
      }), createVNode($$Chip, {
        color: "sapphire",
        children: " HTML "
      }), createVNode($$Chip, {
        color: "sapphire",
        children: " Python "
      }), createVNode($$Chip, {
        color: "sapphire",
        children: " Bash "
      }), createVNode($$Chip, {
        color: "sapphire",
        children: " Lua "
      }), createVNode($$Chip, {
        color: "sapphire",
        children: " CSS "
      }), createVNode($$Chip, {
        color: "sapphire",
        children: " SCSS "
      }), createVNode($$Chip, {
        color: "sapphire",
        children: " PHP "
      }), createVNode($$Chip, {
        color: "sapphire",
        children: " SQL "
      }), createVNode($$Chip, {
        color: "sapphire",
        children: " C# "
      }), createVNode($$Chip, {
        color: "sapphire",
        children: " VisualBasic "
      }), createVNode($$Chip, {
        color: "sapphire",
        children: " LINQ "
      })]
    }), "\n", createVNode(_components.h3, {
      id: "known-js-frameworks-and-libraries",
      children: "known js frameworks and libraries"
    }), "\n", createVNode($$ChipBowl, {
      children: [createVNode($$Chip, {
        color: "sky",
        children: " Astro "
      }), createVNode($$Chip, {
        color: "sky",
        children: " HTMX "
      }), createVNode($$Chip, {
        color: "sky",
        children: " Angular "
      }), createVNode($$Chip, {
        color: "sky",
        children: " SvelteKit "
      }), createVNode($$Chip, {
        color: "sky",
        children: " Strapi "
      }), createVNode($$Chip, {
        color: "sky",
        children: " Storybook "
      }), createVNode($$Chip, {
        color: "sky",
        children: " React "
      }), createVNode($$Chip, {
        color: "sky",
        children: " Lit "
      })]
    }), "\n", createVNode(_components.h3, {
      id: "known-css-frameworks-and-ui-libraries",
      children: "known css frameworks and ui libraries"
    }), "\n", createVNode($$ChipBowl, {
      children: [createVNode($$Chip, {
        color: "teal",
        children: " Web Awesome / Shoelace "
      }), createVNode($$Chip, {
        color: "teal",
        children: " Tailwind CSS "
      }), createVNode($$Chip, {
        color: "teal",
        children: " Tailwind UI "
      }), createVNode($$Chip, {
        color: "teal",
        children: " Angular Material "
      }), createVNode($$Chip, {
        color: "teal",
        children: " Bootstrap CSS "
      }), createVNode($$Chip, {
        color: "teal",
        children: " MUI "
      })]
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
Content.moduleId = "/home/calvin/Documents/Code/portfolio/src/assets/md/about.mdx";
__astro_tag_component__(Content, 'astro:jsx');

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "FrameLayout", $$FrameLayout, {}, { "default": ($$result2) => renderTemplate`   ${renderComponent($$result2, "Data", Content, {})} `, "head": ($$result2) => renderTemplate`<title>About</title>`, "title": ($$result2) => renderTemplate`${renderComponent($$result2, "Title", $$Title, { "slot": "title", "parts": { "~": "/", about: "/about" } })}` })}`;
}, "/home/calvin/Documents/Code/portfolio/src/pages/about.astro", void 0);

const $$file = "/home/calvin/Documents/Code/portfolio/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
