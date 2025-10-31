import {
  CareerAchievement,
  CareerCompany,
  CareerPosition,
  CareerProject,
} from '@/models/careerModel'
import { CompanyRepository } from '@/repositories/companyRepository'
import { PositionRepository } from '@/repositories/positionRepository'
import { AchievementRepository } from '@/repositories/achievementRepository'
import { ProjectRepository } from '@/repositories/projectRepository'

export class CareerService {
  constructor(
    private companyRepository: CompanyRepository,
    private positionRepository: PositionRepository,
    private achievementRepository: AchievementRepository,
    private projectRepository: ProjectRepository,
  ) {}

  async getCareerCompanies(): Promise<CareerCompany[]> {
    const companies = await this.companyRepository.all()

    return Promise.all(
      companies.map(async (company) => {
        return {
          id: company.id,
          name: company.name,
          startDate: new Date(company.startDate).toLocaleDateString('en-US', {
            month: 'short',
            year: 'numeric',
          }),
          endDate: company.endDate
            ? new Date(company.endDate).toLocaleDateString('en-US', {
                month: 'short',
                year: 'numeric',
              })
            : 'Present',
          positions: await this.getCareerPositions(company.id),
        }
      }),
    )
  }

  private async getCareerPositions(companyId: number): Promise<CareerPosition[]> {
    const positions = await this.positionRepository.get(companyId)

    return Promise.all(
      positions.map(async (position) => {
        return {
          id: position.id,
          name: position.name,
          startDate: position.startDate
            ? new Date(position.startDate).toLocaleDateString('en-US', {
                month: 'short',
                year: 'numeric',
              })
            : '',
          endDate: position.endDate
            ? new Date(position.endDate).toLocaleDateString('en-US', {
                month: 'short',
                year: 'numeric',
              })
            : 'Present',
          achievements: await this.getCareerAchievements(position.id),
          projects: await this.getCareerProjects(position.id),
        }
      }),
    )
  }

  private async getCareerAchievements(positionId: number): Promise<CareerAchievement[]> {
    const achievements = await this.achievementRepository.get(positionId)

    return achievements.map((achievement) => {
      return {
        id: achievement.id,
        description: achievement.description,
      }
    })
  }

  private async getCareerProjects(positionId: number): Promise<CareerProject[]> {
    const projects = await this.projectRepository.get(positionId)

    return projects.map((project) => {
      return {
        id: project.id,
        name: project.name,
        description: project.description ?? 'No description',
        languages: project.techStack.languages,
        frameworks: project.techStack.frameworks,
      }
    })
  }
}
