import { createContext, useContext } from "react";

import type { Language } from "./language";
import type { TranslationDictionary } from "./translations";

export type LanguageContextValue = {
  language: Language;
  setLanguage: (newLanguage: Language) => void;
  t: TranslationDictionary;
};

export const LanguageContext =
  createContext<LanguageContextValue | undefined>(undefined);

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (context === undefined) {
    throw new Error(
      "useLanguage must be used within a LanguageProvider",
    );
  }

  return context;
}