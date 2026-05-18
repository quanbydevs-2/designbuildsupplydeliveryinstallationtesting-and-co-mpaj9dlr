import { oc } from "@orpc/contract"
import { distributionSchema } from "./distribution.schema.js"
import { z } from "zod"

export const distributionContract = oc.router({
  list: oc.input(z.object({ search: z.string().optional(), status: z.string().optional(), page: z.number().default(1), limit: z.number().default(20) })).output(z.object({ data: z.array(distributionSchema), total: z.number() })),
  getById: oc.input(z.object({ id: z.number() })).output(distributionSchema),
  create: oc.input(distributionSchema.omit({ id: true, createdAt: true, updatedAt: true })).output(distributionSchema),
  update: oc.input(z.object({ id: z.number() }).merge(distributionSchema.partial())).output(distributionSchema),
  delete: oc.input(z.object({ id: z.number() })).output(z.object({ success: z.boolean() })),
})