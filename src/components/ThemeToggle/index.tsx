import "./style.css";

import useTheme from "@contexts/ThemeProvider";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { activeTheme, setActiveTheme } = useTheme();

  const Icon = activeTheme === "light" ? Sun : Moon;

  return (
    <button className="themeToggleButton" onClick={() => setActiveTheme(activeTheme === "light" ? "dark" : "light")}>
      <Icon size={20} />
    </button>
  );
}
