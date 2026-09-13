import { SectionHeader } from "../../components/SectionHeader";
import { SectionContainer } from "../../components/SectionContainer";


export function About() {
  return (
  <SectionContainer id="about" labelledBy="about-title">
      <SectionHeader id= "about-title" number="03" label="About_me" title="About Me" />

      <div className="grid gap-10 lg:grid-cols-[2fr_3fr]">
        <div className="w-full max-w-sm border border-slate-700 p-5">
          <div className="mb-4 flex items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-wider text-teal-400">
              online
            </span>

            <span className="font-mono text-xs uppercase tracking-wider text-slate-500">
              // developer
            </span>
          </div>
          <div className="flex aspect-4/5 items-center justify-center border border-slate-800 bg-slate-900">
            <span className="font-mono text-xs uppercase tracking-widest text-slate-600">
              image pending
            </span>
          </div>
          <div className="mt-4 border-t border-slate-800 pt-4">
            <p className="font-mono text-sm text-slate-200">
              Carlos Alberto Kaar
            </p>

            <p className="mt-1 text-sm text-slate-400">
              Junior Backend Developer
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <p className="font-mono text-sm text-slate-400">
              From operations to backend systems.
            </p>

            <h3 className="text-2xl font-semibold tracking-tight text-slate-100">
              Analytical thinking, operational discipline and a growing focus on
              software.
            </h3>
          </div>

          <div className="space-y-4 text-sm leading-7 text-slate-400 sm:text-base">
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
            <div className="border border-slate-800 px-4 py-3">
              <p className="font-mono text-xs uppercase tracking-wider text-slate-500">
                Analytical Thinking
              </p>
            </div>

            <div className="border border-slate-800 px-4 py-3">
              <p className="font-mono text-xs uppercase tracking-wider text-slate-500">
                Process Reliability
              </p>
            </div>

            <div className="border border-slate-800 px-4 py-3">
              <p className="font-mono text-xs uppercase tracking-wider text-slate-500">
                Continuous Learning
              </p>
            </div>

            <div className="border border-slate-800 px-4 py-3">
              <p className="font-mono text-xs uppercase tracking-wider text-slate-500">
                Problem Solving
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
