import i18n, { LanguageDetectorModule } from "i18next";
import { initReactI18next } from "react-i18next";
import { getLocales } from "expo-localization";

import en from "./translations/en";
import ru from "./translations/ru";

export const defaultNS = "common";

const resources = {
  en,
  ru,
};

const RNLanguageDetector: LanguageDetectorModule = {
  type: "languageDetector",
  init: () => {
    //
  },
  detect: () => {
    const currentLanguage = getLocales()[0]?.languageCode;
    return currentLanguage ?? "ru";
  },
  cacheUserLanguage: () => {},
};

i18n
  .use(RNLanguageDetector)
  .use(initReactI18next)
  .init({
    compatibilityJSON: "v3",
    resources,
    lng: "en",
    debug: __DEV__ && !process.env.JEST_WORKER_ID,
    defaultNS: defaultNS,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
