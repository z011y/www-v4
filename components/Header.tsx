import { useContext } from "react";
import { MarkGithubIcon } from "@primer/octicons-react";

import LogoIcon from "./LogoIcon";
import LogoText from "./LogoText";
import ThemeToggle from "./ThemeToggle";
import { ThemeContext } from "../context/ThemeContext";

export default function Header() {
  const theme = useContext(ThemeContext);

  return (
    <header className="w-full fixed top-0 flex flex-col bg-white/75 dark:bg-black/75 backdrop-blur-lg saturate-150 pt-8 z-50">
      <div className="flex justify-between border-b border-gray-200 dark:border-gray-1000 pb-4 px-8 lg:px-16">
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
            className="hover:cursor-pointer"
          >
            <MarkGithubIcon />
          </a>
        </div>
      </div>
      <div className="w-full flex px-8 sm:px-0 sm:justify-center gap-x-16 border-b border-black/10 dark:border-white/10 bg-white dark:bg-black py-2 font-mono text-sm uppercase tracking-wider overflow-x-scroll">
        <a href="#home">Home</a>
        <a href="#career">Career</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
      </div>
    </header>
  );
}
