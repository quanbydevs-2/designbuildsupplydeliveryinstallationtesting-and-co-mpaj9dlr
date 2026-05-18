---
description: Shared packages conventions
globs: ["packages/**/*.ts"]
alwaysApply: false
---

# Packages Rules

- `@repo/db`: Drizzle ORM schema, client, migrations
- `@repo/auth`: Better Auth configuration
- `@repo/contracts`: oRPC contracts + Zod schemas

## Conventions
- Export via `package.json` exports field
- Build with `tsc`
- Use `.js` extensions in imports (ESM)