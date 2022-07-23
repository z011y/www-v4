import { createContext, ReactNode, useEffect, useState } from "react";

interface ThemeContext {
  color: Theme;
  toggleTheme: (currentTheme: string) => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}

type Theme = string | null;

export const ThemeContext = createContext<ThemeContext>({
  color: null,
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(null);

  function toggleTheme(currentTheme: string) {
    setTheme(currentTheme === "dark" ? "light" : "dark");
  }

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.theme = theme;
    } else if (theme === "light") {
      document.documentElement.classList.remove("dark");
      localStorage.theme = theme;
    } else {
      const currentTheme = localStorage.theme || "light";
      setTheme(currentTheme);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ color: theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
