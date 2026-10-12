import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: "hi",
    resources: {
      en: {
        translation: {
          message: "Hi my name is Pawan"
        }
      },
      fr: {
        translation: {
          message: "Bonjour, je m'appelle Pawan"
        }
      },
      hi: {
        translation: {
          message: "मेरा नाम पवन है"
        }
      }
    }
  });

export default i18n;