import { oc } from "@orpc/contract"
import { programSchema } from "./program.schema.js"
import { z } from "zod"

export const programContract = oc.router({
  list: oc.input(z.object({ search: z.string().optional(), status: z.string().optional(), page: z.number().default(1), limit: z.number().default(20) })).output(z.object({ data: z.array(programSchema), total: z.number() })),
  getById: oc.input(z.object({ id: z.number() })).output(programSchema),
  create: oc.input(programSchema.omit({ id: true, createdAt: true, updatedAt: true })).output(programSchema),
  update: oc.input(z.object({ id: z.number() }).merge(programSchema.partial())).output(programSchema),
  delete: oc.input(z.object({ id: z.number() })).output(z.object({ success: z.boolean() })),
})