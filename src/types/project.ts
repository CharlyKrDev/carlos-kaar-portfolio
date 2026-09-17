export type Project = {
  id: ProjectId;
  title: string;
  description: string;
  technologies: string[];
  isPrivate: boolean;
  repositoryUrl?: string;
  documentationUrl?: string;
  status: ProjectStatus;
  liveUrl?: string;
};
export type ProjectId = "betty" | "ecommerce-api" | "centro-neurologia";
export type ProjectStatus = "in-development" | "production" | "completed";
