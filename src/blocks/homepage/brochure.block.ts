import type { Block } from 'payload'

export const BrochureBlock: Block = {
    slug: 'brochure',
    fields: [
        {
            name: 'title',
            type: 'text',
        },
        {
            name: 'description',
            type: 'text',
        },
        {
            name: 'titleFont',
            type: 'text',
        }
    ]
}