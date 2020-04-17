import { GenericLink } from './link';
import { Award } from './award';

export class Project {
    title: string;
    cardImg?: string;
    imgs?: string[];
    shortDesc: string;
    desc: string;
    challenge?: string;
    outcomes?: string;
    future?: string;
    technologies: string[];
    links?: GenericLink[];
    awards ?: Award[];
    hackathon ? = false;
    startup ? = false;
    live ? = false;
}
