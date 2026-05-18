---
description: Next.js frontend conventions
globs: ["apps/web/**/*.ts", "apps/web/**/*.tsx"]
alwaysApply: false
---

# Frontend Rules

## Structure
```
apps/web/
├── app/            # Pages and layouts only
│   ├── (auth)/     # Auth routes (login, register)
│   ├── (home)/     # Landing page
│   └── (site)/     # Protected routes + sidebar
├── core/           # Shared components, styles, utils
└── services/       # External service integrations
```

## Conventions
- Use shadcn/ui components
- Use TanStack Query for data fetching
- Use Tailwind CSS v4 with CSS variables
- Prefer Server Components where possible
- Client Components only when needed (interactivity)