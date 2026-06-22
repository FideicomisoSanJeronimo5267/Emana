import type { Block } from 'payload'

export const ColaboradoresListBlock: Block = {
    slug: 'colaboradoresList',
    fields: [
        {
            name: 'collaborators',
            type: 'array',
            fields: [
                { name: 'name', type: 'text', required: true },
                { name: 'description', type: 'textarea' },
                { name: 'imageSrc', type: 'text' },
                { name: 'imageAlt', type: 'text' },
                { name: 'imageBlurData', type: 'text' },
                { name: 'logoSrc', type: 'text' },
            ],
        },
    ],
}
