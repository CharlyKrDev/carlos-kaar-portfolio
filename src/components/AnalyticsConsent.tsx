import { useEffect, useState } from "react";
import { loadGoogleAnalytics } from "../analytics/googleAnalytics";
import { useLanguage } from "../i18n/LanguageContext";

const CONSENT_STORAGE_KEY = "analytics-consent";

type ConsentState = "granted" | "denied";

export function AnalyticsConsent() {
  const { t } = useLanguage();

  const [consent, setConsent] = useState<ConsentState | null>(() => {
    const savedConsent = localStorage.getItem(CONSENT_STORAGE_KEY);

    if (
      savedConsent === "granted" ||
      savedConsent === "denied"
    ) {
      return savedConsent;
    }

    return null;
  });

  useEffect(() => {
    if (consent === "granted") {
      loadGoogleAnalytics();
    }
  }, [consent]);

  const acceptAnalytics = () => {
    localStorage.setItem(
      CONSENT_STORAGE_KEY,
      "granted",
    );

    setConsent("granted");
  };

  const rejectAnalytics = () => {
    localStorage.setItem(
      CONSENT_STORAGE_KEY,
      "denied",
    );

    setConsent("denied");
  };

  if (consent !== null) {
    return null;
  }

  return (
    <aside
      aria-label={t.consent.title}
      className="
        fixed
        bottom-4
        left-4
        right-4
        z-50
        mx-auto
        max-w-2xl
        border
        border-line-strong
        bg-canvas
        p-5
      "
    >
      <div className="space-y-3">
        <p className="font-mono text-sm text-foreground">
          {t.consent.title}
        </p>

        <p className="text-sm leading-6 text-muted">
          {t.consent.description}
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <button
            type="button"
            onClick={acceptAnalytics}
            className="
              cursor-pointer
              border
              border-accent
              bg-accent
              px-4
              py-2
              font-mono
              text-xs
              text-canvas
              transition-colors
              hover:bg-accent-hover
              focus-ring
            "
          >
            {t.consent.accept}
          </button>

          <button
            type="button"
            onClick={rejectAnalytics}
            className="
              cursor-pointer
              border
              border-line-strong
              px-4
              py-2
              font-mono
              text-xs
              text-muted
              transition-colors
              hover:text-foreground
              focus-ring
            "
          >
            {t.consent.reject}
          </button>
        </div>
      </div>
    </aside>
  );
}