# AGENTS.md — Tubod Municipality Agriculture Information System

## Overview
Comprehensive agriculture information management system for Tubod Municipality, Surigao del Norte. The system manages farmer registration, crop monitoring, agricultural programs, and resource distribution to support local farming communities and enhance agricultural productivity in the municipality.

## Stack
- **Monorepo**: Turborepo + pnpm
- **Frontend**: Next.js 16 + Tailwind v4 + shadcn/ui
- **Backend**: NestJS 11 + Drizzle ORM
- **Auth**: Better Auth
- **Contracts**: oRPC + Zod
- **DB**: PostgreSQL 17

## Modules
- **Farmers** (`farmer`): First Name, Last Name, Contact Number, Address, Farm Size (hectares), Primary Crop, Registration Date, Active Status
- **Crops** (`crop`): Crop Name, Variety, Growing Season, Planting Date, Expected Harvest, Area Planted (hectares), Estimated Yield (tons)
- **Programs** (`program`): Program Title, Description, Start Date, End Date, Budget, Target Beneficiaries, Active Status
- **Resources** (`resource`): Resource Name, Category, Quantity, Unit, Unit Cost, Supplier, Date Acquired
- **Distributions** (`distribution`): Resource, Recipient, Quantity, Distribution Date, Purpose, Status, Notes

## Commands
- `pnpm dev` — Start all apps
- `pnpm build` — Build everything
- `pnpm db:push` — Push DB schema
- `pnpm db:seed` — Seed data
- `pnpm test` — Run tests
- `pnpm lint` — Lint all

## Structure
```
├── apps/web/         # Next.js frontend
├── apps/backend/     # NestJS API
├── packages/db/      # Drizzle ORM
├── packages/auth/    # Better Auth
├── packages/contracts/ # oRPC + Zod
└── tooling/          # Shared configs
```

Always use `pnpm` (never npm/yarn).