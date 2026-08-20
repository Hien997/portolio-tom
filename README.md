# Hiển Nguyễn — Senior Front-End Developer Portfolio

A single-page portfolio built around an "engineering console" concept: dark surface, technical typography, and a signature terminal in the Hero section to establish an engineering-first identity.

**File:** `portfolio.html` — plain HTML/CSS/JS, no build step, no framework or package dependencies. Open it directly in a browser and it runs.

---

## Running it

No installation needed:

```bash
open portfolio.html        # macOS
# or
start portfolio.html       # Windows
```

Or drag the file into a browser, or use VS Code's Live Server extension.

---

## Page structure

| #   | Section (`id`) | Content                                                                                                              |
| --- | -------------- | -------------------------------------------------------------------------------------------------------------------- |
| 1   | `#hero`        | Name, title, core stack, CTAs (View CV / GitHub / LinkedIn / Contact), animated terminal signature                   |
| 2   | `#about`       | Short bio + 4 highlight stats                                                                                        |
| 3   | `#stack`       | Tech stack shown as a `package.json` block + grouped chip list                                                       |
| 4   | `#experience`  | Timeline of companies/roles, with impact metrics                                                                     |
| 5   | `#projects`    | 3 project cards (accordion): Problem / Solution / Tech stack / Architecture / Demo · GitHub                          |
| 6   | `#engineering` | 6 deep-dive cards: Large-scale UI, Virtualization, Web Worker, Frontend Architecture, API/Data fetching, Performance |
| 7   | `#education`   | Degrees & certificates                                                                                               |
| 8   | `#contact`     | Email / GitHub / LinkedIn / Online CV                                                                                |

---

## Design tokens (declared in `:root`)

```css
--bg: #0b0d10 /* page background */ --surface: #141820
  /* card / terminal background */ --border: #242a34 /* hairline border */
  --text: #e8eaee /* primary text */ --text-dim: #9aa2b1 /* secondary text */
  --accent: #e8a33d /* signal color — the single deliberate accent */
  --ok: #3ddc84 /* status dot for "open to new opportunities" */
  --font-display: "Space Grotesk" /* headings */ --font-body: "Inter"
  /* body copy */ --font-mono: "JetBrains Mono"
  /* labels, code, stats, terminal */;
```

Change colors or fonts here and the whole page picks it up.

---

## To do before publishing (current content is placeholder)

- [ ] **Hero**: real CV, GitHub, and LinkedIn links (`href="#"` → real URLs)
- [ ] **Experience**: company names (`[Tên công ty]`), dates, descriptions, impact metrics
- [ ] **Projects**: real Demo/GitHub links for all 3 (Store Management System, Wedding Website, Đền Thờ Dương 1C)
- [ ] **Education**: school name, certificates, years (`[Tên trường]`, `[Tên chứng chỉ]`, `[Năm]`)
- [ ] **Contact**: real email (`mailto:hello@example.com` → real address)
- [ ] **Meta**: `<title>` and `<meta name="description">` in `<head>` if you want different SEO copy
- [ ] **Copy language**: current section content is written in Vietnamese — translate to English if the target audience needs it

Quickly find remaining placeholders:

```bash
grep -n "\[Tên\|\[Năm\|example.com\|href=\"#\"" portfolio.html
```

---

## Roadmap (if you want to grow this into a full project)

The current version is a static HTML file meant for reviewing the design. It can evolve into:

- **Next.js + TypeScript + Tailwind**: split into components per section, use `next/font` for Space Grotesk/Inter/JetBrains Mono
- **Dedicated routes**: `/` (portfolio) and `/cv` (print-friendly online CV)
- **Framer Motion**: replace the current CSS scroll-reveal with smoother, orchestrated animation
- **SEO**: `next-sitemap`, an Open Graph image, JSON-LD (`Person` schema)
- **Lightweight CMS**: move experience/projects into a JSON or MDX file so content updates don't require touching code

---

## Compatibility

- Mobile-first responsive, main breakpoints at `900px`, `800px`, `720px`, `560px`
- Respects `prefers-reduced-motion`
- No external libraries beyond Google Fonts (Space Grotesk, Inter, JetBrains Mono)
