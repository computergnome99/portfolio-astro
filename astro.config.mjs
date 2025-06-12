// @ts-check
import { defineConfig } from 'astro/config';
// @ts-ignore No type definition for this package
import htmx from 'astro-htmx';

import mdx from '@astrojs/mdx';

import svelte from '@astrojs/svelte';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  integrations: [htmx(), mdx(), svelte()],
  markdown: {
    shikiConfig: {
      themes: {
        light: 'catppuccin-latte',
        dark: 'catppuccin-mocha',
      },
    },
  },
  experimental: {
    responsiveImages: true,
  },
  adapter: vercel(),
  output: 'server',
});

