import { Project } from './project';
import { Award } from './award';

export class StandaloneProject extends Project {
    slug: string;
    awards: Award[];
    startDate: string;
    endDate: string;
}
