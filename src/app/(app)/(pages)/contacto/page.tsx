import styles from './contacto.module.css'
import LazyAnimation from '../../components/lazy-animation'
import ContactForm from './components/contact-form'
import ContactoHeaderSection from './presentation/components/header-section'
import { GetPageContentUseCase } from '@/src/core/modules/page-content/application/use-cases/get-page-content-use-case'
import { pageContentFactory } from '@/src/core/modules/page-content/infrastructure/factories/page-content-factory'
import { ContactoPageSections } from './presentation/constants/page-sections'

export default async function ContactPage() {
    const getPageContentUseCase = new GetPageContentUseCase(pageContentFactory())
    const page = await getPageContentUseCase.execute('contacto')

    if (!page.ok) {
        return (
            <main className={styles.main}>
                <p>There was an error loading the page content. Please try again later.</p>
            </main>
        )
    }

    const headerBlock = page.value.contactoSections?.find(s => s.blockType === 'contactoHeader')

    return (
        <main className={styles.main}>
            <div className={styles.content__wrapper}>
                <div className={styles.centered__container}>
                    {headerBlock && <ContactoHeaderSection {...(headerBlock as any)} />}
                    <ContactForm />
                </div>
                {page.value.contactoSections
                    ?.filter(s => s.blockType !== 'contactoHeader')
                    .map((section) => {
                        const Component = ContactoPageSections[section.blockType as keyof typeof ContactoPageSections]
                        if (!Component) return null
                        if (section.blockType === 'appointment') {
                            return (
                                <div key={section.id} className={styles.banner__filter__wrapper}>
                                    <LazyAnimation>
                                        <Component {...(section as any)} />
                                    </LazyAnimation>
                                </div>
                            )
                        }
                        return (
                            <LazyAnimation key={section.id}>
                                <Component {...(section as any)} />
                            </LazyAnimation>
                        )
                    })}
            </div>
        </main>
    )
}
