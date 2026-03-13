# Portfolio Site — React Router Navigation

Build a multi-page portfolio to learn routing, navigation, and linking between pages.

## What You'll Learn

- React Router v7 route definitions
- Link and NavLink components for navigation
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
│   ├── about.tsx         ← About page
│   ├── projects.tsx      ← Projects page
│   └── project.$id.tsx   ← Dynamic project detail page
├── components/
│   └── Navbar.tsx        ← Navigation component
├── lib/
│   └── supabase.ts       ← Supabase client setup
├── app.css               ← Global styles (Tailwind)
├── root.tsx              ← App shell and layout
└── routes.ts             ← Route definitions
```

---

## Exercise Tasks

### Task 1: Set Up Routes

**Goal:** Define routes for all pages

**What to do:**
1. Open `app/routes.ts`
2. Define routes for: `/`, `/about`, `/projects`, `/contact`
3. Create a route file for each page with a heading

**AI Prompt:**
```
Add routes for /about, /projects, and /contact to my routes.ts file.
Then create the corresponding route files in app/routes/ with basic
headings for each page.
```

**What to look for:** In React Router v7, each route = a page. Define them in `routes.ts`, create the files, done.

---

### Task 2: Build the Navbar with NavLink

**Goal:** Navigation that highlights the current page

**What to do:**
1. Create a Navbar component with links: Home, About, Projects, Contact
2. Use `NavLink` instead of `Link` — it knows which route is active
3. Style the active link differently (underline, different color)
4. Make the navbar sticky at the top

**AI Prompt:**
```
Create a Navbar component with NavLink for Home, About, Projects, and Contact.
Style the active link with an underline and make the navbar sticky at the top.
Use Tailwind CSS for styling.
```

**What to look for:** `NavLink` gives you an `isActive` prop to style the current page link differently.

---

### Task 3: Build Page Content

**Goal:** Add content to each page

**What to do:**
1. **Home:** Hero section with your name and a tagline
2. **About:** Short bio and a skills list
3. **Projects:** 3-4 project cards in a grid
4. **Contact:** A form with name, email, and message fields (no need to submit)

**AI Prompts:**

For the home page:
```
Create a hero section for my home page with my name "Your Name" and
tagline "Full Stack Developer". Use Tailwind CSS with a centered layout.
```

For the about page:
```
Add a bio section and a skills list to my about page.
Include skills like React, TypeScript, Node.js, and Tailwind CSS.
Display skills as badges in a flex container.
```

For the projects page:
```
Create a grid of 4 project cards for my projects page.
Each card should have a title, description, and "View Project" link.
Use Tailwind CSS grid with responsive columns.
```

For the contact page:
```
Build a contact form with name, email, and message fields.
Style it with Tailwind CSS. No need to handle form submission.
```

---

## Key Concepts

### Route Definitions (`routes.ts`)
```ts
import { index, route } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  route('about', 'routes/about.tsx'),
  route('projects', 'routes/projects.tsx'),
  route('contact', 'routes/contact.tsx'),
] satisfies RouteConfig;
```

### NavLink vs Link
```tsx
// Link - basic navigation
<Link to="/about">About</Link>

// NavLink - knows if it's active
<NavLink
  to="/about"
  className={({ isActive }) => isActive ? 'underline' : ''}
>
  About
</NavLink>
```

---

## Troubleshooting

If `npm run dev` fails with configuration errors:

1. **"reactRouter is not a function"** — Use named import:
   ```ts
   import { reactRouter } from '@react-router/dev/vite';
   ```

2. **Missing tsconfig.app.json** — Remove the reference from `tsconfig.json`

3. **Duplicate route id "root"** — Don't wrap routes in `layout('root.tsx', ...)`

4. **Could not determine server runtime** — Install `@react-router/node`:
   ```bash
   npm install @react-router/node
   ```

---

Built for [AI Code Academy](https://aicode-academy.com) — From Prompt to Production course.
