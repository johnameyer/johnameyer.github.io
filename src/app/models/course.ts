import { Project } from './project';
import { GenericLink } from './link';

export class Course {
    subj: string;
    num: number;
    name: string;
    hidden ? = false;
    desc ?: string;
    primaryLang ?: string;
    semester ?: string;
    projects ?: Project[];
    links ?: GenericLink[];
}
