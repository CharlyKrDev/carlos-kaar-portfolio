import { supportedLanguages } from "../i18n/language";
import { useLanguage } from "../i18n/LanguageContext";
import { trackLanguageChange } from "../analytics/events";
import type { Language } from "../i18n/language";

export function LanguageSwitcher() {
  const { t, language, setLanguage } = useLanguage();
  const handleLanguageChange = (newLanguage: Language) => {
    if (newLanguage === language) {
      return;
    }

    trackLanguageChange({
      fromLanguage: language,
      toLanguage: newLanguage,
    });

    setLanguage(newLanguage);
  };
  return (
    <div
      role="group"
      aria-label={t.accessibility.languageSelector}
      className="flex items-center gap-2 font-mono text-xs"
    >
      <span className="text-dim">LANG=</span>

      {supportedLanguages.map((item) => {
        const isActive = language === item;

        return (
          <button
            key={item}
            type="button"
            onClick={() => handleLanguageChange(item)} aria-pressed={isActive}
            className={`cursor-pointer transition-colors duration-200 focus-ring ${isActive ? "text-accent" : "text-muted hover:text-accent"
              }`}
          >
            {isActive && <span className="text-accent-secondary">[</span>}

            {item.toUpperCase()}

            {isActive && <span className="text-accent-secondary">]</span>}
          </button>
        );
      })}
    </div>
  );
}
