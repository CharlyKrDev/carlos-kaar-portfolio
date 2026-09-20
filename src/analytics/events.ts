import type { Language } from "../i18n/language";
import { trackEvent } from "./googleAnalytics";

type CvDownloadParams = {
  language: Language;
  fileUrl: string;
};

type LanguageChangeParams = {
  fromLanguage: Language;
  toLanguage: Language;
};

export function trackCvDownload({
  language,
  fileUrl,
}: CvDownloadParams) {
  const fileName = fileUrl.split("/").pop() ?? fileUrl;

  trackEvent("cv_download", {
    cv_language: language,
    file_name: fileName,
  });
}

export function trackLanguageChange({
  fromLanguage,
  toLanguage,
}: LanguageChangeParams) {
  trackEvent("language_change", {
    from_language: fromLanguage,
    to_language: toLanguage,
  });
}