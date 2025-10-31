import { MilestoneIcon, PackageIcon } from "@primer/octicons-react";

import { CareerPosition } from "@/models/careerModel";
import { Dispatch, SetStateAction } from "react";

type PositionProps = {
  position: CareerPosition;
  setFocusedProject: Dispatch<SetStateAction<number>>;
};

export default function Position({
  position,
  setFocusedProject,
}: PositionProps) {
  return (
    <div>
      <div className="my-4 flex items-center gap-x-4">
        <div className="dark:bg-gray-1100 flex w-8 items-center justify-center rounded-full bg-gray-100 p-2">
          <MilestoneIcon />
        </div>
        <h4>{position.name}</h4>
        <a className="anchor" id={`position-${position.id}`}></a>
      </div>
      <div className="dark:border-gray-1000 mb-4 ml-4 border-l border-gray-200 pl-4">
        <ul className="opacity-60">
          {position.achievements.map((achievement) => (
            <li className="my-2">{achievement.description}</li>
          ))}
        </ul>
        <div className="flex flex-col">
          {position.projects.map((project) => (
            <div key={project.id} className="flex items-center gap-x-2">
              <PackageIcon />
              <a
                className="text-blue"
                href={`#project-${project.id}`}
                onClick={() => setFocusedProject(project.id)}
              >
                {project.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
