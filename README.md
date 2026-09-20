# Carlos Alberto Kaar — Backend Developer Portfolio

Personal developer portfolio built with React, TypeScript, Vite and Tailwind CSS.

The site presents my backend development work, technical stack, professional background and certifications through a responsive single-page interface with a technical / system-inspired visual language.

**Production:** https://carloskaar.dev

---

## About the Project

This portfolio was built from scratch as both a professional website and a practical software development project.

Its main goal is to present my profile as a Junior Backend Developer while keeping the interface focused on clarity, maintainability, accessibility, performance and responsive design.

Rather than using a pre-built portfolio template, the UI, component architecture, design system and multilingual experience were designed specifically for this project.

---

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Inter Variable
- JetBrains Mono Variable

---

## Main Sections

The portfolio is organized as a single-page application:

1. Hero
2. Projects
3. About
4. Skills
5. Certifications
6. Contact

It also includes:

- Sticky responsive navigation
- Mobile menu with Escape-key support
- Active-section tracking
- EN / ES / IT language selector
- Browser-language detection
- Persisted language preference with `localStorage`
- Dynamic `<html lang>` synchronization
- Language-specific CV downloads
- Responsive layouts
- Keyboard focus states
- Semantic HTML
- Accessibility labels
- SEO metadata
- Open Graph metadata
- Sitemap
- `robots.txt`

---

## Internationalization

The portfolio includes a custom typed i18n system built without an external internationalization library.

Supported languages:

- English
- Spanish
- Italian

The system includes:

- Typed language values with TypeScript
- Centralized translation dictionaries
- Shared translation contracts
- Automatic browser-language detection
- Persisted user language preference
- Dynamic document language updates
- Language-specific CV files
- Translated navigation, sections, actions and accessibility labels

The implementation keeps technical data separate from translated copy so that project metadata, technologies and resource URLs remain independent from presentation language.

---

## Featured Projects

### BETTY

Private backend system for financial-market analysis and trading signals.

Main technologies:

- Node.js
- Express
- Jest
- Supertest

A public technical overview is available inside this repository:

`docs/betty/README.md`

---

### E-commerce Backend API

Modular REST API for managing products, users and application data.

Main technologies:

- Node.js
- Express
- PostgreSQL
- Jest

Repository:

https://github.com/CharlyKrDev/modular-ecommerce-backend-api

---

### Centro de Neurología

Production website developed for a medical center in Argentina, focused on performance, accessibility and technical SEO.

Main technologies:

- JavaScript
- Tailwind CSS
- Cloudflare

Repository:

https://github.com/CharlyKrDev/centrodeneurologia

Live website:

https://www.centrodeneurologia.com.ar/

---

## Architecture

The project separates reusable UI, page sections, data, translations and TypeScript models.

```text
src/
├── assets/
│   └── carlos-kaar-profile.webp
│
├── components/
│   ├── BrandMark.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── LanguageSwitcher.tsx
│   ├── SectionContainer.tsx
│   └── SectionHeader.tsx
│
├── data/
│   ├── certifications.ts
│   ├── cv.ts
│   ├── navigation.ts
│   ├── projects.ts
│   └── skills.ts
│
├── i18n/
│   ├── en.ts
│   ├── es.ts
│   ├── it.ts
│   ├── language.ts
│   ├── LanguageContext.ts
│   ├── LanguageProvider.tsx
│   └── translations.ts
│
├── sections/
│   ├── About/
│   ├── Certifications/
│   ├── Contact/
│   ├── Hero/
│   ├── Projects/
│   └── Skills/
│
├── types/
│   ├── certification.ts
│   ├── project.ts
│   └── skill.ts
│
├── App.tsx
├── index.css
└── main.tsx
```

---

## Design System

The interface uses semantic design tokens instead of coupling components directly to specific Tailwind colors.

Examples:

```text
canvas
surface
line
line-strong
foreground
foreground-subtle
muted
dim
accent
accent-secondary
success
```

Typography follows a functional distinction:

- **Inter** → primary content and readable text
- **JetBrains Mono** → navigation, metadata, system labels and technical details

The visual direction combines a dark technical interface with restrained terminal-inspired elements without adopting a traditional hacker or gaming aesthetic.

---

## Accessibility

The project includes:

- Semantic HTML landmarks
- `aria-labelledby` relationships
- Localized accessibility labels
- `aria-expanded` and `aria-controls` for mobile navigation
- Keyboard navigation
- Escape-key support for closing the mobile menu
- Visible keyboard focus states
- Dynamic document language
- Responsive typography and layout
- Descriptive image alternative text

---

## SEO

Implemented:

- Page title
- Meta description
- Author metadata
- Canonical URL
- Open Graph metadata
- Social preview image
- Favicon
- `robots.txt`
- `sitemap.xml`

Production domain:

`carloskaar.dev`

Further analytics and search-performance instrumentation are handled separately from the core portfolio application.

---

## CV Downloads

The portfolio serves a different CV according to the selected language:

```text
EN → Carlos_Alberto_Kaar_CV_EN.pdf
ES → Carlos_Alberto_Kaar_CV_ES.pdf
IT → Carlos_Alberto_Kaar_CV_IT.pdf
```

The language-to-file mapping is typed with TypeScript to ensure that every supported language has a corresponding CV.

---

## Running Locally

Clone the repository:

```bash
git clone https://github.com/CharlyKrDev/carlos-kaar-portfolio.git
```

Enter the project:

```bash
cd carlos-kaar-portfolio
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Run linting:

```bash
npm run lint
```

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## Status

The core portfolio application is complete and deployed in production.

Current maintenance focuses on:

- SEO validation
- Search Console integration
- Analytics and interaction tracking
- Performance monitoring
- Ongoing content and project updates

---

## Author

**Carlos Alberto Kaar**

Junior Backend Developer  
Piacenza, Italy

- GitHub: https://github.com/CharlyKrDev
- LinkedIn: https://www.linkedin.com/in/carlos-alberto-kaar
- Portfolio: https://carloskaar.dev
