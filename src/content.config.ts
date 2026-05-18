import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blogPosts = defineCollection({
  type: "content",
  loader: loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./content" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // date: z.coerce.date().optional(),
  })
})

export const collections = {
  posts: blogPosts
};
