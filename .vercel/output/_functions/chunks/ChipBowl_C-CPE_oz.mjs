import { a as createComponent, b as createAstro, m as maybeRenderHead, e as addAttribute, f as renderSlot, d as renderTemplate, r as renderComponent } from './astro/server_CA7pQFHm.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro$1 = createAstro();
const $$Highlight = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Highlight;
  const { color = "red" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<b${addAttribute(`--text-color: var(--${color}`, "style")} data-astro-cid-wixuki3h> ${renderSlot($$result, $$slots["default"])} </b> `;
}, "/home/calvin/Documents/Code/portfolio/src/components/highlight/Highlight.astro", void 0);

const $$Astro = createAstro();
const $$Chip = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Chip;
  const { color = "red" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li data-astro-cid-gqilxyee> ${renderComponent($$result, "Highlight", $$Highlight, { "color": color, "data-astro-cid-gqilxyee": true }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })} </li> `;
}, "/home/calvin/Documents/Code/portfolio/src/components/chip/Chip.astro", void 0);

const $$ChipBowl = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<ul data-astro-cid-idg6lw7b> ${renderSlot($$result, $$slots["default"])} </ul> `;
}, "/home/calvin/Documents/Code/portfolio/src/components/chip/ChipBowl.astro", void 0);

export { $$ChipBowl as $, $$Chip as a };
