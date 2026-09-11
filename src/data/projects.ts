import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: "betty",
    title: "BETTY",
    description:
      "Backend system for financial-market analysis and trading signals.",
    technologies: ["Node.js", "Express", "Jest", "Supertest"],
    isPrivate: true,
    status: "in-development",
  },
  {
    id: "ecommerce-api",
    title: "E-commerce Backend API",
    description:
      "Modular REST API for managing products, users and application data.",
    technologies: ["Node.js", "Express", "PostgreSQL", "Jest"],
    isPrivate: false,
    repositoryUrl:
      "https://github.com/CharlyKrDev/modular-ecommerce-backend-api",
    status: "completed",
    liveUrl: "https://modular-ecommerce-backend-api.onrender.com",
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
