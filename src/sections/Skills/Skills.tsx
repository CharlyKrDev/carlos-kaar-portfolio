import { SectionHeader } from "../../components/SectionHeader";
import { SectionContainer } from "../../components/SectionContainer";
import { skillCategories } from "../../data/skills";

export function Skills() {
  return (
    <SectionContainer id="skills" labelledBy="skills-title">
      <SectionHeader
        id="skills-title"
        number="04"
        label="Skills"
        title="Technical Stack"
        description="Technologies and practices I use to build, test and maintain backend systems."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skillCategories.map((category) => (
          <article key={category.id} className="border border-slate-800 p-5">
            <h3 className="font-mono text-sm uppercase tracking-wider text-slate-300">
              {category.title}
            </h3>

            <ul className="mt-5 space-y-3">
              {category.skills.map((skill) => (
                <li
                  key={skill}
                  className="flex items-center gap-2 text-sm text-slate-400"
                >
                  <span className="font-mono text-violet-400">&gt;</span>

                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </SectionContainer>
  );
}
