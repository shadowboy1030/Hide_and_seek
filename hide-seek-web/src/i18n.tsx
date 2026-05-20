import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { htmlLang, isLanguage, type Language } from "./i18n/config";

export type { Language } from "./i18n/config";
export { LANGUAGE_OPTIONS, LANGUAGES } from "./i18n/config";

type I18nContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("ko");

  useEffect(() => {
    const saved = window.localStorage.getItem("hide-seek-language");
    if (isLanguage(saved)) {
      setLanguage(saved);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("hide-seek-language", language);
    document.documentElement.lang = htmlLang(language);
  }, [language]);

  const value = useMemo(() => ({ language, setLanguage }), [language]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return context;
}
