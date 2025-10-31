import { CompanyRepository } from "@/repositories/companyRepository";
import { PositionRepository } from "@/repositories/positionRepository";
import { AchievementRepository } from "@/repositories/achievementRepository";
import { ProjectRepository } from "@/repositories/projectRepository";
import HomeClient from "../components/HomeClient";
import { CareerService } from "@/services/careerService";
import { ProjectsService } from "@/services/projectsService";

export default async function Home() {
  const companyRepository = new CompanyRepository();
  const positionRepository = new PositionRepository();
  const achievementRepository = new AchievementRepository();
  const projectRepository = new ProjectRepository();

  const careerService = new CareerService(
    companyRepository,
    positionRepository,
    achievementRepository,
    projectRepository,
  );
  const careerCompanies = await careerService.getCareerCompanies();

  const projectsService = new ProjectsService(
    positionRepository,
    projectRepository,
  );
  const projectDetails = await projectsService.getProjectDetails();

  return <HomeClient companies={careerCompanies} projects={projectDetails} />;
}
