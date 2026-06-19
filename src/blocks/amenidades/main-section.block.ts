import type { Block } from 'payload'

export const AmenitiesMainSectionBlock: Block = {
    slug: 'amenidadesMainSection',
    fields: [
        {
            name: 'amenities',
            type: 'array',
            required: true,
            fields: [
                { name: 'title',              type: 'text',     required: true },
                { name: 'description',        type: 'textarea' },
                { name: 'imageSrc',           type: 'text',     required: true },
                { name: 'imageAlt',           type: 'text',     required: true },
                { name: 'imageBlurData',      type: 'text',     required: true },
                { name: 'applyGrillDeckZoom', type: 'checkbox' },
            ]
        }
    ]
}
