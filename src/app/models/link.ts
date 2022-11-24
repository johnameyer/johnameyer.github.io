export class Link {
    link: string;
    title?: string;
    type: string | string[];
}

export type GenericLink = Link | string;
