import type { Block } from 'payload'

export const ResidenciasPanoramicPhotoBlock: Block = {
    slug: 'residenciasPanoramicPhoto',
    fields: [
        { name: 'src',      type: 'text' },
        { name: 'alt',      type: 'text' },
        { name: 'blurData', type: 'text' },
    ]
}
