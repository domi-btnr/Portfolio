import "./style.css";

import useTheme from "@contexts/ThemeProvider";
import { Moon, Sun } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function ThemeToggle() {
  const { t } = useTranslation();
  const { activeTheme, setActiveTheme } = useTheme();

  const Icon = activeTheme === "light" ? Sun : Moon;

  const toggleTheme = () => {
    setActiveTheme(activeTheme === "light" ? "dark" : "light");
  };

  return (
    <button className="themeToggleButton" onClick={toggleTheme} aria-label={t(`accessibility.toggleTheme${activeTheme.toPascalCase()}`)}>
      <Icon size={20} />
    </button>
  );
}
