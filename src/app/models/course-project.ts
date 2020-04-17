import { Project } from './project';

export class CourseProject extends Project {
    link?: string;
    semester?: ["Spring" | "Fall", number];
    duration?: string;
}
