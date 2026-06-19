import type { Block } from 'payload'

export const AmenitiesBlock: Block = {
    slug: 'amenities',
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
        },
        {
            name: 'description',
            type: 'text',
            required: true,
        },
        {
            name: 'linkText',
            type: 'text',
            required: true,
        },
        {
            name: 'amenities',
            type: 'array',
            required: true,
            fields: [
                {
                    name: 'name',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'description',
                    type: 'textarea',
                },
                {
                    name: 'imageSrc',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'imageAlt',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'imageBlurData',
                    type: 'text',
                    required: true,
                },
            ],
        },
    ],
}
