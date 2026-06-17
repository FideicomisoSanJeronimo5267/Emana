import { CollectionConfig } from "payload";

export const PageContent: CollectionConfig = {
    slug: "page-content",
    fields: [
        {
            name: "slug",
            type: "text",
            required: true
        },
        {
            name: "sections",
            type: "array",
            required: true,
            fields: [
                {
                    name: "type",
                    type: "text",
                    required: true
                },
                {
                    name: "props",
                    type: "json",
                    required: true
                }
            ]
        },
    ],
}