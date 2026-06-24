import type { Block } from 'payload'

export const ColaboradoresCoverpageBlock: Block = {
    slug: 'colaboradoresCoverpage',
    fields: [
        { name: 'title', type: 'text' },
        { name: 'subtitle', type: 'text' },
        { name: 'coverSrc', type: 'text' },
        { name: 'coverAlt', type: 'text' },
        { name: 'coverBlurData', type: 'text' },
    ],
}
