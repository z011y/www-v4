import { useContext } from "react";
import { MarkGithubIcon } from "@primer/octicons-react";

import LogoIcon from "./LogoIcon";
import LogoText from "./LogoText";
import ThemeToggle from "./ThemeToggle";
import { ThemeContext } from "../context/ThemeContext";

export default function Header() {
  const theme = useContext(ThemeContext);

  return (
    <header className="fixed top-0 z-50 flex w-full flex-col bg-white/75 pt-8 saturate-150 backdrop-blur-lg dark:bg-black/75">
      <div className="flex justify-between border-b border-gray-200 px-8 pb-4 lg:px-16 dark:border-gray-1000">
        <div className="flex gap-x-2">
          <LogoIcon />
          <h4 className="lowercase opacity-60">z011y</h4>
        </div>
        <div className="flex gap-x-4">
          {theme.color ? <ThemeToggle /> : null}
          <a
            href="https://github.com/z011y"
            target="_blank"
            rel="noreferrer"
            className="flex items-center hover:cursor-pointer"
          >
            <MarkGithubIcon />
          </a>
        </div>
      </div>
      <div className="flex w-full gap-x-16 overflow-x-scroll border-b border-black/10 bg-white px-8 py-2 font-mono text-sm tracking-wider uppercase sm:justify-center sm:px-0 dark:border-white/10 dark:bg-black">
        <a href="#home">Home</a>
        <a href="#career">Career</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
      </div>
    </header>
  );
}
