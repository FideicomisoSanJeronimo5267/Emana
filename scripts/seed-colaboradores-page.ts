import { getPayload } from 'payload'
import config from '@payload-config'

const BASE = process.env.NEXT_PUBLIC_ASSETS_BASE_URL ?? 'https://dlsxqwz0ptmx4.cloudfront.net'

const COLABORADORES_SECTIONS = [
    {
        blockType: 'colaboradoresCoverpage' as const,
        title: 'El origen de un oasis en la ciudad',
        subtitle: 'Una visión respaldada por experiencia, diseño y compromiso.',
        coverSrc: `${BASE}/collaborators/tower-frontal-view.webp`,
        coverAlt: 'Frontal tower',
        coverBlurData: 'data:image/webp;base64,UklGRqoAAABXRUJQVlA4IJ4AAADwBACdASoUABIAPm0wkkckIqGhKAqogA2JZwCw7AyF/c+z3up/Q+br+/UohlAJ7AAA/uo6qt3GIQ/X766Als2+lc/f/8+69m8HKkK1fvu2uVZqFh46Zu2UV68I+MElH5Q50WZGV2EGFraYbZfZxFZQPPLsthzwt7idEcLsP5KRPPOhgxKNOTbP/HrUzdQg2ShUUG1jnByxypMAK0AAAA==',
    },
    {
        blockType: 'colaboradoresList' as const,
        collaborators: [
            {
                name: 'ONE DEVELOPMENT GROUP',
                description: 'Empresa mexicana dedicada a crear espacios inmobiliarios de nueva generación y experiencias memorables que transforman la forma de vivir, trabajar y convivir. \n\n En cada proyecto, ONE prioriza generar un impacto positivo en residentes, usuarios, visitantes, inversionistas y en la comunidad que rodea cada desarrollo. \n\n Entre sus proyectos más destacados se encuentran SOFIA, Arboleda, El Gran Ancira y GALA en Nuevo León, así como NAYA y NAYAMĀ en el estado de Nayarit, y ALISIA en Jalisco.',
                imageSrc: `${BASE}/collaborators/one_development_group.webp`,
                imageAlt: 'One development group',
                imageBlurData: 'data:image/webp;base64,UklGRn4AAABXRUJQVlA4IHIAAACwAwCdASoUAA0APm0skkWkIqGYBABABsSygFYAChji5auGyC9aYAD+7m39pHgEYqp83oyhAwkB1OR99URbSCY8UV1xDk9znUKqxdFhdKcUCh+vTo8VAZtgDTMRGFQHgzmc65Yy7HBuIdQd/Nh3g+gYAAA=',
                logoSrc: '/assets/images/collaborators/odg.svg',
            },
            {
                name: 'JSA',
                description: 'Taller arquitectónico mexicano liderado por la visión de Javier Sánchez, cuya práctica se basa en procesos colectivos y estrategias de convivencia a distintas escalas. \n\n Su trabajo se ha consolidado a través de proyectos como Pujol, Hotel Carlota y The Cape en Los Cabos, creando espacios que dialogan de manera orgánica con su entorno. \n\n JSA entiende la arquitectura como un ciclo continuo de aprendizaje, investigación y aproximación urbana, donde cada proyecto se convierte en una propuesta de valor para clientes y usuarios.',
                imageSrc: `${BASE}/collaborators/jsa.webp`,
                imageAlt: 'JSA',
                imageBlurData: 'data:image/webp;base64,UklGRoQAAABXRUJQVlA4IHgAAABwBACdASoUAAsAPm0qkUWkIqGYBABABsSzAE6ZQjuEgAA10JJXvIBeM30dQAD+6UklllissmEHWFE03lydK6MNJpEWgnyp3Xynr2DwE1AJVdnxQeq0aF8qkK2o/7okE26vrQvhnFPA8al1p0EHKhFnRQ4jIERIAAA=',
                logoSrc: '/assets/images/collaborators/jsa.svg',
            },
            {
                name: 'ESRAWE',
                description: 'Es un taller multidisciplinario de diseño con sede en la Ciudad de México, especializado en mobiliario, interiorismo y soluciones arquitectónicas para proyectos residenciales, culturales y de hospitalidad. \n\n Su trabajo se distingue por una visión sofisticada que combina precisión técnica, sensibilidad estética y una profunda conexión con el contexto. \n\n A través de un proceso meticuloso y colaborativo, el estudio transforma cada proyecto en una experiencia coherente, innovadora y atemporal.',
                imageSrc: `${BASE}/collaborators/esrawe.webp`,
                imageAlt: 'Esrawe',
                imageBlurData: 'data:image/webp;base64,UklGRuoAAABXRUJQVlA4IN4AAACQBgCdASoUAB4APm0skEWkIqGYDAYAQAbEoAnTKEgC+mknk4K5cs5ViH0wPSKyvAax7fCtmP2JIumON6xAAP7o/uL8qfWXVkEYkyytXLEr7NXjnnVTYVJqybI5ggwuLR2hz9RY6KYt+0IKrTh3/XvR0+H9CvB515kW/XNgIpGftTKniAC6BfA2dG8nVSj6EFzb1UG+VOggl/JzvqVV0rRZhAC3Iki7ASUqkHfsjuF6DXcNfx63DpKIpA6x0PFAb/mbK8lQeJFA2kYxsd5gFg5CZrfTHRuQZ2sEawGYAAA=',
                logoSrc: '/assets/images/collaborators/esrawe.svg',
            },
        ],
    },
    {
        blockType: 'brochure' as const,
        title: '',
        description: 'Conoce todos los detalles detrás del proyecto.',
    },
    {
        blockType: 'appointment' as const,
        title: 'Vive la experiencia EMANA',
        description: 'Conoce nuestro showroom',
        coverImage: `${BASE}/collaborators/emana-experience.webp`,
        blurDataURL: 'data:image/webp;base64,UklGRsIAAABXRUJQVlA4ILYAAADwBQCdASoUACQAPm0ukkWkIqGVXAb8QAbEtIvAABpRgGL/3Utl9FqPPlyNitWWdppN6uJcCsaC0AD+x1NJ2BQasB58pAJCSRyjL1Q38Xuo4epCn0b9U9aekt9J6Xl33J+Xh4b7hfh9CvKimuhQsT49DE5VZUBROoM4ubla4juP64Q0FLAy1el4ecyX3xdr63WRKNn8kd9bMlL9OH7oJx5R7THdO+tnSy6aeuRjppjtoHiQDMAAAA==',
    },
]

async function main() {
    const payload = await getPayload({ config })

    const { docs } = await payload.find({
        collection: 'page-content',
        where: { pageType: { equals: 'colaboradores' } },
    })

    if (docs.length) {
        await payload.update({
            collection: 'page-content',
            id: docs[0].id,
            data: { colaboradoresSections: COLABORADORES_SECTIONS },
        })
        console.log('✓ Documento colaboradores actualizado correctamente')
    } else {
        await payload.create({
            collection: 'page-content',
            data: {
                pageType: 'colaboradores',
                colaboradoresSections: COLABORADORES_SECTIONS,
            },
        })
        console.log('✓ Documento colaboradores creado correctamente')
    }

    process.exit(0)
}

main().catch((err) => {
    console.error(err)
    process.exit(1)
})
