<div align="center">
  <img alt="Srikant Pandey – AI-powered Developer" src="./public/me.png" width="180" height="180">
  <h1>srikantpandey.vercel.app</h1>
  <p>AI-powered developer • Multi-agent tinkerer • Bollywood-coded builder</p>
  <a href="https://srikantpandey.vercel.app">View the live site</a> ·
  <a href="https://www.linkedin.com/in/srikant-pandey-b55935209/">Connect on LinkedIn</a>
</div>

## Overview

This repo powers my personal portfolio: a dark-mode-first space showcasing the AI systems, full-stack products, and Web3 experiments I ship. It’s a single Next.js 14 project configured through one data file so I can iterate quickly on experience, skills, projects, and blog posts.

## Highlights

- **Config-first**: Update everything from `src/data/resume.tsx`—no digging through components.
- **AI-forward storytelling**: Hero, about, and project copy tuned for my current focus on intelligent systems and multi-agent tooling.
- **Motion-rich UI**: Blur/fade animations and interactive cards via `magicui` + `framer-motion`.
- **Fully responsive**: Polished layouts across mobile, tablet, and desktop.
- **Optimized for Vercel**: Instant deployments with preview URLs per branch.

## Tech Stack

- Framework: `Next.js 14`, `React 18`, `TypeScript`
- Styling: `Tailwind CSS`, `shadcn/ui`, `clsx`, `tailwind-merge`
- Animation & UI polish: `framer-motion`, `magicui`
- Content: Markdown-powered blog with `react-markdown`, `remark`, `rehype`
- Icons & assets: `lucide-react`, custom SVG/PNG logos
- Tooling: `pnpm`, `eslint`, `prettier`-style linting baked into `next lint`

## Getting Started

```bash
# 1. Clone
git clone https://github.com/deltacoder2603/portfolio.git
cd portfolio

# 2. Install dependencies
pnpm install

# 3. Run locally
pnpm dev
```

The site runs at `http://localhost:3000`.

## Personalizing

- Edit `src/data/resume.tsx` to change hero copy, skills, experience, education, and project metadata.
- Drop project preview images into `public/` and reference them via the `image` field.
- Blog posts live in `content/` and use MDX—copy `hello-world.mdx` as a starter.
- Update SEO metadata in `src/app/layout.tsx` (title, description, Open Graph, Twitter).

## Deployment

I deploy through Vercel:

1. Connect the repo to Vercel.
2. Set the build command to `pnpm build` and output directory to `.next`.
3. Enable Analytics/Speed Insights if you want metrics.

Push to `main` for production or create branches for preview deployments.

## License

Licensed under the [MIT License](./LICENSE). Feel free to fork, remix, and adapt. If you ship something cool, let me know—I’d love to see it! 🎶
