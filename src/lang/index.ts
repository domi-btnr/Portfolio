import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import de from "./de";
import en from "./en";

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      de: { translation: de },
      en: { translation: en },
    },
    fallbackLng: "en",
  })
  .then(() => {
    document.documentElement.lang = i18n.resolvedLanguage!;
  });

i18n.on("languageChanged", language => {
  document.documentElement.lang = language;
});

export default i18n;
