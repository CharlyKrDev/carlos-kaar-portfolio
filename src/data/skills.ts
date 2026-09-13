import type { SkillCategory } from "../types/skill";

export const skillCategories: SkillCategory[] = [
  {
    id: "backend",
    title: "Backend",
    skills: [
      "JavaScript",
      "TypeScript",
      "Node.js",
      "Express.js",
      "REST APIs",
    ],
  },
  {
    id: "data",
    title: "Data",
    skills: [
      "PostgreSQL",
      "Supabase",
      "MongoDB",
    ],
  },
  {
    id: "testing",
    title: "Testing",
    skills: [
      "Jest",
      "Supertest",
      "Unit Testing",
      "Integration Testing",
      "E2E Testing",
      "Contract Testing",
    ],
  },
  {
    id: "workflow",
    title: "Workflow",
    skills: [
      "Git",
      "GitHub",
      "npm",
    ],
  },
];