export function HeroContent() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <span className="font-mono text-xs text-violet-400">01</span>

        <span className="h-px w-8 bg-slate-700" />

        <span className="font-mono text-xs font-medium uppercase tracking-widest text-slate-400">
          Hello_world
        </span>
      </div>

      <div className="space-y-3">
        <p className="font-mono text-sm text-slate-400">Hi, I&apos;m</p>

        <h1
          id="hero-title"
          className="text-4xl font-semibold tracking-tight text-slate-100 sm:text-5xl lg:text-6xl"
        >
          Carlos Alberto Kaar
        </h1>
        <p className="text-lg font-medium text-slate-300 sm:text-xl">
          Junior Backend Developer
        </p>
        <p className="max-w-xl text-sm leading-6 text-slate-400 sm:text-base">
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
      items-center
      border
      border-violet-400
      bg-violet-400
      px-5
      py-3
      font-mono
      text-sm
      text-slate-950
      transition-colors
      duration-200
      hover:bg-violet-300
      hover:border-violet-300
      min-w-44
        justify-center
    "
        >
          &gt; View projects
        </a>

        <a
          href="/cv/Carlos_Alberto_Kaar_CV_EN.pdf"
          download
          className="
      inline-flex
      items-center
      border
      border-teal-500
      px-5
      py-3
      font-mono
      text-sm
      text-teal-400
      transition-colors
      duration-200
      hover:border-teal-400
      hover:text-teal-300
      min-w-44
      justify-center
    "
        >
          &gt; Download CV
        </a>
      </div>
    </div>
  );
}
