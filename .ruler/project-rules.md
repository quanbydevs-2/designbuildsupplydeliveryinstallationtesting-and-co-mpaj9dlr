---
description: General monorepo rules and conventions
globs: ["**/*.ts", "**/*.tsx"]
alwaysApply: true
---

# Tubod Municipality Agriculture Information System — AI Agent Rules

## Technology Stack

| Layer | Technology | Location |
|-------|-----------|----------|
| Frontend | Next.js 16 (App Router) | `apps/web/` |
| Backend | NestJS 11 | `apps/backend/` |
| Database | Drizzle ORM + PostgreSQL | `packages/db/` |
| Auth | Better Auth | `packages/auth/` |
| Contracts | oRPC + Zod | `packages/contracts/` |
| Styling | Tailwind CSS v4 + shadcn/ui | `apps/web/` |
| Package Manager | pnpm (never npm/yarn) | |

## Modules

| Module | Location |
|--------|----------|
| Farmers | `apps/backend/src/modules/farmer/` |
| Crops | `apps/backend/src/modules/crop/` |
| Programs | `apps/backend/src/modules/program/` |
| Resources | `apps/backend/src/modules/resource/` |
| Distributions | `apps/backend/src/modules/distribution/` |

## Rules
1. Always use `pnpm`
2. Follow existing file/folder patterns
3. Use Zod for all validation
4. Co-locate types with their modules
5. No barrel files (index.ts re-exports)