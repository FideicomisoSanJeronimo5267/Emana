import type { Block } from 'payload'

export const LocationBlock: Block = {
    slug: 'location',
    fields: [
        {
            name: 'coverSrc',
            type: 'text',
            required: true,
        },
        {
            name: 'coverAlt',
            type: 'text',
            required: true,
        },
        {
            name: 'coverBlurData',
            type: 'text',
            required: true,
        },
        {
            name: 'title',
            type: 'text',
            required: true,
        },
        {
            name: 'description',
            type: 'textarea',
            required: true,
        },
        {
            name: 'importantLocations',
            type: 'array',
            fields: [
                {
                    name: 'icon',
                    type: 'code',
                },
                {
                    name: 'description',
                    type: 'textarea',
                }
            ]
        }
    ]

}