import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const contentSchema = z.object({
  title: z.string(),
  description: z.string(),
  // date: z.coerce.date().optional(),
});

export const collections = {
  blog: defineCollection({
    loader: glob({ base: "./blog/", pattern: "**/*.{md,mdx}" }),
    schema: contentSchema,
  }),
};
