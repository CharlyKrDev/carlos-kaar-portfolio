import { ProjectCard } from "./ProjectCard";
import { projects } from "../../data/projects";
import { SectionHeader } from "../../components/SectionHeader";
import { SectionContainer } from "../../components/SectionContainer";
import { useLanguage } from "../../i18n/LanguageContext";

export function Projects() {
  const { t } = useLanguage();

  return (
    <SectionContainer
      id="projects"
      labelledBy="projects-title"
    >
      <SectionHeader
        id="projects-title"
        number="02"
        label={t.projects.label}
        title={t.projects.title}
        description={t.projects.sectionDescription}
      />

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </SectionContainer>
  );
}