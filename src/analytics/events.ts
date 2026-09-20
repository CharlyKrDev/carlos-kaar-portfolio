import type { Language } from "../i18n/language";
import type { ProjectId } from "../types/project";
import { trackEvent } from "./googleAnalytics";

type CvDownloadParams = {
  language: Language;
  fileUrl: string;
};

type LanguageChangeParams = {
  fromLanguage: Language;
  toLanguage: Language;
};
type ProjectDestination = "technical_overview" | "repository" | "live_site";

type ProjectClickParams = {
  projectId: ProjectId;
  destination: ProjectDestination;
};
type CredentialClickParams = {
  credentialId: string;
};
export function trackCvDownload({ language, fileUrl }: CvDownloadParams) {
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

export function trackProjectClick({
  projectId,
  destination,
}: ProjectClickParams) {
  trackEvent("project_click", {
    project_id: projectId,
    destination,
  });
  
}


export function trackCredentialClick({
  credentialId,
}: CredentialClickParams) {
  trackEvent("credential_click", {
    credential_id: credentialId,
  });
}