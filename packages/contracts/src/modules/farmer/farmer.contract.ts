import { oc } from "@orpc/contract"
import { farmerSchema } from "./farmer.schema.js"
import { z } from "zod"

export const farmerContract = oc.router({
  list: oc.input(z.object({ search: z.string().optional(), status: z.string().optional(), page: z.number().default(1), limit: z.number().default(20) })).output(z.object({ data: z.array(farmerSchema), total: z.number() })),
  getById: oc.input(z.object({ id: z.number() })).output(farmerSchema),
  create: oc.input(farmerSchema.omit({ id: true, createdAt: true, updatedAt: true })).output(farmerSchema),
  update: oc.input(z.object({ id: z.number() }).merge(farmerSchema.partial())).output(farmerSchema),
  delete: oc.input(z.object({ id: z.number() })).output(z.object({ success: z.boolean() })),
})