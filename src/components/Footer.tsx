import { BrandMark } from "./BrandMark";
import { useLanguage } from "../i18n/LanguageContext";
import { resetAnalyticsConsent } from "../analytics/consent";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();
  const handleAnalyticsSettings = () => {
    resetAnalyticsConsent();
    window.location.reload();
  };

  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="flex flex-col gap-6 md:flex-row items-start md:items-center md:justify-between">
          <div className="space-y-1">
            <a
              href="#home"
              className="focus-ring"
              aria-label={t.accessibility.homeLink}
            >
              <BrandMark />
            </a>

            <p className="font-mono text-xs text-dim">{t.common.role}</p>
          </div>

          <p className="font-mono text-xs text-dim">
            © {currentYear} Carlos Alberto Kaar
          </p>
          <button
            type="button"
            onClick={handleAnalyticsSettings}
            className="cursor-pointer font-mono  text-xs text-muted transition-colors hover:text-foreground focus-ring">
            <span aria-hidden="true" className="text-accent">
              {"> "}
            </span>
            {t.consent.settings}
          </button>
        </div>
      </div>
    </footer>
  );
}
