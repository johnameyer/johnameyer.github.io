import { Course } from '../models/course';
import { courses } from '../course/courses';
import { projects } from '../project/projects';
import { CourseProject } from '../models/course-project';
import { StandaloneProject } from '../models/standalone-project';

const selectedNames: (string | [string, number])[] = [
    'cards-ts',
    'raise-the-bar',
    'harmony-ts',
    'cards-ts-web',
    'dunne-hall-website',
    ['CSE40746', 0],
    'cincinnati-dance-website',
    'notre-dame-dining-hall-tracker',
    ['CSE30246', 0]
];

export const selected: (StandaloneProject | CourseProject)[] = selectedNames.map((name) => {
    if (Array.isArray(name)) {
        const c: Course = courses.find((course) => course.subj + course.num === name[0]);
        const p: CourseProject = {...c.projects[name[1]]} as CourseProject;
        p.link = '/course/' + c.subj + c.num;
        p.semester = c.semester;
        return p;
    } else {
        return projects.find((project) => project.slug === name);
    }
});
