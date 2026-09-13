import { ProjectCard } from "./ProjectCard";
import { projects } from "../../data/projects";
import { SectionHeader } from "../../components/SectionHeader";
import { SectionContainer } from "../../components/SectionContainer";

export function Projects() {
  return (
    <SectionContainer id="projects" labelledBy="projects-title">
      <SectionHeader
        id="projects-title"
        number="02"
        label="Projects"
        title="Selected Work"
        description="A selection of backend systems, APIs and production projects focused on reliability, data integration and maintainable architecture."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </SectionContainer>
  );
}
