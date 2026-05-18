import { z } from "zod"

export const cropSchema = z.object({
  id: z.number(),
  name: z.string(),
  variety: z.string().optional(),
  season: z.string(),
  plantingDate: z.date(),
  expectedHarvest: z.date().optional(),
  areaPlanted: z.number(),
  estimatedYield: z.number().optional(),
  status: z.string().default("active"),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
})

export type Crop = z.infer<typeof cropSchema>