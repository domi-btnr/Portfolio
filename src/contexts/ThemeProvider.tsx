import React, { createContext, FC, useContext, useEffect } from "react";

interface Props {
  children: React.ReactNode;
}

type Themes = "light" | "dark";

interface ThemeContextProps {
  activeTheme: Themes;
  // eslint-disable-next-line no-unused-vars
  setActiveTheme: (theme: Themes) => void;
}

const ThemeProviderContext = createContext<ThemeContextProps>({
  activeTheme: "light",
  // eslint-disable-next-line no-empty-function
  setActiveTheme: () => {},
});

// eslint-disable-next-line react-refresh/only-export-components
export default function useTheme() {
  return useContext(ThemeProviderContext);
}

export const ThemeProvider: FC<Props> = ({ children }) => {
  const [activeTheme, setActiveTheme] = React.useState<Themes>(() => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", activeTheme);
  }, [activeTheme]);

  return (
    <ThemeProviderContext.Provider
      value={{
        activeTheme,
        setActiveTheme,
      }}
    >
      {children}
    </ThemeProviderContext.Provider>
  );
};
