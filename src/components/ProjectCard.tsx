import * as Icons from "@primer/octicons-react";

import { ProjectDetails } from "@/models/projectsModel";
import Badge from "./Badge";

interface ProjectCardProps {
  project: ProjectDetails;
  isFocused: boolean;
}

export default function ProjectCard({ project, isFocused }: ProjectCardProps) {
  const renderLanguages = () => {
    const languageComponents = project.languages?.map((language, i: number) => {
      return <Badge key={i} text={language?.toString()} />;
    });
    return languageComponents;
  };

  const renderFrameworks = () => {
    const frameworkComponents = project.frameworks?.map(
      (framework, i: number) => {
        return <Badge key={i} text={framework?.toString()} />;
      },
    );
    return frameworkComponents;
  };

  return (
    <div
      className={`dark:bg-gray-1100 flex w-full flex-col gap-y-4 rounded-2xl bg-gray-100 p-8 ${
        isFocused ? "border-blue border" : ""
      }`}
    >
      <div className="mb-4 flex items-start justify-between">
        <Icons.PackageIcon size="medium" />
        <h4>project</h4>
      </div>
      <a className="anchor" id={`project-${project.id}`}></a>
      <h2>{project.name}</h2>
      {project.positionName ? (
        <div className="flex items-center gap-x-2">
          <Icons.MilestoneIcon />
          <a className="text-blue" href={`#position-${project.positionId}`}>
            {project.positionName}
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
