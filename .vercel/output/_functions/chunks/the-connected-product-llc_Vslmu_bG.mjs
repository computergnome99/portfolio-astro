import { c as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CA7pQFHm.mjs';
import 'clsx';

const frontmatter = {
  "title": "The Connected Product LLC",
  "date": "2023 - Present",
  "role": "Systems Administrator & Writer",
  "link": "https://theconnectedproduct.com/"
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode(Fragment, {});
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent();
}

const url = "src/assets/md/expreience/the-connected-product-llc.mdx";
const file = "/home/calvin/Documents/Code/portfolio/src/assets/md/expreience/the-connected-product-llc.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/calvin/Documents/Code/portfolio/src/assets/md/expreience/the-connected-product-llc.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
