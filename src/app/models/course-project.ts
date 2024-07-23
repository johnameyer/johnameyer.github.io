import { GenericLink } from './link';
import { Project } from './project';

export class CourseProject extends Project {
  // created for front page
  duration?: string;
}

export class HomeCourseProject extends CourseProject {
  semester: ['Spring' | 'Fall', number];
  link: string;
}
