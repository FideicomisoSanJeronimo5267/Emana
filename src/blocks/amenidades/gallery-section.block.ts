import type { Block } from 'payload'

export const AmenitiesGallerySectionBlock: Block = {
    slug: 'amenidadesGallerySection',
    fields: [
        {
            name: 'amenities',
            type: 'array',
            required: true,
            fields: [
                { name: 'title',                type: 'text',     required: true },
                { name: 'description',          type: 'textarea' },
                { name: 'galleryDescription',   type: 'textarea' },
                { name: 'imageSrc',             type: 'text',     required: true },
                { name: 'imageAlt',             type: 'text',     required: true },
                { name: 'imageBlurData',        type: 'text',     required: true },
                { name: 'galleryImageSrc',      type: 'text' },
                { name: 'galleryImageAlt',      type: 'text' },
                { name: 'galleryImageBlurData', type: 'text' },
            ]
        }
    ]
}
