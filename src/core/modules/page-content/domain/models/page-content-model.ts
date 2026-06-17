export interface PageContentModel {
    id: string;
    slug: string;
    sections: {
        type: string;
        props:
        | {
            [k: string]: unknown;
        }
        | unknown[]
        | string
        | number
        | boolean
        | null;
        id?: string | null;
    }[];
    updatedAt: string;
    createdAt: string;
}