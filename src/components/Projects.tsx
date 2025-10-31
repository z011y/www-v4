import { ProjectDetails } from "@/models/projectsModel";
import ProjectCard from "./ProjectCard";

type ProjectsProps = {
  projects: ProjectDetails[];
  focusedProjectId: number;
};

export default function Projects({
  projects,
  focusedProjectId,
}: ProjectsProps) {
  return (
    <section
      id="projects"
      className="grid grid-cols-1 gap-4 px-4 pt-28 lg:grid-cols-2 lg:px-16"
    >
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          isFocused={project.id === focusedProjectId}
        />
      ))}
    </section>
  );
}
