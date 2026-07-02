# Amitabh Charjan — Portfolio

A minimalist, premium-feel personal portfolio built with **Next.js 14 (App Router)**, **React 18**, **Tailwind CSS**, and **Framer Motion**. Inspired by the elegant, editorial feel of `designleader.se` — recreated as an original design and layout, with no copied content, branding, or code.

## Design direction

- **Palette:** paper ivory background, deep navy accents, muted brass highlight — an academic, management-school register rather than a generic tech-startup look.
- **Type:** Fraunces (display serif, used sparingly for headlines) paired with Inter (body) and IBM Plex Mono (eyebrows/labels/dates).
- **Signature element:** a fixed vertical index rail on desktop that tracks scroll position across sections — a quiet nod to structured, analytical thinking.
- **Motion:** scroll-triggered reveals via Framer Motion, a top scroll-progress hairline, and restrained hover/transition states. Respects `prefers-reduced-motion`.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

```
app/
  layout.tsx       — fonts, metadata, root shell
  page.tsx          — assembles all sections
  globals.css        — base styles, selection/scrollbar, grain overlay
components/
  Nav.tsx            — top bar, mobile menu, vertical index rail
  Hero.tsx           — intro section
  About.tsx
  Resume.tsx         — timeline snapshot + resume download
  Positions.tsx      — Positions of Responsibility
  LiveProject.tsx    — Live Industry Experience
  AcademicProjects.tsx
  Achievements.tsx
  Skills.tsx
  Contact.tsx
  Footer.tsx
  Reveal.tsx         — scroll-reveal wrapper
  SectionHeading.tsx
lib/
  data.ts            — all resume content, centralized
public/
  profile.jpg
  Amitabh_Charjan_Resume.pdf
```

## Editing content

All text content (summary, education, positions, projects, skills, contact info) lives in a single file: `lib/data.ts`. Update it there and every section updates automatically.

## Replacing the resume file / photo

- Swap `public/Amitabh_Charjan_Resume.pdf` with an updated resume — filename must stay the same, or update the `href` in `components/Nav.tsx`, `components/Hero.tsx`, and `components/Resume.tsx`.
- Swap `public/profile.jpg` with a new photo (same filename), ideally a portrait-oriented, well-lit headshot.

## Deploying

This is a standard Next.js app — deploy directly to **Vercel** (recommended, zero-config) or any Node hosting. Run `npm run build && npm run start` for a production build.
