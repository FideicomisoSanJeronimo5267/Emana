import type { Block } from 'payload'

export const OasisBlock: Block = {
    slug: 'oasis',
    fields: [
        {
            name: 'title',
            type: 'text',
        },
        {
            name: 'description',
            type: 'text',
        },

    ]

}