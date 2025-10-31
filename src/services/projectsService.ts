import { PositionRepository } from "@/repositories/positionRepository";
import { ProjectRepository } from "@/repositories/projectRepository";
import { ProjectDetails } from "@/models/projectsModel";

export class ProjectsService {
  constructor(
    private positionRepository: PositionRepository,
    private projectRepository: ProjectRepository,
  ) {}

  async getProjectDetails(): Promise<ProjectDetails[]> {
    const projects = await this.projectRepository.all();

    return Promise.all(
      projects.map(async (project) => {
        const position = project.positionId
          ? await this.positionRepository.get(project.positionId)
          : null;

        return {
          id: project.id,
          name: project.name,
          description: project.description,
          languages: project.techStack.languages,
          frameworks: project.techStack.frameworks,
          positionId: project.positionId,
          positionName: position?.[0]?.name,
        };
      }),
    );
  }
}
