import type { Block } from 'payload'

export const ResidenciasFeaturesBlock: Block = {
    slug: 'residenciasFeatures',
    fields: [
        {
            name: 'features',
            type: 'array',
            fields: [
                { name: 'text', type: 'text', required: true },
            ]
        }
    ]
}
