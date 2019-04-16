import { GenericLink } from './link';

export class Project {
    title: string;
    img?: string;
    dates: string;
    desc: string;
    technologies: string[];
    github?: string;
    links?: GenericLink[];
    hackathon ? = false;
    startup ? = false;
    outcomes?: string;
}
