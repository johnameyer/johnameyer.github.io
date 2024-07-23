import { GenericLink } from './link';
import { Award } from './award';
import { GenericImage } from './image';

export class Project {
  title: string;
  cardImg?: string;
  imgs?: GenericImage[];
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
