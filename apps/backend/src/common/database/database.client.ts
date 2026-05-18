import { createDBClient, type DBClient } from "@repo/db/client"

let _db: DBClient | null = null

export function getDB(): DBClient {
  if (!_db) _db = createDBClient()
  return _db
}