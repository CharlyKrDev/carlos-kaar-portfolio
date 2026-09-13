import { ProjectCard } from "./ProjectCard";
import { projects } from "../../data/projects";

export function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="mx-auto max-w-6xl border-t border-slate-800 px-6 py-16"
    >
      <header className="mb-8 space-y-2">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-violet-400">02</span>

          <span className="h-px w-8 bg-slate-700" />

          <span className="font-mono text-xs font-medium uppercase tracking-widest text-slate-400">
            Projects
          </span>
        </div>

        <h2
          id="projects-title"
          className="text-3xl font-semibold tracking-tight text-slate-100"
        >
          Selected Work
        </h2>

        <p className="max-w-2xl text-sm leading-6 text-slate-400">
          A selection of backend systems, APIs and production projects focused
          on reliability, data integration and maintainable architecture.
        </p>
      </header>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
