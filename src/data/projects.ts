import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: "betty",
    title: "BETTY",
    description:
      "Modular backend system for financial-market analysis and trading signals, with automated testing and external data integrations.",
    technologies: ["Node.js", "Express", "Jest", "Supertest"],
    isPrivate: true,
    documentationUrl:
      "https://github.com/" +
      "CharlyKrDev/carlos-kaar-portfolio/blob/main/docs/betty/README.md",
    status: "in-development",
  },
  {
    id: "ecommerce-api",
    title: "E-commerce Backend API",
    description:
      "Modular REST API for managing products, users and application data with a maintainable backend architecture.",
    technologies: ["Node.js", "Express", "PostgreSQL", "Jest"],
    isPrivate: false,
    repositoryUrl: "https://github.com/CharlyKrDev/modular-ecommerce-backend-api",
    status: "completed",
  },
  {
    id: "centro-neurologia",
    title: "Centro de Neurología",
    description:
      "Production website built for a neurology medical center, focused on performance, accessibility and technical SEO.",
    technologies: ["JavaScript", "Tailwind CSS", "Cloudflare"],
    isPrivate: false,
    repositoryUrl: "https://github.com/CharlyKrDev/centrodeneurologia",
    liveUrl: "https://www.centrodeneurologia.com.ar/",
    status: "production",
  },
];
