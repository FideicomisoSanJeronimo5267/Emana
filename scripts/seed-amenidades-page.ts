import { getPayload } from 'payload'
import config from '@payload-config'

const BASE = process.env.NEXT_PUBLIC_ASSETS_BASE_URL ?? 'https://dlsxqwz0ptmx4.cloudfront.net'

const AMENIDADES_SECTIONS = [
    {
        blockType: 'amenidadesCoverpage' as const,
        title: 'Amenidades que emanan bienestar',
        subtitle: 'Espacios diseñados para promover un estilo de vida con movimiento, calma y comunidad.',
        buttonTitle: 'Conoce nuestras amenidades',
        buttonHref: '/contacto',
        coverSrc: `${BASE}/amenities/grill_deck_v2.webp`,
        coverAlt: 'Grill deck version 2',
        coverBlurData: 'data:image/webp;base64,UklGRoAAAABXRUJQVlA4IHQAAACwAwCdASoUAA4APm0qkkWkIqGYBABABsSygAAw+2M0eYAUgXYsAAD+9u1jlyTSSG8JDAqrZIiZcED/2IB9cv3pI7uUjeYYoakkvXcMsMu+Iwvz8j5aetp5uFqMhIo4TOWuSAEN/HjCaijnSqgIMGCppKgAAA==',
    },
    {
        blockType: 'amenidadesMainSection' as const,
        amenities: [
            {
                title: 'FAMILY POOL',
                description: 'Un espacio que te permite disfrutar en familia. Cuenta con zona lounge y chapoteadero infantil.',
                imageSrc: `${BASE}/amenities/family_pool_v2.webp`,
                imageAlt: 'Family pool version 2',
                imageBlurData: 'data:image/webp;base64,UklGRrIAAABXRUJQVlA4WAoAAAAQAAAAEwAADQAAQUxQSBkAAAABD9D/iAgoCECGcfp3Uo4tQkT/JwDvcRkBAFZQOCByAAAA8AMAnQEqFAAOAD5tLJJFpCKhmAQAQAbEsoBadAuJ+Yb0NHCUp1gEAAD+9ffcwpSr2wSUeFY2wr9p0eRbPrK852DQ310zrk+yxdiqgzxYYV4Offy3q7MFoXLc7qgRuAVMMOU0o+OHmcr9IMQDHV7thAAA',
                applyGrillDeckZoom: false,
            },
            {
                title: 'GRILL DECK',
                description: 'Área equipada con asadores y espacios de convivencia al aire libre, diseñada para reuniones y momentos compartidos en un entorno cómodo y bien integrado.',
                imageSrc: `${BASE}/amenities/grill_deck.webp`,
                imageAlt: 'Grill deck',
                imageBlurData: 'data:image/webp;base64,UklGRoAAAABXRUJQVlA4IHQAAACwAwCdASoUAA4APm0qkkWkIqGYBABABsSygAAw+2M0eYAUgXYsAAD+9u1jlyTSSG8JDAqrZIiZcED/2IB9cv3pI7uUjeYYoakkvXcMsMu+Iwvz8j5aetp5uFqMhIo4TOWuSAEN/HjCaijnSqgIMGCppKgAAA==',
                applyGrillDeckZoom: true,
            },
            {
                title: 'SALÓN DE USOS MULTIPLES',
                description: 'El salón de usos múltiples te permite disfrutar de reuniones, celebraciones y momentos especiales en un espacio flexible y cómodo sin salir del proyecto.',
                imageSrc: `${BASE}/amenities/event-hall.webp`,
                imageAlt: 'Event hall',
                imageBlurData: 'data:image/webp;base64,UklGRoQAAABXRUJQVlA4IHgAAADwAwCdASoUAAwAPp0+mkgloyKhMAgAsBOJZQCdACB4xiPDiddnz1NQAPzujN0jccGgkKZB8WQ6S6QkMKmVACH9gwxaFskQGAijuSODu+Y7mFUYU3b9T62d4NFdKM3Le1nXxMECfUdLMqXpsD9B2IaKGiZ5xd4gaAA=',
                applyGrillDeckZoom: false,
            },
        ],
    },
    {
        blockType: 'amenidadesGallerySection' as const,
        amenities: [
            {
                title: 'FAMILY POOL',
                description: 'Un espacio que te permite disfrutar en familia. Cuenta con zona lounge y chapoteadero infantil.',
                galleryDescription: 'Diseñada para el descanso y la convivencia.',
                imageSrc: `${BASE}/amenities/family_pool_v2.webp`,
                imageAlt: 'Family pool version 2',
                imageBlurData: 'data:image/webp;base64,UklGRrIAAABXRUJQVlA4WAoAAAAQAAAAEwAADQAAQUxQSBkAAAABD9D/iAgoCECGcfp3Uo4tQkT/JwDvcRkBAFZQOCByAAAA8AMAnQEqFAAOAD5tLJJFpCKhmAQAQAbEsoBadAuJ+Yb0NHCUp1gEAAD+9ffcwpSr2wSUeFY2wr9p0eRbPrK852DQ310zrk+yxdiqgzxYYV4Offy3q7MFoXLc7qgRuAVMMOU0o+OHmcr9IMQDHV7thAAA',
                galleryImageSrc: `${BASE}/amenities/family_pool.webp`,
                galleryImageAlt: 'Family pool',
                galleryImageBlurData: 'data:image/webp;base64,UklGRooAAABXRUJQVlA4IH4AAADwAwCdASoUAA4APm0skkWkIqGYBABABsSygE6AD5N9DXe0bbnhlX3gAP6RhWM74MdQWK55I3IXhW/43tp/6MH0CGiWBFK8Z+4Wd+qM10uMr5A91uDLlUwBJhHErUPoZ19VINF/4pSQ8VC1vmrFaXdAV6EoXNuURvwu9OAAAAA=',
            },
            {
                title: 'GRILL DECK',
                description: 'Área equipada con asadores y espacios de convivencia al aire libre, diseñada para reuniones y momentos compartidos en un entorno cómodo y bien integrado.',
                galleryDescription: 'Espacios al aire libre que fomentan la convivencia con tus seres más queridos',
                imageSrc: `${BASE}/amenities/grill_deck.webp`,
                imageAlt: 'Grill deck',
                imageBlurData: 'data:image/webp;base64,UklGRoAAAABXRUJQVlA4IHQAAACwAwCdASoUAA4APm0qkkWkIqGYBABABsSygAAw+2M0eYAUgXYsAAD+9u1jlyTSSG8JDAqrZIiZcED/2IB9cv3pI7uUjeYYoakkvXcMsMu+Iwvz8j5aetp5uFqMhIo4TOWuSAEN/HjCaijnSqgIMGCppKgAAA==',
            },
            {
                title: 'LUDOTECA',
                description: 'Un espacio seguro y divertido diseñado especialmente para el entretenimiento y desarrollo de los más pequeños.',
                galleryDescription: 'Espacio para el juego, el aprendizaje y la creatividad de los niños.',
                imageSrc: `${BASE}/amenities/toy_library.webp`,
                imageAlt: 'Toy library',
                imageBlurData: 'data:image/webp;base64,UklGRmwAAABXRUJQVlA4IGAAAACwAwCdASoUAAoALk02m02hJCQkBABMSxgE6ZQANXkiVDqHnLhzAAD+6ExSHF+xuK+mALpzb3EVRFlNUQ3KqCzcRFh6mJIb+3wRda3sy35rLLhmCkzCSAruoBklUWuAAAA=',
            },
            {
                title: 'SALÓN DE USOS MULTIPLES',
                description: 'El salón de usos múltiples te permite disfrutar de reuniones, celebraciones y momentos especiales en un espacio flexible y cómodo sin salir del proyecto.',
                galleryDescription: 'Espacios para mantener tu productividad y comodidad en equilibrio',
                imageSrc: `${BASE}/amenities/event-hall.webp`,
                imageAlt: 'Event hall',
                imageBlurData: 'data:image/webp;base64,UklGRoQAAABXRUJQVlA4IHgAAADwAwCdASoUAAwAPp0+mkgloyKhMAgAsBOJZQCdACB4xiPDiddnz1NQAPzujN0jccGgkKZB8WQ6S6QkMKmVACH9gwxaFskQGAijuSODu+Y7mFUYU3b9T62d4NFdKM3Le1nXxMECfUdLMqXpsD9B2IaKGiZ5xd4gaAA=',
            },
            {
                title: 'SKY POOL',
                description: 'Disfruta de las mejores vistas panorámicas mientras te relajas en nuestra exclusiva alberca en las alturas.',
                galleryDescription: 'Vistas panorámicas y ambiente exclusivo.',
                imageSrc: `${BASE}/amenities/sky_pool.webp`,
                imageAlt: 'Sky pool',
                imageBlurData: 'data:image/webp;base64,UklGRnoAAABXRUJQVlA4IG4AAAAQBACdASoUAAsAPm0skkWkIqGYBABABsSzgE6Qf4D4VfPdCEB0SXHQAAD+yWKLZ3NdSH4fMpbH+ruC+BWJ2Z/Yznwv5nCooPFtP8T7tN4wBvlsoCHPZGxy3reA/A0YAPFBQWMRtC2ABR7XssAAAA==',
            },
            {
                title: 'SPORTS BAR',
                description: 'El lugar ideal para convivir, disfrutar de tus eventos deportivos favoritos y pasar un gran rato con amigos.',
                galleryDescription: 'Un espacio diseñado para fomentar la convivencia con tus seres queridos y no perderte tus partidos favoritos.',
                imageSrc: `${BASE}/amenities/sport_bar.webp`,
                imageAlt: 'Sport bar',
                imageBlurData: 'data:image/webp;base64,UklGRmQAAABXRUJQVlA4IFgAAACwAwCdASoUAAwAPm0qkUWkIqGYBABABsSygF2XgACZbKBK7eA8CAD87ji/qJX0zj91HnT4tStkA0N2l0vz12IO5Ll0iuNIt9Tg31jOykftZIr8XIDsTeAA',
            },
        ],
    },
    {
        blockType: 'divisor' as const,
    },
    {
        blockType: 'brochure' as const,
        title: 'Conoce más sobre nuestras amenidades',
        description: 'Planos, amenidades y especificaciones en un PDF.',
        titleFont: 'gilroy',
    },
    {
        blockType: 'appointment' as const,
        title: 'Vive la experiencia EMANA',
        description: 'Agenda un recorrido en nuestro showroom y conoce más sobre tu nuevo estilo de vida.',
        coverImage: `${BASE}/amenities/emana-experience.webp`,
        blurDataURL: 'data:image/webp;base64,UklGRlQAAABXRUJQVlA4IEgAAACQAwCdASoUAA0APm0uk0YkIqGhMAgAgA2JaQAAW7fp0OmrWAiAAP75iK3Fv/nLQiiBSyigWRr0aTqmHKAm9J9Ooi4gcGas4AA=',
    },
]

async function main() {
    const payload = await getPayload({ config })

    const { docs } = await payload.find({
        collection: 'page-content',
        where: { pageType: { equals: 'amenidades' } },
    })

    if (docs.length) {
        await payload.update({
            collection: 'page-content',
            id: docs[0].id,
            data: { amenidadesSections: AMENIDADES_SECTIONS },
        })
        console.log('✓ Documento amenidades actualizado correctamente')
    } else {
        await payload.create({
            collection: 'page-content',
            data: {
                pageType: 'amenidades',
                amenidadesSections: AMENIDADES_SECTIONS,
            },
        })
        console.log('✓ Documento amenidades creado correctamente')
    }

    process.exit(0)
}

main().catch((err) => {
    console.error(err)
    process.exit(1)
})
