# Portfolio

A personal portfolio website built with React and TypeScript, featuring a projects showcase with live GitHub data, an About Me page, multi-language support (English/German), and a dark/light theme toggle. Deployed to Cloudflare Workers.

## Tech Stack

- **Framework:** React 19 + TypeScript via Vite
- **Routing:** React Router 7
- **Data Fetching:** TanStack Query + Octokit (GitHub API)
- **i18n:** i18next
- **Deployment:** Cloudflare Workers

## Code Structure

```
src/
├── components/       # Reusable UI components (Navbar, Footer, RepositoryCard, …)
├── pages/            # Route-level page components (Home, AboutMe, Projects, NotFound)
├── contexts/         # React context providers (ThemeProvider, TanstackQueryProvider)
├── lang/             # i18n translation files (en.ts, de.ts)
├── constants/        # Shared constants
├── types/            # TypeScript type definitions
├── utils/            # Utility functions
├── router.tsx        # React Router configuration
└── main.tsx          # Application entry point

public/               # Static assets (favicon, sitemap, robots.txt)
scripts/              # Build utilities (e.g. updateLanguageColors.js)
```

Each component lives in its own folder alongside its `.css` file (e.g. `components/Navbar/Navbar.tsx` + `Navbar.css`).
