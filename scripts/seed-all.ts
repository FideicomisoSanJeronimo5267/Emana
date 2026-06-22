import { getPayload } from 'payload'
import config from '@payload-config'
import { execSync } from 'child_process'

const PAGE_TYPES = ['home', 'amenidades', 'residencias', 'colaboradores', 'contacto']

const SEEDS = [
    'seed:home-page',
    'seed:amenidades-page',
    'seed:residencias-page',
    'seed:colaboradores-page',
    'seed:contacto-page',
]

async function main() {
    const payload = await getPayload({ config })

    const { totalDocs } = await payload.find({
        collection: 'page-content',
        where: { pageType: { in: PAGE_TYPES } },
        limit: 0,
    })

    if (totalDocs >= PAGE_TYPES.length) {
        console.log('✓ Seeds ya ejecutados. Omitiendo.')
        process.exit(0)
    }

    console.log(`Se encontraron ${totalDocs}/${PAGE_TYPES.length} páginas. Ejecutando seeds...\n`)

    for (const seed of SEEDS) {
        console.log(`▶ ${seed}`)
        execSync(`npm run ${seed}`, { stdio: 'inherit' })
    }

    console.log('\n✓ Todos los seeds completados correctamente')
    process.exit(0)
}

main().catch((err) => {
    console.error(err)
    process.exit(1)
})
