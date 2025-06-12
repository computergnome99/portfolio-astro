import { c as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CA7pQFHm.mjs';
import { $ as $$Ascii } from './Ascii_CJohwa4I.mjs';
import 'clsx';

const frontmatter = {
  "title": "Calvin Bonner Design LLC",
  "date": "2019 - Present"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "development-and-engineering",
    "text": "Development and Engineering"
  }, {
    "depth": 2,
    "slug": "brand-and-digital-design",
    "text": "Brand and Digital Design"
  }, {
    "depth": 2,
    "slug": "online-presence-management-and-digital-marketing",
    "text": "Online Presence Management and Digital Marketing"
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
      name: "cbd",
      color: "mauve",
      spaced: true
    }), "\n", createVNode(_components.p, {
      children: "In October 2019, I founded Calvin Bonner Design, LLC, with the mission of\ndelivering high-quality branding and digital marketing solutions for small and\nmid-sized businesses. Initially focused on refining visual brand\nrepresentations, the business has evolved in recent years to concentrate more on\nwebsite design and development. I collaborate with clients to create and enhance\ntheir online presence, ensuring cohesive and compelling brand representation\nacross all digital platforms. My work now encompasses website development, brand\nidentity design, and digital marketing strategies tailored to meet each client’s\nunique needs. Through this venture, I have honed my skills in client relations,\nproject management, and creative direction, consistently delivering results that\nenhance brand visibility and engagement."
    }), "\n", createVNode(_components.h2, {
      id: "development-and-engineering",
      children: "Development and Engineering"
    }), "\n", createVNode(_components.p, {
      children: "Created responsive websites using technologies like Svelte, Angular, and PHP,\nfocusing on modern design standards and ensuring cross-platform compatibility,\nwhile collaborating with clients to realize their vision through interactive\nvisual media and user-friendly interfaces."
    }), "\n", createVNode(_components.p, {
      children: "Developed and maintained component libraries and frameworks for scalable and\nmaintainable web applications, implemented best practices for performance\noptimization including code reviews and CI/CD pipelines, supported\ncross-framework compatibility, and provided ongoing technical support, managing\nhosting solutions, domain registrations, and SSL certifications."
    }), "\n", createVNode(_components.h2, {
      id: "brand-and-digital-design",
      children: "Brand and Digital Design"
    }), "\n", createVNode(_components.p, {
      children: "Redesigned and rebuilt brands, including logos, color schemes, fonts, and brand\nguidelines to reflect the company’s mission and target audience, along with\ncreating visual materials such as business cards, digital marketing materials,\nand physical marketing assets."
    }), "\n", createVNode(_components.h2, {
      id: "online-presence-management-and-digital-marketing",
      children: "Online Presence Management and Digital Marketing"
    }), "\n", createVNode(_components.p, {
      children: "Monitored and updated online profiles, including Google My Business, ensuring\naccurate and current information, while managing tools like Google Search\nConsole and Bing Webmaster Tools for optimal indexing and search result\naccuracy."
    }), "\n", createVNode(_components.p, {
      children: "Provided consultations to review and enhance existing digital marketing plans,\nfocusing on increasing traffic and conversion rates, and conducted regular\nanalytics monitoring and SEO optimization to improve site visibility and\nperformance."
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

const url = "src/assets/md/expreience/calvin-bonner-design-llc.mdx";
const file = "/home/calvin/Documents/Code/portfolio/src/assets/md/expreience/calvin-bonner-design-llc.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/calvin/Documents/Code/portfolio/src/assets/md/expreience/calvin-bonner-design-llc.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
