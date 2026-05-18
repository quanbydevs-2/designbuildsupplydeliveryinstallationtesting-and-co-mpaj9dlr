import { drizzle, type NodePgDatabase } from "drizzle-orm/node-postgres"
import { schema } from "./schema.js"

export type DBClient = NodePgDatabase<typeof schema>

export function createDBClient(connectionString?: string): DBClient {
  const url = connectionString ?? process.env.DATABASE_URL
  if (!url) throw new Error("DATABASE_URL is not set")
  return drizzle(url, { schema })
}