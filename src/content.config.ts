import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx,mdc,mdoc}",
    base: "./src/content/blog",
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().optional(),
      date: z.coerce.date(),
      tags: z.array(z.string()).optional(),
      image: image().optional(),
    }),
});
const memo = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx,mdc,mdoc}",
    base: "./src/content/memo",
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().optional(),
      date: z.coerce.date(),
      tags: z.array(z.string()).optional(),
      image: image().optional(),
    }),
});

const pages = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx,mdc,mdoc}",
    base: "./src/content/page",
  }),
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = { blog, memo, pages };
