import { SectionHeader } from "../../components/SectionHeader";
import { SectionContainer } from "../../components/SectionContainer";
import profilePhoto from "../../assets/carlos-kaar-profile.webp"

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
          
          <div className="mb-4 flex items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-wider text-success">
              online
            </span>

            <span className="font-mono text-xs uppercase tracking-wider text-dim">
              // developer
            </span>
          </div>
          <div className="relative aspect-4/5 overflow-hidden border border-line bg-surface">
            <img
              src={profilePhoto}
              alt="Carlos Alberto Kaar"
              className="h-full w-full object-cover object-center"
            />

            <span className="pointer-events-none absolute left-3 top-3 h-4 w-4 border-l border-t border-accent" />

            <span className="pointer-events-none absolute bottom-3 right-3 h-4 w-4 border-b border-r border-accent-secondary" />
          </div>
          <div className="mt-4 border-t border-line pt-4">
            <p className="font-mono text-sm text-slate-200">
              Carlos Alberto Kaar
            </p>

            <p className="mt-1 text-sm text-muted">Junior Backend Developer</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <p className="font-mono text-sm text-muted">
              From operations to backend systems.
            </p>

            <h3 className="text-2xl font-semibold tracking-tight text-foreground">
              Analytical thinking, operational discipline and a practical
              approach to backend development.
            </h3>
          </div>

          <div className="space-y-4 text-sm leading-7 text-muted sm:text-base">
            <p>
              I spent nearly 12 years working in analytical and operational
              roles at Banco Galicia, where accuracy, traceability and process
              reliability were part of everyday work.
            </p>

            <p>
              Today, I bring that same mindset to backend development, building
              APIs, data integrations and maintainable systems with Node.js,
              TypeScript and automated testing while continuing to deepen my
              software engineering skills.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="border border-line bg-surface/20 px-4 py-3">
              <p className="font-mono text-xs uppercase tracking-wider text-dim">
                <span className="mr-2 text-accent">&gt;</span>
                Analytical Thinking
              </p>
            </div>

            <div className="border border-line bg-surface/20 px-4 py-3">
              <p className="font-mono text-xs uppercase tracking-wider text-dim">
                <span className="mr-2 text-accent">&gt;</span>
                Process Reliability
              </p>
            </div>

            <div className="border border-line bg-surface/20 px-4 py-3">
              <p className="font-mono text-xs uppercase tracking-wider text-dim">
                <span className="mr-2 text-accent">&gt;</span>
                Continuous Learning
              </p>
            </div>
            <div className="border border-line bg-surface/20 px-4 py-3">
              <p className="font-mono text-xs uppercase tracking-wider text-dim">
                <span className="mr-2 text-accent">&gt;</span>
                Problem Solving
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
