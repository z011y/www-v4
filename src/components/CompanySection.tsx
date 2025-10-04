import * as Icons from "@primer/octicons-react";

import { SelectCompany, SelectProject, SelectPosition } from "../../db/schema";

interface CompanySectionProps {
  company: SelectCompany;
  projects: SelectProject[];
  positions: SelectPosition[];
  focusProject: (projectName: number) => void;
}

export default function CompanySection({
  company,
  projects,
  positions,
  focusProject,
}: CompanySectionProps) {
  const renderpositions = () => {
    const filteredpositions = positions
      .filter((position) => position.companyId === company.id)
      .sort((a, b) => (b.id ?? 0) - (a.id ?? 0));
    const positionComponents = filteredpositions.map(
      (position: SelectPosition, i: number) => {
        if (
          position.roles &&
          typeof position.roles === "object" &&
          !Array.isArray(position.roles)
        ) {
          const rolesObject = position.roles;
          const responsibilities = rolesObject["responsibilities"];
          const filteredProjects = projects.filter(
            (project) => project.positionId === position.id,
          );
          if (
            responsibilities &&
            typeof responsibilities === "object" &&
            Array.isArray(responsibilities)
          ) {
            return (
              <div key={i}>
                <div className="my-4 flex items-center gap-x-4">
                  <div className="flex w-8 items-center justify-center rounded-full bg-gray-100 p-2 dark:bg-gray-1100">
                    <Icons.MilestoneIcon />
                  </div>
                  <h4>{position.name}</h4>
                  <a className="anchor" id={`position-${position.id}`}></a>
                </div>
                <div className="mb-4 ml-4 border-l border-gray-200 pl-4 dark:border-gray-1000">
                  <ul className="opacity-60">
                    {renderListItems(responsibilities)}
                  </ul>
                  <div className="flex flex-col">
                    {renderProjects(filteredProjects, position.name)}
                  </div>
                </div>
              </div>
            );
          }
        }
      },
    );

    return positionComponents;
  };

  const renderListItems = (responsibilities: string[]) => {
    if (
      responsibilities &&
      typeof responsibilities === "object" &&
      Array.isArray(responsibilities)
    ) {
      const listItems = responsibilities.map(
        (responsibility: string, i: number) => {
          return (
            <li key={i} className="my-2">
              {responsibility?.toString()}
            </li>
          );
        },
      );
      return listItems;
    }
  };

  const renderProjects = (filteredProjects: SelectProject[], role: string) => {
    const projectComponents = filteredProjects.map(
      (project: SelectProject, i: number) => {
        return (
          <div key={i} className="flex items-center gap-x-2">
            <Icons.PackageIcon />
            <a
              className="text-blue"
              href={`#project-${project.id}`}
              onClick={() => focusProject(project.id)}
            >
              {project.name}
            </a>
          </div>
        );
      },
    );
    return projectComponents;
  };

  return (
    <div className="px-8 lg:w-2/3 lg:px-16">
      <div className="mt-8 flex items-center gap-x-4">
        <h2>{company.name}</h2>
        <p className="text-sm opacity-60">{`${company.startDate} - ${company.endDate}`}</p>
      </div>
      {renderpositions()}
    </div>
  );
}
