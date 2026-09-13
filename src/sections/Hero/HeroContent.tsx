export function HeroContent() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <span className="font-mono text-xs text-accent">01</span>

        <span className="h-px w-8 bg-line-strong" />

        <span className="font-mono text-xs font-medium uppercase tracking-widest text-muted">
          Hello_world
        </span>
      </div>

      <div className="space-y-3">
        <p className="font-mono text-sm text-muted">Hi, I&apos;m</p>

        <h1
          id="hero-title"
          className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
        >
          Carlos Alberto Kaar
        </h1>
        <p className="text-lg font-medium text-slate-300 sm:text-xl">
          Junior Backend Developer
        </p>
        <p className="max-w-xl text-sm leading-6 text-muted sm:text-base">
          Backend developer focused on building reliable APIs, data integrations
          and maintainable server-side systems with Node.js, Express and
          PostgreSQL.
        </p>
      </div>
      <div className="flex flex-wrap gap-4 pt-2">
        <a
          href="#projects"
          className="
        inline-flex
        min-w-44
        items-center
        justify-center
        border
        border-accent
        bg-accent
        px-5
        py-3
        font-mono
        text-sm
        text-canvas
        transition-colors
        duration-200
        hover:border-accent-hover
        hover:bg-accent-hover
        focus-ring
      "
        >
          &gt; View projects
        </a>

        <a
          href="/cv/Carlos_Alberto_Kaar_CV_EN.pdf"
          download
          className="
          focus-ring
          inline-flex
          min-w-44
          items-center
          justify-center
          border
          border-accent-secondary-strong
          px-5
          py-3
          font-mono
          text-sm
          text-accent-secondary
          transition-colors
          duration-200
          hover:border-accent-secondary
          hover:text-accent-secondary-hover
        "
        >
          &gt; Download CV
        </a>
      </div>
    </div>
  );
}
