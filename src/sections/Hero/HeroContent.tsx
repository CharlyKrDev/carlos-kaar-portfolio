import { useLanguage } from "../../i18n/LanguageContext";
import { cvByLanguage } from "../../data/cv";
import { trackCvDownload } from "../../analytics/events";
export function HeroContent() {
  const { t, language } = useLanguage();
  const cvUrl = cvByLanguage[language];
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
        <p className="font-mono text-sm text-muted">{t.hero.greeting}</p>

        <h1
          id="hero-title"
          className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
        >
          Carlos Alberto Kaar
        </h1>
        <p className="text-lg font-medium text-foreground-subtle sm:text-xl">
          {t.common.role}
        </p>
        <p className="max-w-xl text-sm leading-6 text-muted sm:text-base">
          {t.hero.description}
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
          &gt; {t.hero.viewProjects}
        </a>

        <a
          href={cvUrl}
          download
          onClick={() =>
            trackCvDownload({
              language,
              fileUrl: cvUrl,
            })
          }
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
          &gt; {t.hero.downloadCv}
        </a>
      </div>
    </div>
  );
}
