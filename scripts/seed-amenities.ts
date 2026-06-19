import { getPayload } from 'payload'
import config from '@payload-config'

const ASSETS_BASE_URL = process.env.NEXT_PUBLIC_ASSETS_BASE_URL ?? 'https://dlsxqwz0ptmx4.cloudfront.net'

const AMENITIES_DATA = {
    blockType: 'amenities' as const,
    title: 'Amenidades que emanan bienestar.',
    description: 'Espacios caracterizados por brindar tranquilidad y equilibrio.',
    linkText: 'Ver todas las amenidades',
    amenities: [
        {
            name: 'Sky Pool',
            description: 'Vistas <br> panorámicas <br> y ambiente <br> exclusivo.',
            imageSrc: `${ASSETS_BASE_URL}/homepage/rooftop.webp`,
            imageAlt: 'Sky Pool',
            imageBlurData: 'data:image/webp;base64,UklGRngAAABXRUJQVlA4IGwAAADwAwCdASoUAAsAPm0skkWkIqGYBABABsSzgE6ACvPqfpNRszuu+boAAP7JYotnc11Ifh8ylsf6u4L4FYnZn9jOfC/mcKig8W0/xPu03jAG+XA07uHid56CS2gbSFjrGwJqlOwxO5V+LIJMAAA=',
        },
        {
            name: 'Grill Deck',
            description: 'Diseñada para <br> reuniones y <br> momentos <br> compartidos.',
            imageSrc: `${ASSETS_BASE_URL}/homepage/grill-deck.webp`,
            imageAlt: 'Grill Deck',
            imageBlurData: 'data:image/webp;base64,UklGRoIAAABXRUJQVlA4IHYAAADwAwCdASoUAA4APm0skkWkIqGYBABABsSygCo/RA1KOQUWox0P0QqAAP727WOXHcUO5NFgZVlUVgTiQa85iGh0bnR6v4kNmbWCXUODjLO828nFrh32+B4mxLrKjUiE/OWQpS/Jn/hsJtgvGv0tWmWSPieO0AAA',
        },
        {
            name: 'Business Center',
            description: 'Espacios <br> pensados para <br> fomentar tu <br> productividad.',
            imageSrc: `${ASSETS_BASE_URL}/homepage/business_center.webp`,
            imageAlt: 'Business Center',
            imageBlurData: 'data:image/webp;base64,UklGRn4AAABXRUJQVlA4IHIAAADwAwCdASoUAA4APm0qkUWkIqGYBABABsSgCdMoAC8PxVmniv3iL6YgAP7qSW3h3jXbFcMfF3bOoNBfn3l+Ga08+S9jyb7xF0m+Zr2qTjhetbUY7b2TWqU7mV3Pvd89bs8ufHspH4obeQ0nowioBSviAAA=',
        },
        {
            name: 'Alberca',
            description: 'Ideal para <br> disfrutar con tus <br> seres queridos.',
            imageSrc: `${ASSETS_BASE_URL}/homepage/pool.webp`,
            imageAlt: 'Pool',
            imageBlurData: 'data:image/webp;base64,UklGRo4AAABXRUJQVlA4IIIAAAAQBACdASoUAA4APm0skkWkIqGYBABABsSygE6AD5N9q8W2eSPvEVTCAAD+kYVjO+DHUFiueSNyF4Vv+N7af+jB9Ag7meSqJD16Sa/VUgTlSqUr8DMsaEC1t3EBEiFErUNyWDC47yiLHydFSiJDzvnB4dm9+P/dzEOn1BlKzQJo3AAA',
        },
    ],
}

async function main() {
    const payload = await getPayload({ config })

    const { docs } = await payload.find({
        collection: 'page-content',
        where: { pageType: { equals: 'home' } },
    })

    if (!docs.length) {
        console.error('No se encontró un documento page-content con pageType "home"')
        process.exit(1)
    }

    const doc = docs[0]
    const sections = (doc.homeSections ?? []) as any[]

    const amenitiesIndex = sections.findIndex((s: any) => s.blockType === 'amenities')

    if (amenitiesIndex >= 0) {
        sections[amenitiesIndex] = { ...sections[amenitiesIndex], ...AMENITIES_DATA }
        console.log('Actualizando bloque amenities existente...')
    } else {
        sections.push(AMENITIES_DATA)
        console.log('Agregando bloque amenities nuevo...')
    }

    await payload.update({
        collection: 'page-content',
        id: doc.id,
        data: { homeSections: sections },
    })

    console.log('✓ Amenities block poblado correctamente')
    process.exit(0)
}

main().catch((err) => {
    console.error(err)
    process.exit(1)
})
