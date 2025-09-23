// @ts-check
import { defineConfig } from 'astro/config';

import svelte from '@astrojs/svelte';

import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://calvinbonner.dev',
  integrations: [
    mdx(),
    svelte(),
    sitemap({
      changefreq: 'weekly',
      lastmod: new Date(Date.now()),
      serialize(item) {
        if (/experience\/./.test(item.url)) {
          item.priority = 0.7;
        } else {
          item.priority = 1;
        }

        return item;
      },
    }),
  ],
  markdown: {
    shikiConfig: {
      themes: {
        light: 'catppuccin-latte',
        dark: 'catppuccin-mocha',
      },
    },
  },
  prefetch: {
    prefetchAll: true,
  },
  output: 'server',
  adapter: vercel(),
});
