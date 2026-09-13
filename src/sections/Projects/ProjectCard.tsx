import type { Project, ProjectStatus } from "../../types/project";

const statusStyles: Record<ProjectStatus, string> = {
  "in-development": "bg-accent",
  production: "bg-success",
  completed: "bg-dim",
};

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const visibilityStyles = project.isPrivate
    ? "border-accent/40 bg-accent/5 text-accent-hover"
    : "border-accent-secondary/40 bg-accent-secondary/5 text-accent-secondary";
  return (
    <article
      className="
    flex
    h-full
    flex-col
    gap-5
    border
    border-line
    p-6
    text-foreground
    transition-[border-color,background-color,transform]
    duration-200
    hover:border-line-strong
    hover:bg-surface/30
    focus-within:border-line-strong
    focus-within:bg-surface/30
  "
    >
      <header className="flex items-center justify-between">
        <span className="font-mono text-sm text-dim">&gt;_</span>
        <span
          className={`
            border
            border-line-strong
            px-2
            py-1
            font-mono
            text-xs
            uppercase
            tracking-wider
            ${visibilityStyles}
            `}
        >
          {project.isPrivate ? "Private" : "Public"}
        </span>
      </header>
      <div className="space-y-3">
        <h3 className="text-xl font-semibold tracking-tight">
          {project.title}
        </h3>

        <p className="text-sm leading-6 text-muted">{project.description}</p>

        <div className="flex items-center gap-2">
          <span className={`h-2 w-2 ${statusStyles[project.status]}`} />

          <span className="font-mono text-xs uppercase tracking-wider text-dim">
            status: {project.status}
          </span>
        </div>
      </div>
      <ul className="flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <li
            key={technology}
            className="
        border
        border-line-strong
        bg-surface
        px-2
        py-1
        font-mono
        text-xs
        text-muted
      "
          >
            {technology}
          </li>
        ))}
      </ul>
      <div className="mt-auto flex flex-wrap gap-4">
        {project.repositoryUrl && (
          <a
            href={project.repositoryUrl}
            target="_blank"
            rel="noreferrer"
            className="
        font-mono
        text-sm
        text-accent
        transition-colors
        duration-200
        hover:text-accent-hover
        focus-ring
      "
          >
            &gt; repository
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="
        font-mono
        text-sm
        text-accent
        transition-colors
        duration-200
        hover:text-accent-hover
        focus-ring
      "
          >
            &gt; live project
          </a>
        )}
      </div>
    </article>
  );
}
