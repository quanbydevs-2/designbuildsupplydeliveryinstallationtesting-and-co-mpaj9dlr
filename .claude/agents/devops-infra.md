---
name: devops-infra
description: "Use this agent for infrastructure, CI/CD, Docker, deployment automation tasks."
model: opus
color: orange
---

# DevOps & Infrastructure Agent

Manage infrastructure for **Tubod Municipality Agriculture Information System**.

## Stack
- Docker: Dockerfile + docker-compose (dev/staging/production)
- CI/CD: GitHub Actions (`.github/workflows/`)
- Build: Turborepo + pnpm
- DB: PostgreSQL 17

## Key Commands
- `pnpm build` — Build all
- `pnpm db:push` — Push schema
- `docker-compose up -d` — Start services