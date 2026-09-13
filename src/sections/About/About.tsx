import { SectionHeader } from "../../components/SectionHeader";
import { SectionContainer } from "../../components/SectionContainer";

export function About() {
  return (
    <SectionContainer id="about" labelledBy="about-title">
      <SectionHeader
        id="about-title"
        number="03"
        label="About_me"
        title="About Me"
      />

      <div className="grid gap-10 lg:grid-cols-[2fr_3fr]">
        <div className="w-full max-w-sm justify-self-center border border-line-strong p-5 lg:justify-self-start">
          {" "}
          <div className="mb-4 flex items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-wider text-success">
              online
            </span>

            <span className="font-mono text-xs uppercase tracking-wider text-dim">
              // developer
            </span>
          </div>
          <div className="flex aspect-4/5 items-center justify-center border border-line bg-surface">
            <span className="font-mono text-xs uppercase tracking-widest text-slate-600">
              image pending
            </span>
          </div>
          <div className="mt-4 border-t border-line pt-4">
            <p className="font-mono text-sm text-slate-200">
              Carlos Alberto Kaar
            </p>

            <p className="mt-1 text-sm text-muted">
              Junior Backend Developer
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <p className="font-mono text-sm text-muted">
              From operations to backend systems.
            </p>

            <h3 className="text-2xl font-semibold tracking-tight text-foreground">
              Analytical thinking, operational discipline and a growing focus on
              software.
            </h3>
          </div>

          <div className="space-y-4 text-sm leading-7 text-muted sm:text-base">
            <p>
              I spent nearly 12 years working in analytical and operational
              roles at Banco Galicia, where accuracy, traceability and process
              reliability were part of everyday work.
            </p>

            <p>
              Today, I apply that same mindset to backend development, building
              APIs, data integrations and maintainable systems while continuing
              to deepen my skills in Node.js, TypeScript, testing and software
              architecture.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="border border-line px-4 py-3">
              <p className="font-mono text-xs uppercase tracking-wider text-dim">
                Analytical Thinking
              </p>
            </div>

            <div className="border border-line px-4 py-3">
              <p className="font-mono text-xs uppercase tracking-wider text-dim">
                Process Reliability
              </p>
            </div>

            <div className="border border-line px-4 py-3">
              <p className="font-mono text-xs uppercase tracking-wider text-dim">
                Continuous Learning
              </p>
            </div>

            <div className="border border-line px-4 py-3">
              <p className="font-mono text-xs uppercase tracking-wider text-dim">
                Problem Solving
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
