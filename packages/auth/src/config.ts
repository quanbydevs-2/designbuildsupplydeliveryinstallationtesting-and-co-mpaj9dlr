import { createEnv } from "@t3-oss/env-core"
import { betterAuth } from "better-auth"
import { drizzleAdapter } from "better-auth/adapters/drizzle"
import { z } from "zod"
import { createDBClient } from "@repo/db/client"
import { accounts, sessions, users, verifications } from "@repo/db/schema"

export const authEnv = createEnv({
  server: {
    BETTER_AUTH_SECRET: z.string(),
    BETTER_AUTH_TRUSTED_ORIGINS: z.string(),
  },
  runtimeEnv: process.env,
  skipValidation: !!process.env.CI,
})

export const AUTH_BASE_PATH = "/auth"

export function createAuth() {
  const db = createDBClient()
  return betterAuth({
    database: drizzleAdapter(db, { provider: "pg", schema: { users, sessions, accounts, verifications }, usePlural: true }),
    basePath: AUTH_BASE_PATH,
    secret: authEnv.BETTER_AUTH_SECRET,
    emailAndPassword: { enabled: true, requireEmailVerification: false },
    trustedOrigins: authEnv.BETTER_AUTH_TRUSTED_ORIGINS?.split(",") ?? [],
  })
}

let _auth: ReturnType<typeof betterAuth> | null = null
export function getAuth() { if (!_auth) _auth = createAuth(); return _auth! }
export type Session = ReturnType<typeof getAuth>["$Infer"]["Session"]