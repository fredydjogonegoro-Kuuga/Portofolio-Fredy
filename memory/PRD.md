# PRD — Fredy Dwi Hartarto Portfolio

## Original problem statement
> "please make simple portfolio website for publish in github, make data analyst and it infra style, make dark and light mode and please explain to import and publish in github"

User provided: CV PDF, 2 portfolio project PDFs, profile photo, and a reference URL.

## Architecture
- Static React 19 frontend only — no backend, no DB needed
- Tailwind 3 + shadcn/ui primitives
- next-themes-style custom ThemeProvider (light/dark via localStorage)
- All resume content driven from `frontend/src/data/portfolio.js`

## User persona
- Fredy Dwi Hartarto — 14+ years IT Infrastructure → pivoting to Data Analyst.
- Recruiters / hiring managers viewing his portfolio.

## Core requirements (static)
- Single-page portfolio with anchored sections: About, Skills, Experience, Projects, Education, Certifications, Contact
- Dark / light mode toggle
- Detailed project case studies (NexaConnect Churn, RevoHospital)
- Contact form (mailto-based, no backend)
- Publish to GitHub Pages — instructions in README

## What's been implemented (Dec 2025)
- ✅ Full responsive React portfolio with custom Manrope/Fraunces/JetBrains Mono typography
- ✅ Dark mode (slate + cyan accent) and light mode (off-white + emerald accent)
- ✅ Hero with profile photo, stats strip, animated entrance
- ✅ Skills grid grouped by category
- ✅ Experience timeline with 5 jobs
- ✅ 2 detailed project cards with animated SVG covers + case-study dialog
- ✅ Education, Certifications, Languages
- ✅ Contact form (mailto) + copyable contact details + toast notifications
- ✅ README with comprehensive GitHub Pages publishing guide (gh-pages, custom domain, Vercel/Netlify alternatives)
- ✅ Fixed webpack-dev-server v5 compatibility issue in react-scripts (env setup)

## Backlog / Next tasks
- P1: Replace placeholder LinkedIn / GitHub URLs in `portfolio.js` with real ones
- P1: Add real Tableau Public URLs in projects[*].links
- P2: Add a downloadable CV PDF link in hero
- P2: Add blog/articles section (currently optional)
- P2: SEO meta tags + OpenGraph image
- P3: Add a small analytics tracker (Plausible / Umami) for visitor counts
