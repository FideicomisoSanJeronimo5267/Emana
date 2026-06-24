import type { Block } from 'payload'

export const ResidenciasVillasSectionBlock: Block = {
    slug: 'residenciasVillasSection',
    fields: [
        { name: 'title',          type: 'text' },
        { name: 'description',    type: 'textarea' },
        {
            name: 'features',
            type: 'array',
            fields: [
                { name: 'text', type: 'text', required: true },
            ]
        },
        { name: 'imageSrc',       type: 'text' },
        { name: 'imageAlt',       type: 'text' },
        { name: 'imageBlurData',  type: 'text' },
    ]
}
