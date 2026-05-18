import { z } from "zod"

export const resourceSchema = z.object({
  id: z.number(),
  name: z.string(),
  category: z.string(),
  quantity: z.number(),
  unit: z.string(),
  cost: z.number().optional(),
  supplier: z.string().optional(),
  dateAcquired: z.date(),
  status: z.string().default("active"),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
})

export type Resource = z.infer<typeof resourceSchema>