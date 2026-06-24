import { getPayload } from 'payload'
import config from '@payload-config'

const BASE = process.env.NEXT_PUBLIC_ASSETS_BASE_URL ?? 'https://dlsxqwz0ptmx4.cloudfront.net'

const RESIDENCIAS_SECTIONS = [
    {
        blockType: 'residenciasCoverpage' as const,
        title: 'Residencias para habitar con propósito',
        subtitle: 'Departamentos y villas que emanan equilibrio, funcionalidad y diseño.',
        buttonTitle: 'Conoce tu nuevo hogar',
        buttonHref: '/contacto',
        coverSrc: `${BASE}/residences/residences-cover-bg.webp`,
        coverAlt: 'Residences cover page',
        coverBlurData: 'data:image/webp;base64,UklGRnoAAABXRUJQVlA4IG4AAADwAwCdASoUAAsAPm0skkWkIqGYBABABsSgCdMoRwABMslxPet0DQJAAP7ax2iGiRm5CPAWj8uKNb313ylQs7ETeMqt2T75j+ITbVU3u8BPqtX870z0nIKhtfXDulZIBYrdULdGKvLK7CAzVMAAAA==',
    },
    {
        blockType: 'residenciasFeatures' as const,
        features: [
            { text: 'Residencias adaptadas para cada estilo de vida' },
            { text: 'Acabados premium' },
            { text: 'Distribuciones que emanan confort, privacidad y bienestar' },
        ],
    },
    {
        blockType: 'residenciasPropertyType' as const,
        apartments: {
            title: 'Departamentos',
            description: 'De 85 m² a 190 m², con 2 o 3 recámaras, terrazas amplias y distribución funcional que aprovecha cada metro.',
            buttonText: 'Ver detalles',
            bgSrc: `${BASE}/residences/residences-apartments-bg.webp`,
            bgAlt: 'Apartments background',
            bgBlurData: 'data:image/webp;base64,UklGRnoAAABXRUJQVlA4IG4AAAAwBACdASoUAAwAPm0qkUWkIqGYBABABsSgCdMoMYAEt2uH0AsgVUxnWQAA2/k77mCYE9JLbMLyHJCJ+FeNNEBqulm0QuGTAkR+Lj4wfH3Aoz4O5KwmGSHHhMDZEoX2E75uacaALpBdm7rUhUIAAA==',
        },
        villas: {
            title: 'Villas',
            description: 'De 155 m² a 228 m², distribuidas en 2 niveles, con dobles alturas y espacios tipo casa dentro de un proyecto vertical.',
            buttonText: 'Ver detalles',
            bgSrc: `${BASE}/residences/residences-villas-bg.webp`,
            bgAlt: 'Villas background',
            bgBlurData: 'data:image/webp;base64,UklGRm4AAABXRUJQVlA4IGIAAAAQBACdASoUAAsAPm0skkWkIqGYBABABsSygE6ZQAExWXVAIMQI67RMwAD+9DTKjrfZSwopNv29EgOdsKgrYKXInflmS3cFslFIbdSoIRyMX61a3IXnRHRqx81P8CMwAFAAAA==',
        },
    },
    {
        blockType: 'residenciasApartmentSection' as const,
        title: 'Departamentos',
        description: 'Combinan distribución inteligente, acabados premium y vistas inigualables. Cada espacio fue diseñado para aprovechar la luz natural y mantener una sensación constante de amplitud y calma.',
        features: [
            { text: 'Superficies desde 85 m² hasta 190 m²' },
            { text: 'Opciones de 2 y 3 recámaras' },
            { text: 'Acabados premium' },
            { text: 'Terrazas amplias' },
            { text: 'Climatización VRF' },
            { text: '1 a 3 cajones de estacionamiento por unidad' },
        ],
        imageSrc: `${BASE}/residences/residences-v2-bedroom-a.webp`,
        imageAlt: 'Bedroom background',
        imageBlurData: 'data:image/webp;base64,UklGRnoAAABXRUJQVlA4IG4AAADwAwCdASoUAAsAPm0skkWkIqGYBABABsSxgE6ZQAEXV7mmu2vzRAbwAPkKaxt1wrsrU23nvy5S8AHxFwNvf7Ix7Qz3tW4iGe5/BBtoNzM0bBuE+K2ynVYUevFztsIGu52p2wzxbJTOE3+2jbIAAA==',
    },
    {
        blockType: 'residenciasVillasSection' as const,
        title: 'Villas',
        description: 'Un concepto exclusivo que combina la comodidad de una casa con la practicidad de un proyecto vertical. Espacios amplios y techos altos que se combinan con la tranquilidad de un entorno seguro rodeado de naturaleza.',
        features: [
            { text: 'Superficies desde 155 m² hasta 228 m²' },
            { text: '2 niveles' },
            { text: 'Distribución tipo casa' },
            { text: 'Espacios de doble altura' },
            { text: 'Acabados premium' },
            { text: '1 a 3 cajones de estacionamiento por unidad' },
        ],
        imageSrc: `${BASE}/residences/residences-v3-rooftop.webp`,
        imageAlt: 'Rooftop background',
        imageBlurData: 'data:image/webp;base64,UklGRmYAAABXRUJQVlA4IFoAAAAQBACdASoUAAkAPm0ukkYkIqGhMAgAgA2JZQCdACP8+XxjVNHFctssAAD+8wuy5RfFxBJKBvZnCzsWES5qeAVHCdTMrEFRJXVEpIYjc4YKZq9YIrLWvF8AAAA=',
    },
    {
        blockType: 'residenciasHero' as const,
        title: 'Así se ve tu oasis dentro de la ciudad',
        description: 'El equilibrio perfecto entre diseño, privacidad y bienestar.',
        bgSrc: `${BASE}/residences/social_area_v3.webp`,
        bgAlt: 'Social area V3 background',
        bgBlurData: 'data:image/webp;base64,UklGRn4AAABXRUJQVlA4IHIAAADwAwCdASoUAAoAPm0skUWkIqGYBABABsSxgE6ZQAFagAtJtfnRspRAAP6rrNZJTcUke9ehAJ2qitNiuB7KydLYT95xJWEcKFJR43+mNTjhrdi+TejuyCsq5mSesLnLhldfIgZri/fHt9xphd8uTBGAAAA=',
    },
    {
        blockType: 'residenciasPanoramicPhoto' as const,
        src: `${BASE}/residences/residences-social-area.webp`,
        alt: 'Social area background',
        blurData: 'data:image/webp;base64,UklGRn4AAABXRUJQVlA4IHIAAADwAwCdASoUAAoAPm0skUWkIqGYBABABsSxgE6ZQAFagAtJtfnRspRAAP6rrNZJTcUke9ehAJ2qitNiuB7KydLYT95xJWEcKFJR43+mNTjhrdi+TejuyCsq5mSesLnLhldfIgZri/fHt9xphd8uTBGAAAA=',
    },
    {
        blockType: 'unitsAvailable' as const,
        title: 'Conoce las unidades disponibles',
        buttonTitle: 'Agenda una cita',
    },
    {
        blockType: 'divisor' as const,
    },
    {
        blockType: 'brochure' as const,
        title: 'Descubre más sobre EMANA',
    },
    {
        blockType: 'appointment' as const,
        title: 'Vive la experiencia EMANA',
        description: 'Visita nuestro showroom y conoce el futuro de tu inversión.',
        coverImage: `${BASE}/residences/residences-footer-bg.webp`,
        blurDataURL: 'data:image/webp;base64,UklGRm4AAABXRUJQVlA4IGIAAACQAwCdASoUAA0APm0skkWkIqGYBABABsSzgF2ADbWeuXT7SknAAPzZdwL4ht5CoYyAsdytFDfm7bT0hSTXWfiwf06svRDu5OKc1XWy/O2bh+03F8kaTXHQmzpt37tP5UAAAA==',
    },
]

async function main() {
    const payload = await getPayload({ config })

    const { docs } = await payload.find({
        collection: 'page-content',
        where: { pageType: { equals: 'residencias' } },
    })

    if (docs.length) {
        await payload.update({
            collection: 'page-content',
            id: docs[0].id,
            data: { residenciasSections: RESIDENCIAS_SECTIONS },
        })
        console.log('✓ Documento residencias actualizado correctamente')
    } else {
        await payload.create({
            collection: 'page-content',
            data: {
                pageType: 'residencias',
                residenciasSections: RESIDENCIAS_SECTIONS,
            },
        })
        console.log('✓ Documento residencias creado correctamente')
    }

    process.exit(0)
}

main().catch((err) => {
    console.error(err)
    process.exit(1)
})
