// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
// @ts-ignore No type definition for this package
import htmx from 'astro-htmx';

import mdx from '@astrojs/mdx';

import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  output: 'server',
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
  adapter: node({
    mode: 'standalone',
  }),
  server: {
    host: '0.0.0.0',
  },
});

