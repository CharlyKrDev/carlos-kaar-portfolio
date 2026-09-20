import { useEffect, useState, type ReactNode } from "react";
import { defaultLanguage, type Language } from "./language";
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

    const browserLanguage = navigator.language.toLowerCase();

    if (browserLanguage.startsWith("es")) {
      return "es";
    }

    if (browserLanguage.startsWith("it")) {
      return "it";
    }

     return defaultLanguage;
  });

  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.lang = language;
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
