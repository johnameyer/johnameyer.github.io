export class Link {
    link: string;
    description?: string;
    type: string | string[];
}

export type GenericLink = Link | string;
