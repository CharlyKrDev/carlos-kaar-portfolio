const GA_MEASUREMENT_ID = "G-VQSMWP520T";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function loadGoogleAnalytics() {
  if (window.gtag) {
    return;
  }

  window.dataLayer = window.dataLayer || [];

  window.gtag = function () {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments);
  };

  window.gtag("consent", "default", {
    analytics_storage: "granted",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });

  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID);

  const script = document.createElement("script");

  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;

  document.head.appendChild(script);
}

export function trackEvent(
  eventName: string,
  parameters?: Record<string, string | number | boolean>,
) {
  window.gtag?.("event", eventName, parameters);
}
