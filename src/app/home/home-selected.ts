import { Course } from '../models/course';
import { courses } from '../course/courses';
import { projects } from '../project/projects';
import { HomeCourseProject } from '../models/course-project';
import { StandaloneProject } from '../models/standalone-project';
import { IndustryPosition } from '../models/industry-position';
import { industryPositions } from '../industry/industry';

const selectedNames: (string | [string, number])[] = [
  'sde-ii-aws',
  'cards-ts',
  'raise-the-bar',
  'harmony-ts',
  'cards-ts-web',
  'dunne-hall-website',
  'cincinnati-dance-website',
  'notre-dame-dining-hall-tracker',
  ['CSE30246', 0],
  ['CSE40746', 0],
];

export const selected: (StandaloneProject | HomeCourseProject | IndustryPosition)[] = selectedNames.map(name => {
  if (Array.isArray(name)) {
    const c: Course = courses.find(course => course.subj + course.num === name[0]);
    const p = { ...c.projects[name[1]] } as HomeCourseProject;
    p.link = '/course/' + c.subj + c.num;
    p.semester = c.semester;
    return p;
  } else {
    return [projects, industryPositions.map(position => ({ ...position, link: '/industry/' + position.slug }))]
      .flat()
      .find(project => project.slug === name);
  }
});
