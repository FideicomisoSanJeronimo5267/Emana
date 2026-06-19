import styles from './residencias.module.css'
import LazyAnimation from '../../components/lazy-animation'
import { GetPageContentUseCase } from '@/src/core/modules/page-content/application/use-cases/get-page-content-use-case'
import { pageContentFactory } from '@/src/core/modules/page-content/infrastructure/factories/page-content-factory'
import { ResidenciasPageSections } from './presentation/constants/page-sections'

export default async function Residences() {
    const getPageContentUseCase = new GetPageContentUseCase(pageContentFactory())
    const page = await getPageContentUseCase.execute('residencias')

    if (!page.ok) {
        return (
            <main className={styles.main}>
                <p>There was an error loading the page content. Please try again later.</p>
            </main>
        )
    }

    return (
        <main className={styles.main}>
            {page.value.residenciasSections?.map((section) => {
                const Component = ResidenciasPageSections[section.blockType as keyof typeof ResidenciasPageSections]
                if (!Component) return null
                if (section.blockType === 'residenciasCoverpage') {
                    return <Component key={section.id} {...(section as any)} />
                }
                return (
                    <LazyAnimation key={section.id}>
                        <Component {...(section as any)} />
                    </LazyAnimation>
                )
            })}
        </main>
    )
}
