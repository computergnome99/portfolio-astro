import { _ as __vite_glob_0_5, b as __vite_glob_0_4, a as __vite_glob_0_3 } from './logo-sm_CFCsl0fm.mjs';
import { a as createComponent, b as createAstro, m as maybeRenderHead, e as addAttribute, d as renderTemplate } from './astro/server_CA7pQFHm.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                                             */

const __vite_glob_0_0 = " .==============.\n||   __    ___  ||\n|| .^  `. |   \\ ||\n|| |      |___/ ||\n|| |      |   \\ ||\n|| ^.__.^ |___/ ||\n||              ||\n ^==============^\n";

const __vite_glob_0_1 = "       /\\\n      /43\\\n     /E#G@\\\n    /%E#AF#\\\n   /%/%/4/^\\\\\n  /^/^/^    ^\\\n / / /        \\\n";

const __vite_glob_0_2 = "        ___ /\\_\n        E#/_E3*\\\nE|  /#/ E//@4TGHR7/\nE| /#/  /%887EOM#/\nE|/#4\\ 4E678U@|\nE|%^\\8\\ \\|\\||\\|\nE|   \\0\\\n";

const __vite_glob_0_6 = "           //\n          //\n         //\n      __/4=====@\n    *&^ %  _.._\nE|^^\\\\ // %^  ^\\\\\nE|   E % %\nE|*// //|E\nE|   //  \\\\     .\nE|  //    *`**//^\n";

const $$Astro = createAstro();
const $$Ascii = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Ascii;
  const { color = "text", name, spaced = false } = Astro2.props;
  const asciiFiles = /* #__PURE__ */ Object.assign({"/src/assets/ascii/cbd.txt": __vite_glob_0_0,"/src/assets/ascii/crowe.txt": __vite_glob_0_1,"/src/assets/ascii/kodiak.txt": __vite_glob_0_2,"/src/assets/ascii/logo-md.txt": __vite_glob_0_3,"/src/assets/ascii/logo-sm.txt": __vite_glob_0_4,"/src/assets/ascii/logo.txt": __vite_glob_0_5,"/src/assets/ascii/ptc.txt": __vite_glob_0_6


});
  const filePath = `/src/assets/ascii/${name}.txt`;
  const asciiContent = asciiFiles[filePath] ?? "ASCII art not found";
  return renderTemplate`${maybeRenderHead()}<pre aria-hidden="true"${addAttribute(spaced ? "spaced" : "", "class")}${addAttribute(`--text-color: var(--${color}`, "style")} data-astro-cid-fsdjvnt6>${asciiContent}</pre> `;
}, "/home/calvin/Documents/Code/portfolio/src/components/ascii/Ascii.astro", void 0);

export { $$Ascii as $ };
