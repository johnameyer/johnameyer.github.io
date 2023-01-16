import { Project } from "./project";

export class IndustryPosition extends Project {
    slug: string;
    company: String;
    companyLogo?: String;
    hackathon?: false = false;
    startup?: false = false;
    live ? = false;
    startDate: string;
    endDate: string;
}