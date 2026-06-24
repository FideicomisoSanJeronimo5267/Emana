import type { Block } from 'payload'

export const UnitsAvailableBlock: Block = {
    slug: 'unitsAvailable',
    fields: [
        {
            name: 'title',
            type: 'text',
        },
        {
            name: 'buttonTitle',
            type: 'text'
        },
        {
            name: 'headerDescription',
            type: 'text'
        },
        {
            name: 'footerDescription',
            type: 'text'
        },
    ]
}