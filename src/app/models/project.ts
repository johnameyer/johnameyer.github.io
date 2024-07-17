import { GenericLink } from './link';
import { Award } from './award';
import { Image } from './image';

export class Project {
  title: string;
  cardImg?: string;
  imgs?: Image[];
  shortDesc: string;
  desc: string;
  challenge?: string;
  outcomes?: string;
  future?: string;
  technologies: string[];
  links?: GenericLink[];
  awards?: Award[];
  hackathon? = false;
  startup? = false;
  live? = false;
}

export type Attributes = Pick<Project, 'awards' | 'hackathon' | 'live' | 'startup'>;
