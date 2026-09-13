import type { SkillCategory } from "../types/skill";

export const skillCategories: SkillCategory[] = [
  {
    id: "backend",
    title: "Backend",
    skills: [
      "Node.js",
      "JavaScript",
      "Express.js",
      "REST APIs",
      "API Integrations",
      "TypeScript",
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