import { GenericLink } from './link';
import { CourseProject } from './course-project';

export class Course {
    subj: string;
    num: number;
    name: string;
    hidden ? = false;
    desc ?: string;
    primaryLang ?: string;
    semester ?: [ 'Spring' | 'Fall', number ];
    projects ?: CourseProject[];
    links ?: GenericLink[];
}
