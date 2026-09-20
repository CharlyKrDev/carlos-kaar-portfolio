import type { Certification } from "../types/certification";

export const certifications: Certification[] = [
  {
    id: "backend-development",
    title: "Backend Development",
    issuer: "Coderhouse",
    year: 2024,
    achievement: "Top 10",
    credentialUrl: "/certificates/backend-development.png",
    skills: ["Node.js", "Express.js", "MongoDB", "REST APIs", "Supertest"],
  },
  {
    id: "full-stack-react-developer",
    title: "Full Stack React Developer",
    issuer: "Coderhouse",
    year: 2024,
    achievement: "Top 10",
    credentialUrl:"/certificates/full-stack-react-developer.png",
    skills: ["JavaScript", "React", "Node.js", "Express.js", "MongoDB"],
  },
  {
    id: "github-universe-cloud",
    title: "GitHub Universe 2023 Cloud Skills Challenge",
    issuer: "Microsoft Learn",
    year: 2023,
    credentialUrl:"/certificates/github-universe-cloud.png",
    skills: ["Git", "GitHub", "GitHub Codespaces"],
  },
  {
    id: "javascript",
    title: "JavaScript",
    issuer: "Coderhouse",
    year: 2023,
    achievement: "Top 10",
    credentialUrl:"/certificates/javascript.png",
    skills: ["JavaScript", "Asynchronous Programming", "API Integration"],
  },
  {
    id: "data-analytics-starter",
    title: "Data & Analytics — Starter Level",
    issuer: "Grupo Financiero Galicia / Datalytics",
    year: 2023,
    credentialUrl:"/certificates/data-analytics-starter.pdf",
    skills: ["SQL", "PostgreSQL", "Data Analysis"]
  },
  {
    id: "web-programming",
    title: "Web Programming",
    issuer: "UTN Buenos Aires",
    year: 2019,
    credentialUrl:"/certificates/UTN-web-devoloper.png",
    skills: ["HTML", "CSS", "JavaScript"],
  },
];
