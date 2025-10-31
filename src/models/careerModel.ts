export interface CareerProject {
  id: number;
  name: string;
  description: string;
  languages: string[];
  frameworks: string[];
}

export interface CareerAchievement {
  id: number;
  description: string;
}

export interface CareerPosition {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
  achievements: CareerAchievement[];
  projects: CareerProject[];
}

export interface CareerCompany {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
  positions: CareerPosition[];
}
