# Carlos Alberto Kaar — Backend Developer Portfolio

Personal developer portfolio built with React, TypeScript, Vite and Tailwind CSS.

The project presents my backend development work, technical stack, professional background and certifications through a responsive single-page interface with a technical / system-inspired visual language.

> Currently under active development and visual refinement.

---

## About the Project

This portfolio was built from scratch as both a professional website and a practical frontend learning project.

The main goal is to present my profile as a Junior Backend Developer while keeping the interface focused on clarity, maintainability, accessibility and responsive design.

Rather than using a pre-built portfolio template, the UI and component architecture were designed specifically for this project.

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
- Mobile menu
- Active section navigation
- Downloadable CV
- Responsive layouts
- Keyboard focus states
- Semantic HTML
- SEO metadata
- Open Graph metadata
- Sitemap
- robots.txt

---

## Featured Projects

### BETTY

Private backend system for financial-market analysis and trading signals.

Main technologies:

- Node.js
- Express
- Jest
- Supertest

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

Production website developed for a medical center in Argentina, with focus on performance, accessibility and technical SEO.

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

The project separates reusable UI, page sections, data and TypeScript models.

```text
src/
├── components/
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── SectionContainer.tsx
│   └── SectionHeader.tsx
│
├── data/
│   ├── certifications.ts
│   ├── navigation.ts
│   ├── projects.ts
│   └── skills.ts
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
muted
dim
accent
accent-secondary
success
```

Typography also follows a functional distinction:

- **Inter** → primary content and readable text
- **JetBrains Mono** → navigation, metadata, system labels and technical details

The visual direction combines a dark technical interface with restrained terminal-inspired elements without adopting a traditional hacker or gaming aesthetic.

---

## Accessibility

The project currently includes:

- Semantic HTML landmarks
- `aria-labelledby` relationships
- Accessible navigation labels
- `aria-expanded` for the mobile menu
- Keyboard navigation
- Visible keyboard focus states
- Responsive typography and layout

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

Create a production build:

```bash
npm run build
```

---

## Current Status

The main application architecture and responsive layout are complete.

Current work focuses on:

- Visual polish
- Final branding
- About profile photo
- Microinteraction review
- Content review
- Final SEO validation
- Performance and Lighthouse testing
- Production deployment

---

## Author

**Carlos Alberto Kaar**

Junior Backend Developer  
Piacenza, Italy

- GitHub: https://github.com/CharlyKrDev
- LinkedIn: https://www.linkedin.com/in/carlos-alberto-kaar
- Portfolio: https://carloskaar.dev