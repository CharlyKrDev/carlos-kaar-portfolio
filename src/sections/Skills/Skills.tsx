import { SectionHeader } from "../../components/SectionHeader";
import { SectionContainer } from "../../components/SectionContainer";
import { skillCategories } from "../../data/skills";
import { useLanguage } from "../../i18n/LanguageContext";

export function Skills() {
  const {t} = useLanguage()
  return (
    <SectionContainer id="skills" labelledBy="skills-title">
      <SectionHeader
        id="skills-title"
        number="04"
        label={t.skills.label}
        title={t.skills.title}
        description={t.skills.description}
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skillCategories.map((category) => (
          <article key={category.id} className="border border-line p-5">
            <h3 className="font-mono text-sm uppercase tracking-wider text-slate-300">
              {category.title}
            </h3>

            <ul className="mt-5 space-y-3">
              {category.skills.map((skill) => (
                <li
                  key={skill}
                  className="flex items-center gap-2 text-sm text-muted"
                >
                  <span className="font-mono text-accent">&gt;</span>

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
