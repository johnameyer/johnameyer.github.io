import { IconName, IconPrefix } from '@fortawesome/angular-fontawesome';

export class Link {
  link: string;
  title?: string;
  type: IconName | [IconPrefix, IconName];
}

export type GenericLink = Link | string;
