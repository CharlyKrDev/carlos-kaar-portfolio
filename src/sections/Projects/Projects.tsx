import { ProjectCard } from "./ProjectCard";
import { projects } from "../../data/projects";

export function Projects() {
  return (
    <section className="mx-auto max-w-6xl border-t border-slate-800 px-6 py-16">
      
      <header className="mb-8 space-y-2">
        <p className="font-mono text-xs uppercase tracking-widest text-violet-400">
          03 / Projects
        </p>

        <h2 className="text-3xl font-semibold tracking-tight text-slate-100">
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
