import type { Block } from 'payload'

export const ResidenciasCoverpageBlock: Block = {
    slug: 'residenciasCoverpage',
    fields: [
        { name: 'title',         type: 'text' },
        { name: 'subtitle',      type: 'text' },
        { name: 'buttonTitle',   type: 'text' },
        { name: 'buttonHref',    type: 'text' },
        { name: 'coverSrc',      type: 'text' },
        { name: 'coverAlt',      type: 'text' },
        { name: 'coverBlurData', type: 'text' },
    ]
}
