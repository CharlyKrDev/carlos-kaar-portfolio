export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="mx-auto max-w-06xl border-t border-slate-800 px-6 py-16"
    >
      <header className="mb-8 space-y-2">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-violet-400">03</span>
          <span className="hx-px w-8 bg-slate-700" />
          <span className="font-mono text-xs font-medium uppercase tracking-widest text-slate-400">
            about_me
          </span>
        </div>
        <h2
          id="about-title"
          className="text-3xl font-semibold tracking-tight text-slate-100"
        >
          About Me
        </h2>
      </header>
<div className="grid gap-10 lg:grid-cols-[2fr_3fr]">
  <div className="border border-dashed border-slate-700 p-6">
    Visual profile
  </div>

  <div className="border border-dashed border-slate-700 p-6">
    About content
  </div>
</div>
    </section>
  );
}
