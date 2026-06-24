import styles from './amenidades.module.css';
import { GetPageContentUseCase } from '@/src/core/modules/page-content/application/use-cases/get-page-content-use-case';
import { pageContentFactory } from '@/src/core/modules/page-content/infrastructure/factories/page-content-factory';
import { AmenidadesPageSections } from './presentation/constants/page-sections';
import LazyAnimation from '../../components/lazy-animation';

export default async function AmenitiesPage() {
    const getPageContentUseCase = new GetPageContentUseCase(pageContentFactory());
    const page = await getPageContentUseCase.execute('amenidades');

    if (!page.ok) {
        return (
            <main className={styles.main}>
                <p>There was an error loading the page content. Please try again later.</p>
            </main>
        );
    }

    return (
        <main className={styles.main}>
            {page.value.amenidadesSections?.map((section) => {
                const Component =
                    AmenidadesPageSections[section.blockType as keyof typeof AmenidadesPageSections];
                if (!Component) return null;

                if (section.blockType === 'amenidadesCoverpage') {
                    return <Component key={section.id} {...(section as any)} />;
                }

                return (
                    <LazyAnimation key={section.id}>
                        <Component {...(section as any)} />
                    </LazyAnimation>
                );
            })}
        </main>
    );
}
