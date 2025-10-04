import { useContext } from "react";
import { MoonIcon, SunIcon } from "@primer/octicons-react";

import { ThemeContext } from "../context/ThemeContext";

export default function ThemeToggle() {
  const theme = useContext(ThemeContext);

  return (
    <button
      onClick={() => (theme.color ? theme.toggleTheme(theme.color) : null)}
    >
      {theme.color === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
