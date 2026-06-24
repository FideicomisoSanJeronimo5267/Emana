import type { Block } from 'payload'

export const FeaturesBlock: Block = {
    slug: 'features',
    fields: [
        {
            name: 'features',
            type: 'array',
            fields: [
                {
                    name: 'title',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'description',
                    type: 'text',
                    required: false,
                },
                
                {
                    name: 'icon',
                    type: 'code',
                    required: true,
                }
            ]
        }
    ]

}