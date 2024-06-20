import idleDirective from "astro/runtime/client/idle.js";
import { z, defineCollection } from "astro:content";

const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    projectId: z.number(),
    featured: z.boolean(),
    title: z.string(),
    description: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    worksImage1: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    worksImage2: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    platform: z.string(),
    stack: z.string(),
    website: z.string(),
    github: z.string(),
  }),
});

export const collections = {
  projects: projectsCollection,
};
