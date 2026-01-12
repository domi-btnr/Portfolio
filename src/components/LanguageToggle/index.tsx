import "./style.css";

import { LanguagesIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

import i18n from "~/lang";

export default function LanguageToggle() {
  const { t } = useTranslation();
  const activeLanguage = i18n.resolvedLanguage ?? "en";

  const toggleLanguage = async () => {
    const newLanguage = activeLanguage === "en" ? "de" : "en";
    await i18n.changeLanguage(newLanguage);
  };

  return (
    <button className="languageToggleButton" onClick={() => toggleLanguage()} aria-label={t(`accessibility.toggleLanguage${activeLanguage.toUpperCase()}`)}>
      <LanguagesIcon size={20} />
      <span>{activeLanguage.toUpperCase()}</span>
    </button>
  );
}
