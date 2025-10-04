import * as Icons from "@primer/octicons-react";

import { SelectProject } from "../db/schema";
import Badge from "./Badge";

interface ProjectCardProps {
  project: SelectProject;
  isFocused: boolean;
  positionName: string;
}

export default function ProjectCard({
  project,
  isFocused,
  positionName,
}: ProjectCardProps) {
  const renderLanguages = () => {
    if (project.techStack && typeof project.techStack === "object") {
      const techStackObject = project.techStack;
      const languages = techStackObject["languages"];
      if (
        languages &&
        typeof languages === "object" &&
        Array.isArray(languages)
      ) {
        const languageComponents = languages.map((language, i: number) => {
          return <Badge key={i} text={language?.toString()} />;
        });
        return languageComponents;
      }
    }
  };

  const renderFrameworks = () => {
    if (project.techStack && typeof project.techStack === "object") {
      const techStackObject = project.techStack;
      const frameworks = techStackObject["frameworks"];
      if (
        frameworks &&
        typeof frameworks === "object" &&
        Array.isArray(frameworks)
      ) {
        const frameworkComponents = frameworks.map((framework, i: number) => {
          return <Badge key={i} text={framework?.toString()} />;
        });
        return frameworkComponents;
      } else {
        return <h5>None</h5>;
      }
    }
  };

  return (
    <div
      className={`flex w-full flex-col gap-y-4 rounded-2xl bg-gray-100 p-8 dark:bg-gray-1100 ${
        isFocused ? "border border-blue" : ""
      }`}
    >
      <div className="mb-4 flex items-start justify-between">
        <Icons.PackageIcon size="medium" />
        <h4>project</h4>
      </div>
      <a className="anchor" id={`project-${project.id}`}></a>
      <h2>{project.name}</h2>
      {positionName ? (
        <div className="flex items-center gap-x-2">
          <Icons.MilestoneIcon />
          <a className="text-blue" href={`#position-${project.positionId}`}>
            {positionName}
          </a>
        </div>
      ) : null}
      <p className="opacity-60">{project.description}</p>
      <h4>languages</h4>
      <div className="flex gap-x-4 overflow-scroll">{renderLanguages()}</div>
      <h4>frameworks & technologies</h4>
      <div className="flex gap-x-4 overflow-scroll">{renderFrameworks()}</div>
    </div>
  );
}
