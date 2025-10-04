"use client";

import { createContext, ReactNode, useEffect, useState } from "react";

interface ThemeContext {
  color: Theme;
  toggleTheme: (currentTheme: string) => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}

type Theme = "light" | "dark";

export const ThemeContext = createContext<ThemeContext>({
  color: "light",
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  function toggleTheme(currentTheme: string) {
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  }

  useEffect(() => {
    setMounted(true);

    // Get initial theme from localStorage or system preference
    const storedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const initialTheme = storedTheme || (systemPrefersDark ? "dark" : "light");

    setTheme(initialTheme as Theme);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Only update the DOM if the theme has actually changed
    const currentClass = document.documentElement.classList.contains("dark");
    const shouldHaveClass = theme === "dark";

    if (currentClass !== shouldHaveClass) {
      if (shouldHaveClass) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }

    localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  return (
    <ThemeContext.Provider value={{ color: theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
