export const ANALYTICS_CONSENT_KEY = "analytics-consent";

export type AnalyticsConsentState = "granted" | "denied";

export function getAnalyticsConsent(): AnalyticsConsentState | null {
  const consent = localStorage.getItem(ANALYTICS_CONSENT_KEY);

  if (consent === "granted" || consent === "denied") {
    return consent;
  }

  return null;
}

export function saveAnalyticsConsent(
  consent: AnalyticsConsentState,
) {
  localStorage.setItem(
    ANALYTICS_CONSENT_KEY,
    consent,
  );
}

export function resetAnalyticsConsent() {
  localStorage.removeItem(ANALYTICS_CONSENT_KEY);
}