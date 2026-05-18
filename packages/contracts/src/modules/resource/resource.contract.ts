import { oc } from "@orpc/contract"
import { resourceSchema } from "./resource.schema.js"
import { z } from "zod"

export const resourceContract = oc.router({
  list: oc.input(z.object({ search: z.string().optional(), status: z.string().optional(), page: z.number().default(1), limit: z.number().default(20) })).output(z.object({ data: z.array(resourceSchema), total: z.number() })),
  getById: oc.input(z.object({ id: z.number() })).output(resourceSchema),
  create: oc.input(resourceSchema.omit({ id: true, createdAt: true, updatedAt: true })).output(resourceSchema),
  update: oc.input(z.object({ id: z.number() }).merge(resourceSchema.partial())).output(resourceSchema),
  delete: oc.input(z.object({ id: z.number() })).output(z.object({ success: z.boolean() })),
})