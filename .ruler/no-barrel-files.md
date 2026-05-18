---
description: Avoid barrel files
globs: ["**/*.ts", "**/*.tsx"]
alwaysApply: true
---

# No Barrel Files

Do NOT create `index.ts` files that re-export from other files.
Import directly from the source file.
Exception: package entry points (`packages/*/src/index.ts`).