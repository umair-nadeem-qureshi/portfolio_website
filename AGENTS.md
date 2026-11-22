<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Repo notes

- **Next.js 16.4.6 app.** Read `node_modules/next/dist/docs/` before writing any code — conventions and file structure differ from older versions (docs verified present: `01-app`, `02-pages`, `03-architecture`, `04-community`).
- **Active flags:** `cacheComponents: true` and `partialPrefetching: true` in `next.config.ts`; Turbopack routes `*.css` through the `@tailwindcss/turbopack` loader.
- **Commands:** `npm run dev` (dev server), `npm run build`, `npm run start`, `npm run lint`. No test script and no tests exist — verify with `npm run lint` and `npm run build`.
- **Structure:** App Router. Entry: `src/app/layout.tsx` + `src/app/page.tsx` (`HomePage`). Portfolio data in `src/data/portfolioData.ts`; components in `src/components/` (`ProjectGrid`, `ContactActions`).
- **Path alias:** `@/*` → `./src/*` (tsconfig `paths`).
- **Styling:** Tailwind 4 — use `@import "tailwindcss"` + `@theme` syntax (see `src/app/globals.css`), not v3 idioms.
