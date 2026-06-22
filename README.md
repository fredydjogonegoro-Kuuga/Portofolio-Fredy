# Fredy Dwi Hartarto — Portfolio

A modern, responsive personal portfolio for a **Data Analyst & IT Infrastructure Specialist**.
Built with **React + Tailwind + shadcn/ui**, fully static — perfect for GitHub Pages.

✨ Features
- Dark & light mode (auto-saved to localStorage)
- Sections: About, Skills, Experience, Projects (with detailed case-study dialogs), Education, Certifications, Contact
- Animated SVG project covers (no external image hosting needed)
- Mobile responsive
- Accessible, keyboard-friendly

---

## 🖥️ Run locally

Prerequisites: **Node.js ≥ 18** and **yarn**.

```bash
cd frontend
yarn install
yarn start
# opens http://localhost:3000
```

To build a production bundle:
```bash
yarn build
# outputs to frontend/build/
```

---

## 🚀 Publish to GitHub (step by step)

You have **two clean options** for publishing this portfolio on GitHub. The
recommended one is **Option A** (GitHub Pages with `gh-pages` branch).

### Option A — GitHub Pages (free, simplest) ✅

This deploys the production-built `build/` folder to a `gh-pages` branch
that GitHub serves as a website.

#### 1. Create a new GitHub repository
- Go to https://github.com/new
- Repository name: `portfolio` (or any name — e.g. `fredy-portfolio`)
- Visibility: **Public** (required for free GitHub Pages)
- Do **not** initialise with README/license — you'll push your own
- Click **Create repository**

#### 2. Initialise git locally and push
From the project root (the folder containing this README):
```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/<YOUR-USERNAME>/<REPO-NAME>.git
git push -u origin main
```

#### 3. Configure deployment

Open `frontend/package.json` and add a `homepage` line near the top:
```json
"homepage": "https://<YOUR-USERNAME>.github.io/<REPO-NAME>",
```

Then install the `gh-pages` helper and add deploy scripts:
```bash
cd frontend
yarn add --dev gh-pages
```

Add to `frontend/package.json` → `"scripts"`:
```json
"predeploy": "yarn build",
"deploy": "gh-pages -d build"
```

#### 4. Deploy 🎉
```bash
cd frontend
yarn deploy
```

This builds the app and pushes it to a `gh-pages` branch automatically.

#### 5. Enable GitHub Pages
- Open your repo on github.com
- **Settings → Pages**
- Under **Build and deployment** → **Source**: `Deploy from a branch`
- **Branch**: `gh-pages` · **Folder**: `/ (root)` → **Save**
- Wait ~1 minute, your site goes live at:
  `https://<YOUR-USERNAME>.github.io/<REPO-NAME>`

To redeploy after edits, just run `yarn deploy` again.

---

### Option B — Custom domain on GitHub Pages

If you own a domain (e.g. `fredy.dev`):

1. Deploy with Option A above.
2. Create `frontend/public/CNAME` with one line — your domain (e.g. `fredy.dev`).
3. Redeploy.
4. In **Settings → Pages → Custom domain**: enter your domain & save.
5. At your DNS provider, point an `A` record (apex) or `CNAME` (www) at GitHub.

---

### Option C — Vercel / Netlify (one-click, also free)

If you find GitHub Pages limiting, both **Vercel** and **Netlify** import a
GitHub repo and auto-build on every push.

- **Vercel** → https://vercel.com/new → "Import Git Repository" → select repo
  → Framework preset: `Create React App` → Root: `frontend` → Deploy.
- **Netlify** → https://app.netlify.com/start → pick repo → Build command:
  `yarn build` → Publish directory: `frontend/build` → Deploy.

---

## 📁 Project structure

```
frontend/
├── public/
│   ├── fredy.jpg          # profile photo
│   └── index.html
└── src/
    ├── App.js
    ├── index.css           # theme tokens, fonts, animations
    ├── data/portfolio.js   # ← EDIT YOUR CONTENT HERE
    └── components/
        ├── Portfolio.jsx
        ├── Navbar.jsx
        ├── Footer.jsx
        ├── SectionHeader.jsx
        ├── ThemeProvider.jsx
        ├── ProjectCover.jsx
        └── sections/
            ├── Hero.jsx
            ├── About.jsx
            ├── Skills.jsx
            ├── Experience.jsx
            ├── Projects.jsx
            ├── Education.jsx
            ├── Certifications.jsx
            └── Contact.jsx
```

## ✏️ Editing your content

All resume content (name, summary, experience, projects, skills, etc.) lives
in **one file**:

```
frontend/src/data/portfolio.js
```

Update fields there and the entire site updates. Replace
`frontend/public/fredy.jpg` to change the profile photo.

---

## 🎨 Tech stack

- React 19, React Router 7
- Tailwind CSS 3 with shadcn/ui primitives (Radix UI)
- `lucide-react` for icons
- `sonner` for toasts
- Manrope (UI), Fraunces (display serif), JetBrains Mono (mono) — all from Google Fonts

## 📝 License

MIT — feel free to fork & customise.
