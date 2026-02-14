# Portfolio Site — React Router Navigation

Build a multi-page portfolio to learn routing, navigation, and linking between pages.

## What You'll Learn

- React Router v7 route definitions
- Link component for navigation
- Creating multi-page sites
- Active link styling

## Tech Stack

- **React Router v7** (framework mode) — handles pages and routing
- **Supabase** — database and auth (pre-configured client)
- **Tailwind CSS v4** — styling
- **TypeScript** — type-safe JavaScript

## Getting Started

```bash
# 1. Clone this repo
git clone https://github.com/LoisBN/fpp-portfolio-routes.git
cd fpp-portfolio-routes

# 2. Install dependencies
npm install

# 3. Copy the environment file
cp .env.example .env

# 4. Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to see the app.

## Project Structure

```
app/
├── routes/
│   ├── home.tsx          ← Landing/home page
│   ├── about.tsx         ← About page (you'll create this)
│   └── projects.tsx      ← Projects page (you'll create this)
├── components/
│   └── Navbar.tsx        ← Navigation component with Links
├── lib/
│   └── supabase.ts       ← Supabase client setup
├── app.css               ← Global styles (Tailwind)
├── root.tsx              ← App shell and layout
└── routes.ts             ← Route definitions (you'll add routes here)
```

## Your Exercise Tasks

See the exercise instructions on the course platform for the full task list. The short version:

1. Clone the repo and run the dev server
2. Add routes in routes.ts for home, about, and projects
3. Create About and Projects page components
4. Add navigation with Link component in Navbar
5. Highlight active links with NavLink

## Hints

- Route definitions map URL paths to components
- Use NavLink instead of Link to get active styling
- Each route file in the routes/ folder becomes a page

---

Built for [AI Code Academy](https://aicode-academy.com) — From Prompt to Production course.
