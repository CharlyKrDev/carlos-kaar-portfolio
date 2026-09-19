import { SectionHeader } from "../../components/SectionHeader";
import { SectionContainer } from "../../components/SectionContainer";
import profilePhoto from "../../assets/carlos-kaar-profile.webp";
import { useLanguage } from "../../i18n/LanguageContext";

export function About() {
  const { t } = useLanguage();
  return (
    <SectionContainer id="about" labelledBy="about-title">
      <SectionHeader
        id="about-title"
        number="03"
        label={t.about.label}
        title={t.about.title}
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
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover object-center"
            />

            <span className="pointer-events-none absolute left-3 top-3 h-4 w-4 border-l border-t border-accent" />

            <span className="pointer-events-none absolute bottom-3 right-3 h-4 w-4 border-b border-r border-accent-secondary" />
          </div>
          <div className="mt-4 border-t border-line pt-4">
            <p className="font-mono text-sm text-slate-200">
              Carlos Alberto Kaar
            </p>

            <p className="mt-1 text-sm text-muted">{t.common.role}</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <p className="font-mono text-sm text-muted">
              {t.about.intro}
            </p>

            <h3 className="text-2xl font-semibold tracking-tight text-foreground">
             {t.about.headline}
            </h3>
          </div>

          <div className="space-y-4 text-sm leading-7 text-muted sm:text-base">
            <p>
              {t.about.paragraphs.background}
            </p>

            <p>
              {t.about.paragraphs.present}
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="border border-line bg-surface/20 px-4 py-3">
              <p className="font-mono text-xs uppercase tracking-wider text-dim">
                <span className="mr-2 text-accent">&gt;</span>
                {t.about.traits.analyticalThinking}
              </p>
            </div>

            <div className="border border-line bg-surface/20 px-4 py-3">
              <p className="font-mono text-xs uppercase tracking-wider text-dim">
                <span className="mr-2 text-accent">&gt;</span>
                {t.about.traits.processReliability}
              </p>
            </div>

            <div className="border border-line bg-surface/20 px-4 py-3">
              <p className="font-mono text-xs uppercase tracking-wider text-dim">
                <span className="mr-2 text-accent">&gt;</span>
                {t.about.traits.continuousLearning}
              </p>
            </div>
            <div className="border border-line bg-surface/20 px-4 py-3">
              <p className="font-mono text-xs uppercase tracking-wider text-dim">
                <span className="mr-2 text-accent">&gt;</span>
                {t.about.traits.problemSolving}
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
