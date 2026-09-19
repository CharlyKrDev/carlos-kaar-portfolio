import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: "betty",
    title: "BETTY",
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
    technologies: ["Node.js", "Express", "PostgreSQL", "Jest"],
    isPrivate: false,
    repositoryUrl: "https://github.com/CharlyKrDev/modular-ecommerce-backend-api",
    status: "completed",
  },
  {
    id: "centro-neurologia",
    title: "Centro de Neurología",
    technologies: ["JavaScript", "Tailwind CSS", "Cloudflare"],
    isPrivate: false,
    repositoryUrl: "https://github.com/CharlyKrDev/centrodeneurologia",
    liveUrl: "https://www.centrodeneurologia.com.ar/",
    status: "production",
  },
];
