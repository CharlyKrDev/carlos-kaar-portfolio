import { useEffect, useState, type ReactNode } from "react";
import type { Language } from "./language";
import { translations } from "./translations";
import { LanguageContext } from "./LanguageContext";

type LanguageProviderProps = {
  children: ReactNode;
};

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem("language");

    if (
      savedLanguage === "en" ||
      savedLanguage === "es" ||
      savedLanguage === "it"
    ) {
      return savedLanguage;
    }

    return "en";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const t = translations[language];

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
