---
description: NestJS backend conventions
globs: ["apps/backend/**/*.ts"]
alwaysApply: false
---

# Backend Rules

## Structure
```
apps/backend/src/
├── common/         # Shared modules (database, filters)
├── config/         # Environment config
└── modules/        # Feature modules (CRUD)
```

## Conventions
- One module per feature
- Use Drizzle ORM (not Prisma/TypeORM)
- Use `@repo/db` for schema imports
- Validate with Zod schemas from `@repo/contracts`
- Handle errors with NestJS exceptions