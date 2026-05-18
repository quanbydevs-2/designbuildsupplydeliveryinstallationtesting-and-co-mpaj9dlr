import { z } from "zod"

export const distributionSchema = z.object({
  id: z.number(),
  resourceName: z.string(),
  recipientName: z.string(),
  quantity: z.number(),
  distributionDate: z.date(),
  purpose: z.string(),
  status: z.string(),
  notes: z.string().optional(),
  status: z.string().default("active"),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
})

export type Distribution = z.infer<typeof distributionSchema>