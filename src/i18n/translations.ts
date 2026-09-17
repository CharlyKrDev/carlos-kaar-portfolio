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