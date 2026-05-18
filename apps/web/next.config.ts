import type { NextConfig } from "next"
const config: NextConfig = { transpilePackages: ["@repo/auth", "@repo/db", "@repo/contracts"] }
export default config