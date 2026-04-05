import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import es from "./locales/es/common.json";
import en from "./locales/en/common.json";
import de from "./locales/de/common.json";
import zh from "./locales/zh/common.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      es: { translation: es },
      en: { translation: en },
      de: { translation: de },
      zh: { translation: zh },
    },
    fallbackLng: "es",
    supportedLngs: ["es", "en", "de", "zh"],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
    },
  });

export default i18n;
