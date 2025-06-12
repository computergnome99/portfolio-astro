import { c as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CA7pQFHm.mjs';
import 'clsx';

const frontmatter = {
  "title": "Personal Contracting",
  "date": "2008 - Present"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "epicor-erp-development-and-maintenance",
    "text": "Epicor ERP Development and Maintenance"
  }, {
    "depth": 2,
    "slug": "web-application-development",
    "text": "Web Application Development"
  }];
}
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Since 2008, I have worked as a private contractor or sub-contractor in the IT,\nWeb/Software Development, and Database Management spaces, gaining extensive\nexperience across various domains. My work has involved collaborating with\ndiverse clients to deliver tailored solutions that meet unique business needs."
    }), "\n", createVNode(_components.h2, {
      id: "epicor-erp-development-and-maintenance",
      children: "Epicor ERP Development and Maintenance"
    }), "\n", createVNode(_components.p, {
      children: "Developed customizations to the user experience using UI customizations, BPM\ntools, Data Directives, and other workflow automation tools. Managed the\ndevelopment and testing of Epicor Configurators, ensuring their accuracy and\nfunctionality before deployment. Provided updates for Epicor systems, focusing\non transitions from Epicor 9 to Epicor 10, including necessary software and code\nupdates. Created and maintained SQL databases for Epicor ERP systems, ensuring\ndata integrity and optimal performance. Delivered actionable information to\nprocess owners and stakeholders through comprehensive reporting and business\nintelligence tools such as Crystal Reports, SSRS, Query and Dashboard Creation,\nand Microsoft PowerBI."
    }), "\n", createVNode(_components.h2, {
      id: "web-application-development",
      children: "Web Application Development"
    }), "\n", createVNode(_components.p, {
      children: "Designed and developed web applications across a variety of industries using\nmodern JavaScript frameworks such as SvelteKit and Angular, as well as PHP.\nFocused on creating SEO-friendly and accessible solutions, ensuring optimal user\nexperiences and adherence to web standards. Developed responsive designs to\naccommodate various display sizes and platforms, implementing best practices in\nperformance optimization and UI design."
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

const url = "src/assets/md/expreience/personal-contracting.mdx";
const file = "/home/calvin/Documents/Code/portfolio/src/assets/md/expreience/personal-contracting.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/calvin/Documents/Code/portfolio/src/assets/md/expreience/personal-contracting.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
