import { oc } from "@orpc/contract"
import { cropSchema } from "./crop.schema.js"
import { z } from "zod"

export const cropContract = oc.router({
  list: oc.input(z.object({ search: z.string().optional(), status: z.string().optional(), page: z.number().default(1), limit: z.number().default(20) })).output(z.object({ data: z.array(cropSchema), total: z.number() })),
  getById: oc.input(z.object({ id: z.number() })).output(cropSchema),
  create: oc.input(cropSchema.omit({ id: true, createdAt: true, updatedAt: true })).output(cropSchema),
  update: oc.input(z.object({ id: z.number() }).merge(cropSchema.partial())).output(cropSchema),
  delete: oc.input(z.object({ id: z.number() })).output(z.object({ success: z.boolean() })),
})