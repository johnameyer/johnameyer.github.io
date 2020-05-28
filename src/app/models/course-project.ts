import { Project } from './project';

export class CourseProject extends Project {
    // created for front page
    link?: string;
    semester?: ["Spring" | "Fall", number];
    duration?: string;
}
