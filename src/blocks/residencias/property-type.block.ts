import type { Block } from 'payload'

export const ResidenciasPropertyTypeBlock: Block = {
    slug: 'residenciasPropertyType',
    fields: [
        {
            name: 'apartments',
            type: 'group',
            fields: [
                { name: 'title',       type: 'text' },
                { name: 'description', type: 'textarea' },
                { name: 'buttonText',  type: 'text' },
                { name: 'bgSrc',       type: 'text' },
                { name: 'bgAlt',       type: 'text' },
                { name: 'bgBlurData',  type: 'text' },
            ]
        },
        {
            name: 'villas',
            type: 'group',
            fields: [
                { name: 'title',       type: 'text' },
                { name: 'description', type: 'textarea' },
                { name: 'buttonText',  type: 'text' },
                { name: 'bgSrc',       type: 'text' },
                { name: 'bgAlt',       type: 'text' },
                { name: 'bgBlurData',  type: 'text' },
            ]
        },
    ]
}
