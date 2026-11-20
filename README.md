# Nommoh Hayab — Portfolio

Personal portfolio site for Nommoh Hayab, a Backend Engineer based in Minna, Nigeria. Built with Next.js 16 (App Router), React 19, Tailwind CSS v4, and TypeScript.

**Live site:** https://hnommoh.vercel.app

## Tech Stack

- **Framework:** Next.js 16.4.5 (App Router, Turbopack)
- **UI:** React 19, Tailwind CSS v4
- **Content:** MDX writing samples via `next-mdx-remote` (with `remark-gfm`, `rehype-slug`, `rehype-autolink-headings`)
- **Language:** TypeScript (strict mode)
- **Package manager:** Bun

## Getting Started

Install dependencies and start the dev server:

```bash
bun install
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command | Description |
| --- | --- |
| `bun run dev` | Start the development server |
| `bun run build` | Production build |
| `bun run start` | Serve the production build |
| `bun run lint` | Run ESLint |

## Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout with Open Graph / Twitter metadata
│   ├── page.tsx          # Home page, rendered from site.config.ts
│   ├── robots.ts         # robots.txt
│   ├── sitemap.ts        # sitemap.xml
│   └── writing/[slug]/   # Writing sample pages (MDX)
├── content/              # MDX writing samples
├── lib/
│   ├── posts.ts          # MDX post loading helpers
│   └── keywords.ts       # SEO keywords
└── site.config.ts        # Single source of truth for all site content
```

## Editing Content

**All site content lives in `src/site.config.ts`** — name, bio, "now" section, projects, experience, education, CV link, and social links. Edit this file rather than the page components.

To add a writing sample, drop a new `.mdx` file into `src/content/` with `title`, `description`, and `date` frontmatter. Posts are discovered automatically and sorted by date (newest first).

Static assets (favicons, images, the CV file) go in `public/`.

## Deployment

Hosted on Vercel at [hnommoh.vercel.app](https://hnommoh.vercel.app). Pushes to the main branch deploy automatically.
