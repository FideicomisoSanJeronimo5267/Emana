
// Styles
import styles from './home-page.module.css'

// Components
import LazyAnimation from '../../components/lazy-animation';
import { GetPageContentUseCase } from '@/src/core/modules/page-content/application/use-cases/get-page-content-use-case';
import { pageContentFactory } from '@/src/core/modules/page-content/infrastructure/factories/page-content-factory';
import { PageSections } from './presentation/constants/page-sections';

export default async function Home() {

  const getPageContentUseCase = new GetPageContentUseCase(pageContentFactory());

  const page = await getPageContentUseCase.execute('home');

  if (!page.ok) {
    return (
      <main className={styles.main}>
        <p>There was an error loading the page content. Please try again later.</p>
      </main>
    );
  }

  return (
    <main className={styles.main}>
      {
        page.value.homeSections?.map((section) => {
          const Component =
            PageSections[section.blockType as keyof typeof PageSections];
          if (!Component) return null;

          return (
            <LazyAnimation key={section.id}>
              <Component
                key={section.id}
                {...section as any}
              />
            </LazyAnimation>
          );
        })
      }
    </main>
  );
}
