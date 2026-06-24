import { getPayload } from 'payload'
import config from '@payload-config'

const BASE = process.env.NEXT_PUBLIC_ASSETS_BASE_URL ?? 'https://dlsxqwz0ptmx4.cloudfront.net'

const CONTACTO_SECTIONS = [
    {
        blockType: 'contactoHeader' as const,
        title: 'QUEREMOS ESCUCHARTE',
        subtitle: 'Deja tu información de contacto y nos comunicaremos contigo a la brevedad.',
    },
    {
        blockType: 'contactoShowroom' as const,
        title: 'VISITA NUESTRO SHOWROOM',
        description: 'Conoce el proyecto en persona y recibe asesoría personalizada.',
        address: 'Calz. Mauricio Fernández Garza 121, Miravalle, 64660\nMonterrey, N.L.',
        whatsapp: '81 3124 3371',
        hours: 'Contáctanos para conocer nuestros horarios disponibles.',
        latitude: 25.6515,
        longitude: -100.3658,
    },
    {
        blockType: 'appointment' as const,
        title: 'VISÍTANOS Y VIVE LA EXPERIENCIA EMANA',
        description: 'Agenda tu recorrido hoy mismo',
        coverImage: `${BASE}/amenities/emana-experience.webp`,
        blurDataURL: 'data:image/webp;base64,UklGRlQAAABXRUJQVlA4IEgAAACQAwCdASoUAA0APm0uk0YkIqGhMAgAgA2JaQAAW7fp0OmrWAiAAP75iK3Fv/nLQiiBSyigWRr0aTqmHKAm9J9Ooi4gcGas4AA=',
    },
]

async function main() {
    const payload = await getPayload({ config })

    const { docs } = await payload.find({
        collection: 'page-content',
        where: { pageType: { equals: 'contacto' } },
    })

    if (docs.length) {
        await payload.update({
            collection: 'page-content',
            id: docs[0].id,
            data: { contactoSections: CONTACTO_SECTIONS },
        })
        console.log('✓ Documento contacto actualizado correctamente')
    } else {
        await payload.create({
            collection: 'page-content',
            data: {
                pageType: 'contacto',
                contactoSections: CONTACTO_SECTIONS,
            },
        })
        console.log('✓ Documento contacto creado correctamente')
    }

    process.exit(0)
}

main().catch((err) => {
    console.error(err)
    process.exit(1)
})
