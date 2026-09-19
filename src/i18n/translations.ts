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
    role: string;
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
    role: string;
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
