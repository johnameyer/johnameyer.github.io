import { GenericLink } from './link';

export class Project {
    title: string;
    img?: string;
    dates: string;
    shortDesc: string;
    desc: string;
    challenge?: string;
    outcomes?: string;
    technologies: string[];
    links?: GenericLink[];
    hackathon ? = false;
    startup ? = false;
    live ? = false;
}
