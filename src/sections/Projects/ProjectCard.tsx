import type { Project, ProjectStatus } from "../../types/project";

const statusStyles: Record<ProjectStatus, string> = {
  "in-development": "bg-violet-400",
  production: "bg-teal-400",
  completed: "bg-slate-500",
};

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article
      className="
    flex
    flex-col
    gap-5
    border
    border-slate-700
    p-6
    text-slate-100
    transition-colors
    duration-200
    hover:border-slate-500
    h-full
  "
    >
      <header className="flex items-center justify-between">
        <span className="font-mono text-sm text-slate-500">&gt;_</span>
        <span
          className="
    border
    border-slate-700
    px-2
    py-1
    font-mono
    text-xs
    uppercase
    tracking-wider
    text-slate-400
  "
        >
          {project.isPrivate ? "Private" : "Public"}
        </span>
      </header>
      <div className="space-y-3">
        <h3 className="text-xl font-semibold tracking-tight">
          {project.title}
        </h3>

        <p className="text-sm leading-6 text-slate-400">
          {project.description}
        </p>

        <div className="flex items-center gap-2">
          <span className={`h-2 w-2 ${statusStyles[project.status]}`} />

          <span className="font-mono text-xs uppercase tracking-wider text-slate-500">
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
        border-slate-700
        bg-slate-900
        px-2
        py-1
        font-mono
        text-xs
        text-slate-400
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
        text-violet-400
        transition-colors
        duration-200
        hover:text-violet-300
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
        text-violet-400
        transition-colors
        duration-200
        hover:text-violet-300
      "
          >
            &gt; live project
          </a>
        )}
      </div>
    </article>
  );
}
