import "dotenv/config"
import { createDBClient } from "./client.js"

async function seed() {
  const db = createDBClient()
  console.log("🌱 Seeding Tubod Municipality Agriculture Information System...")
  // Add seed data here
  console.log("✓ Seed complete")
  process.exit(0)
}

seed().catch(console.error)