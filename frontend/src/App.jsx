import React from "react";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

export default function App() {
  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <h1>{t("message")}</h1>

      <button onClick={() => changeLanguage("en")}>
        English
      </button>

      <button onClick={() => changeLanguage("hi")}>
        Hindi
      </button>

      <button onClick={() => changeLanguage("fr")}>
        French
      </button>
    </div>
  );
}