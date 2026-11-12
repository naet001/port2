<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Project Instructions

This is a Next.js 16.4.5 portfolio site for Nommoh Hayab, built with React 19, Tailwind CSS v4, and Bun as the package manager.

### Build & Development
- **Dev server**: `bun dev` (or `npm run dev`/`pnpm dev`/`yarn dev`)
- **Build**: `bun build` (or `npm run build`)
- **Start**: `bun start` (or `npm run start`)
- **Lint**: `bun lint` (or `npm run lint`)

### Project Structure
- **Site configuration**: Centralized in `src/site.config.ts` — edit this file to update metadata, projects, experience, and bio content. Do not modify individual page components directly.
- **Root layout**: `src/app/layout.tsx` defines global metadata (Open Graph, Twitter cards) pulled from `site.config.ts`.
- **Home page**: `src/app/page.tsx` renders content from `site.config.ts`.
- **Static assets**: Place files in `public/` (e.g., favicons, images).
- **MDX content**: Writing samples are in `src/app/writing/` using `next-mdx-remote`.

### Conventions
- Uses **Tailwind CSS v4** with `@tailwindcss/turbopack` for styling.
- **TypeScript** with strict mode enabled (`tsconfig.json`).
- **Path aliases**: `@/*` resolves to `./src/*`.
- **Deployment**: Hosted on Vercel at `https://hnommoh.vercel.app`.

### Key Files
- `next.config.ts`: Next.js configuration with Turbopack and partial prefetching.
- `src/site.config.ts`: Single source of truth for all site content (name, bio, projects, experience).
- `src/app/robots.ts` and `src/app/sitemap.ts`: SEO configuration.

### Commit Rules
- Follow the existing code style and structure.
- Prefer small, focused changes to `site.config.ts` for content updates.
- Test locally with `bun dev` before committing.
