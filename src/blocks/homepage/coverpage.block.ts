import type { Block } from 'payload'

export const CoverpageBlock: Block = {
    slug: 'coverpage',
    fields: [
        {
            name: 'alt',
            type: 'text',
        },
        {
            name: 'src',
            type: 'text',
        },
        {
            name: 'blurData',
            type: 'text',
        },
    ]

}