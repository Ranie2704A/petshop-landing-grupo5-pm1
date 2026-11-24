import { defineCollection, z } from 'astro:content';

const legalCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    lastUpdated: z.string(),
    effectiveDate: z.string().optional(),
    version: z.string().default('1.0'),
    badge: z.string().default('Google Play Verified'),
  }),
});

export const collections = {
  legal: legalCollection,
};
