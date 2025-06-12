import { c as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CA7pQFHm.mjs';
import { $ as $$Ascii } from './Ascii_CJohwa4I.mjs';
import 'clsx';

const frontmatter = {
  "title": "Crowe LLP",
  "date": "2021 - 2024",
  "role": "Senior Software Engineer"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "development-and-engineering",
    "text": "Development and Engineering"
  }, {
    "depth": 2,
    "slug": "strategy-and-architecture",
    "text": "Strategy and Architecture"
  }, {
    "depth": 2,
    "slug": "education-and-thought-leadership",
    "text": "Education and Thought Leadership"
  }];
}
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode($$Ascii, {
      name: "crowe",
      color: "yellow",
      spaced: true
    }), "\n", createVNode(_components.p, {
      children: "In the summer of 2021, I was hired at Crowe LLP to maintain their product design\nsystem and cultivate a user-focused front-end development practice. During my\ntenure, my role evolved to include the responsibilities of a lead developer,\nspearheading the design system project. I built over a dozen new components and\nrefactored numerous existing ones, ensuring the system’s robustness and\nenhancing both developer and end-user experiences. Collaborating closely with\nUI/UX designers, as well as a few fellow developers, we successfully overhauled\nthe design system, delivering a product we were genuinely proud of."
    }), "\n", createVNode(_components.h2, {
      id: "development-and-engineering",
      children: "Development and Engineering"
    }), "\n", createVNode(_components.p, {
      children: "A significant portion of my role was dedicated to developing the product design\nsystem. Built in Angular, the design system included a component library, CSS\nframework, graphics library, and themes for supported third-party libraries like\nAngular Material."
    }), "\n", createVNode(_components.p, {
      children: "Regarding development, my responsibilities encompassed building and maintaining\nall parts of the system, implementing new features, managing releases, and\npatching bugs. Additionally, I collaborated with product teams to assist with\nthe implementation and integration of the system into their applications."
    }), "\n", createVNode(_components.p, {
      children: "The component library featured over 50 different components and templates, each\nrefined and frequently refactored to ensure an optimal developer experience,\nconsistent design patterns, and accessible end-user interfaces. We also\nimplemented a pipeline for exporting web components in addition to Angular\ncomponents, enabling cross-framework and platform-based consumption of\ncomponents."
    }), "\n", createVNode(_components.p, {
      children: "The design system also included an in-depth documentation repository, built as a\nstandalone Angular application. This application pulled in static markdown files\nand combined them with live examples from a Storybook JS instance to create\ncompelling and helpful technical documentation. Much of my time working on this\napplication was spent creating new features, including the Storybook JS\ninstance, and finding ways to automate the creation and publication of\ndocumentation, reducing discrepancies between deployed features and their\ndocumentation."
    }), "\n", createVNode(_components.h2, {
      id: "strategy-and-architecture",
      children: "Strategy and Architecture"
    }), "\n", createVNode(_components.p, {
      children: "As I transitioned into a lead role with the design system, I was tasked with\nmore strategic decision-making, including creating a roadmap of features,\nsetting project priorities based on developer and end-user feedback, and\nscheduling regular touchpoints with product teams to gather insights. I\ndocumented these decisions and their outcomes in roadmaps, changelogs, and\nrelease notes."
    }), "\n", createVNode(_components.p, {
      children: "Additionally, I researched, determined, and documented standards for project\ncontributions, Git usage, automated PR code-quality checks, post-PR CI/CD\npipelines, and overall code quality. Some of these standards were gradually\nintegrated into linter configurations for both Prettier and ESLint, which were\npublished as NPM packages and distributed to application development teams."
    }), "\n", createVNode(_components.h2, {
      id: "education-and-thought-leadership",
      children: "Education and Thought Leadership"
    }), "\n", createVNode(_components.p, {
      children: "Another notable part of my role at Crowe involved the education of application\nteams and developers regarding the use of Angular and front-end development best\npractices. I hosted several training events for teams and worked one-on-one with\ndevelopers to both train and help implement features into their applications."
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

const url = "src/assets/md/expreience/crowe-llp.mdx";
const file = "/home/calvin/Documents/Code/portfolio/src/assets/md/expreience/crowe-llp.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/calvin/Documents/Code/portfolio/src/assets/md/expreience/crowe-llp.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
