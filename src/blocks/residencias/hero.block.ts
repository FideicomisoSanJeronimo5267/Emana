import type { Block } from 'payload'

export const ResidenciasHeroBlock: Block = {
    slug: 'residenciasHero',
    fields: [
        { name: 'title',       type: 'text' },
        { name: 'description', type: 'text' },
        { name: 'bgSrc',       type: 'text' },
        { name: 'bgAlt',       type: 'text' },
        { name: 'bgBlurData',  type: 'text' },
    ]
}
