import { c as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CA7pQFHm.mjs';
import { $ as $$Ascii } from './Ascii_CJohwa4I.mjs';
import 'clsx';

const frontmatter = {
  "title": "Kodiak LLC",
  "date": "2024 - Present",
  "role": "Senior Software Engineer",
  "link": "https://kodiaksolutions.io/"
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    em: "em",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode($$Ascii, {
      name: "kodiak",
      color: "green",
      spaced: true
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.em, {
        children: "More info coming soon…"
      })
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

const url = "src/assets/md/expreience/kodiak-llc.mdx";
const file = "/home/calvin/Documents/Code/portfolio/src/assets/md/expreience/kodiak-llc.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/calvin/Documents/Code/portfolio/src/assets/md/expreience/kodiak-llc.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
