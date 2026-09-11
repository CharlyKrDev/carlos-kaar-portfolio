export type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  isPrivate: boolean;
  repositoryUrl?: string;
  status: ProjectStatus;
  liveUrl?: string;
};

export type ProjectStatus = "in-development" | "production" | "completed";
