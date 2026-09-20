export type TranslationDictionary = {
  navigation: {
    projects: string;
    about: string;
    skills: string;
    certifications: string;
    contact: string;
    menu: string;
    close: string;
  };

  hero: {
    greeting: string;
    description: string;
    viewProjects: string;
    downloadCv: string;
  };
  projects: {
    label: string;
    title: string;
    sectionDescription: string;

    visibility: {
      private: string;
      public: string;
    };

    status: Record<ProjectStatus, string>;

    actions: {
      repository: string;
      liveSite: string;
      technicalOverview: string;
    };

    items: Record<
      ProjectId,
      {
        description: string;
      }
    >;
  };
  about: {
    label: string;
    title: string;
    intro: string;
    headline: string;
    paragraphs: {
      background: string;
      present: string;
    };
    traits: {
      analyticalThinking: string;
      processReliability: string;
      continuousLearning: string;
      problemSolving: string;
    };
  };
  skills: {
    label: string;
    title: string;
    description: string;
  };
  certifications: {
    label: string;
    title: string;
    description: string;

    actions: {
      viewCredential: string;
    };
  };
  contact: {
    label: string;
    title: string;
    description: string;

    actions: {
      sendEmail: string;
    };
  };
  common: {
    role: string;
  };

  systemPanel: {
    labels: {
      location: string;
      role: string;
      status: string;
    };

    location: string;
    status: string;
  };
  accessibility: {
    mainNavigation: string;
    mobileNavigation: string;
    languageSelector: string;
    developerProfileSummary: string;
    homeLink: string;
  };
  consent: {
    title: string;
    description: string;
    accept: string;
    reject: string;
    settings: string;
  };
  privacy: {
    label: string;
    title: string;
    description: string;
    analyticsTitle: string;
    analyticsDescription: string;
    consentDescription: string;
    close: string;
  };
};

import type { Language } from "./language";
import { en } from "./en";
import { es } from "./es";
import { it } from "./it";

export const translations: Record<Language, TranslationDictionary> = {
  en,
  es,
  it,
};

import type { ProjectId, ProjectStatus } from "../types/project";
