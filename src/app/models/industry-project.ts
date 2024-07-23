import { Project } from './project';

export class IndustryPosition extends Project {
  slug: string;
  company: String;
  companyLogo?: String;
  hackathon?: false = false;
  startup?: false = false;
  live? = false;
  startDate: string;
  endDate: string;
}

export function isIndustryPosition(p: Project): p is IndustryPosition {
  return 'company' in p;
}
