import { BrandMark } from "./BrandMark";
import { useLanguage } from "../i18n/LanguageContext";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <a
              href="#home"
              className="focus-ring"
              aria-label={t.accessibility.homeLink}
            >
              <BrandMark />
            </a>

            <p className="font-mono text-xs text-dim">
              {t.common.role}
            </p>
          </div>

          <p className="font-mono text-xs text-dim">
            © {currentYear} Carlos Alberto Kaar
          </p>
        </div>
      </div>
    </footer>
  );
}