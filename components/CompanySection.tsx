import * as Icons from "@primer/octicons-react";

import { SelectCompany, SelectProject, SelectTitle } from "../db/schema";

interface CompanySectionProps {
  company: SelectCompany;
  projects: SelectProject[];
  titles: SelectTitle[];
  focusProject: (projectName: number) => void;
}

export default function CompanySection({
  company,
  projects,
  titles,
  focusProject,
}: CompanySectionProps) {
  const renderTitles = () => {
    const filteredTitles = titles
      .filter((title) => title.companyId === company.id)
      .sort((a, b) => (b.id ?? 0) - (a.id ?? 0));
    const titleComponents = filteredTitles.map(
      (title: SelectTitle, i: number) => {
        if (
          title.roles &&
          typeof title.roles === "object" &&
          !Array.isArray(title.roles)
        ) {
          const rolesObject = title.roles;
          const responsibilities = rolesObject["responsibilities"];
          const filteredProjects = projects.filter(
            (project) => project.titleId === title.id
          );
          if (
            responsibilities &&
            typeof responsibilities === "object" &&
            Array.isArray(responsibilities)
          ) {
            return (
              <div key={i}>
                <div className="flex items-center gap-x-4 my-4">
                  <div className="p-2 w-8 flex justify-center items-center rounded-full bg-gray-100 dark:bg-gray-1100">
                    <Icons.MilestoneIcon />
                  </div>
                  <h4>{title.name}</h4>
                  <a className="anchor" id={`title-${title.id}`}></a>
                </div>
                <div className="mb-4 ml-4 pl-4 border-l border-gray-200 dark:border-gray-1000">
                  <ul className="opacity-60">
                    {renderListItems(responsibilities)}
                  </ul>
                  <div className="flex flex-col">
                    {renderProjects(filteredProjects, title.name)}
                  </div>
                </div>
              </div>
            );
          }
        }
      }
    );

    return titleComponents;
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
        }
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
      }
    );
    return projectComponents;
  };

  return (
    <div className="px-8 lg:px-16 lg:w-2/3">
      <div className="flex items-center gap-x-4 mt-8">
        <h2>{company.name}</h2>
        <p className="text-sm opacity-60">{`${company.startDate} - ${company.endDate}`}</p>
      </div>
      {renderTitles()}
    </div>
  );
}
