import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro:content';

const experience = defineCollection({
  loader: glob({ pattern: '*.mdx', base: 'src/assets/md/expreience' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    role: z.string().optional(),
    link: z.string().optional(),
  }),
});

export const collections = {
  experience,
};
