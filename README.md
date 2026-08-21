# Hiển Nguyễn — Senior Front-End Developer Portfolio

A Next.js 14 + TypeScript + Tailwind CSS portfolio built around an "engineering console" concept: dark surface, technical typography, and a signature terminal in the Hero section to establish an engineering-first identity.

## Tech Stack

| Layer         | Technology                                       |
| ------------- | ------------------------------------------------ |
| Framework     | Next.js 14 (App Router), React 18                |
| Language      | TypeScript                                       |
| Styling       | Tailwind CSS + shadcn/ui                         |
| Animations    | Framer Motion                                    |
| Icons         | lucide-react                                     |
| Fonts         | Inter, JetBrains Mono (next/font/google)         |
| State/Store   | Zustand, React Hook Form, Zod                    |
| Data/TanStack | TanStack Query, TanStack Table, TanStack Virtual |
| Quality       | Vitest, Playwright, ESLint                       |
| Architecture  | Module Federation, Monorepo (Turborepo)          |

## Features

- **Dark/Light theme** with system preference detection and localStorage persistence
- **Language toggle** — switch between Vietnamese (VN) and English (EN)
- **Responsive navigation** with mobile menu and scroll-aware background
- **Scroll-reveal animations** using Framer Motion with `IntersectionObserver`
- **Animated terminal** in Hero section with typing effect
- **Interactive project cards** with accordion expand/collapse
- **Section numbering** (01–06) with consistent visual language
- **Accessibility** — respects `prefers-reduced-motion`, ARIA labels, keyboard navigation

## Project Structure

```
portfolio-dev/
├── app/
│   ├── layout.tsx          # Root layout with metadata, fonts, ThemeProvider
│   └── page.tsx            # Home page composing all sections
├── components/
│   ├── nav.tsx             # Fixed navigation bar (scroll-aware, mobile menu)
│   ├── hero.tsx            # Hero section with animated terminal
│   ├── about.tsx           # About section with stats grid
│   ├── stack.tsx           # Tech stack (package.json code block + chips)
│   ├── experience.tsx      # Timeline of roles with impact metrics
│   ├── projects.tsx        # Project accordion cards
│   ├── engineering.tsx     # Engineering deep-dive cards
│   ├── education.tsx       # Education & certificates
│   ├── contact.tsx         # Contact section + footer
│   ├── theme-provider.tsx  # Theme context provider
│   ├── theme-toggle.tsx    # Dark/light mode toggle button
│   └── icons.tsx           # Custom SVG icons (Github, LinkedIn, Mail, etc.)
├── lib/
│   └── utils.ts            # Utility functions (cn, twMerge)
└── public/                 # Static assets (favicon, OG image)
```

## Running Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev
# Opens http://localhost:3000 automatically

# Build for production
npm run build

# Start production server
npm run start
```

## Page Sections

| #   | Component     | Content                                                                                                 |
| --- | ------------- | ------------------------------------------------------------------------------------------------------- |
| 1   | `Hero`        | Name, title, core stack, CTAs, animated terminal signature                                              |
| 2   | `About`       | Short bio + 4 highlight stats (6+ years, 1M+ records, etc.)                                             |
| 3   | `Stack`       | Tech stack shown as a `package.json` block + grouped chip list                                          |
| 4   | `Experience`  | Timeline of companies/roles, with impact metrics                                                        |
| 5   | `Projects`    | 3 project cards (accordion): Problem / Solution / Tech / Architecture / Demo · GitHub                   |
| 6   | `Engineering` | 6 deep-dive cards: Large-scale UI, Virtualization, Web Worker, Architecture, Data fetching, Performance |
| 7   | `Education`   | Degrees & certificates                                                                                  |
| 8   | `Contact`     | Email / GitHub / LinkedIn / Online CV + footer                                                          |

## Design Tokens

Colors and fonts are defined in `app/globals.css` using CSS variables (HSL format for Tailwind):

```css
:root {
  --background: 222 47% 11%; /* page background */
  --foreground: 210 40% 98%; /* primary text */
  --primary: 199 89% 48%; /* accent color */
  --border: 217 33% 17%; /* hairline border */
  --card: 222 47% 13%; /* card / terminal background */
}
```

## To Do Before Publishing

- [ ] **Hero**: real CV, GitHub, and LinkedIn links
- [ ] **Experience**: company names, dates, descriptions, impact metrics
- [ ] **Projects**: real Demo/GitHub links for all 3 projects
- [ ] **Education**: school name, certificates, years
- [ ] **Contact**: real email address
- [ ] **Meta**: SEO title/description in `app/layout.tsx`
- [ ] **Translations**: complete English translations for all sections

## Roadmap

- **CMS integration**: move experience/projects into JSON or MDX files
- **Print-friendly CV**: dedicated `/cv` route
- **SEO**: `next-sitemap`, Open Graph image, JSON-LD (`Person` schema)
- **Analytics**: integrate Vercel Analytics (already installed) or alternative
- **Contact form**: serverless function with email service

## Compatibility

- Mobile-first responsive design
- Respects `prefers-reduced-motion`
- Works on all modern browsers
- TypeScript strict mode enabled
