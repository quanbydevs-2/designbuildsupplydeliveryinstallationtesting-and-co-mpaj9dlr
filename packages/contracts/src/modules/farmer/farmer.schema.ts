import { z } from "zod"

export const farmerSchema = z.object({
  id: z.number(),
  firstName: z.string(),
  lastName: z.string(),
  contactNumber: z.string(),
  address: z.string(),
  farmSize: z.number(),
  primaryCrop: z.string(),
  registrationDate: z.date(),
  isActive: z.boolean().default(false),
  status: z.string().default("active"),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
})

export type Farmer = z.infer<typeof farmerSchema>