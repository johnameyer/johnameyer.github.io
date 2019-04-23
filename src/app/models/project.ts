import { GenericLink } from './link';

export class Project {
    title: string;
    cardImg?: string;
    imgs?: string[];
    dates: string;
    shortDesc: string;
    desc: string;
    challenge?: string;
    outcomes?: string;
    future?: string;
    technologies: string[];
    links?: GenericLink[];
    hackathon ? = false;
    startup ? = false;
    live ? = false;
}
