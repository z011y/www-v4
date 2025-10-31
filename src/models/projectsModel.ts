export interface ProjectDetails {
  id: number;
  name: string;
  description: string | null | undefined;
  languages: string[];
  frameworks: string[];
  positionId: number | null | undefined;
  positionName: string | null | undefined;
}
