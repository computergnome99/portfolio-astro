import { c as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CA7pQFHm.mjs';
import { $ as $$Ascii } from './Ascii_CJohwa4I.mjs';
import 'clsx';

const frontmatter = {
  "title": "Parent Teacher Co-op",
  "date": "2021 - Present",
  "role": "Computer Teacher"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "planning-and-materials-preperation",
    "text": "Planning and Materials Preperation"
  }, {
    "depth": 2,
    "slug": "lecturing-and-class-management",
    "text": "Lecturing and Class Management"
  }, {
    "depth": 2,
    "slug": "grading-and-extracurricular-communication",
    "text": "Grading and Extracurricular Communication"
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
      name: "ptc",
      color: "lavender",
      spaced: true
    }), "\n", createVNode(_components.p, {
      children: "In 2021, I began teaching the “Home and Office Computing” class for high school\nstudents at the Parent Teacher Co-Op. Thanks to some positive reviews and good\nword-of-mouth, the class quickly became quite popular. Later, in 2024, I started\nteaching an additional class, originally called “Intro to Computer Programming”\nbut later renamed to “Computer Science and Proramming”, which focuses more on\nprogramming concepts and computer science, rather than general computing skills.\nBoth classes emphasize practical skills and encourage critical thinking."
    }), "\n", createVNode(_components.h2, {
      id: "planning-and-materials-preperation",
      children: "Planning and Materials Preperation"
    }), "\n", createVNode(_components.p, {
      children: "For both classes, I design a custom syllabus, not directly leveraging any\npre-existing textbooks or resources to ensure that the material is practical,\nengaging, up-to-date, and relevant for the age group. Each year, I revise the\nsyllabus based on student and parent feedback and incorporate changes in the\ntech landscape to keep the content relevant."
    }), "\n", createVNode(_components.p, {
      children: "Prepared materials include the year’s syllabus, class constitution (standard PTC\nagreement between students, teachers, and parents), worksheets, exams, quizzes,\nand more, all created specifically for the class."
    }), "\n", createVNode(_components.p, {
      children: "Additionally, a significant focus of the class is on Biblical study and\napplication. Every class meeting is preceded by a short devotional, which I also\nprepare before the start of the school year."
    }), "\n", createVNode(_components.h2, {
      id: "lecturing-and-class-management",
      children: "Lecturing and Class Management"
    }), "\n", createVNode(_components.p, {
      children: "In the classroom, I employ a dynamic teaching style that includes lectures,\nhands-on projects, and interactive discussions to engage students effectively. I\nstrive to maintain a structured yet flexible learning environment that\naccommodates various learning styles. Classroom management is a key focus,\nensuring that lessons proceed smoothly and that all students remain focused and\nrespectful of the learning process."
    }), "\n", createVNode(_components.h2, {
      id: "grading-and-extracurricular-communication",
      children: "Grading and Extracurricular Communication"
    }), "\n", createVNode(_components.p, {
      children: "Outside of class hours, I am responsible for grading assignments, quizzes, and\nexams, ensuring timely feedback that is constructive and encourages student\nimprovement. I also maintain regular communication with students and parents to\ndiscuss academic progress and any concerns that arise. This includes scheduling\nmeetings, responding to emails, and providing additional resources to support\nstudent learning."
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

const url = "src/assets/md/expreience/parent-teacher-co-op.mdx";
const file = "/home/calvin/Documents/Code/portfolio/src/assets/md/expreience/parent-teacher-co-op.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/calvin/Documents/Code/portfolio/src/assets/md/expreience/parent-teacher-co-op.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
