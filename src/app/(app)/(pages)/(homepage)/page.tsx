
// Styles
import styles from './home-page.module.css'

// Components
import { AmenitiesSection, FeaturesSection, LocationSection, OasisSection } from './presentation/components';
import { BrochureSection, UnitsAvailable } from '../residencias/presentation/components';
import { AppointmentSection } from '../../components';
import { homepageImagesdata } from '@/src/core/constants/image-data/home-page';
import CoverPage from '../../components/coverpage';
import LazyAnimation from '../../components/lazy-animation';

export default function Home() {
  return (
    <main className={styles.main}>
      <CoverPage
        coverImage={{
          alt: 'Cover Image',
          src: homepageImagesdata.coverpage.src,
          blurData: homepageImagesdata.coverpage.blurData
        }}
      />

      <LazyAnimation>
        <OasisSection />
      </LazyAnimation>
      <LazyAnimation>
        <FeaturesSection />
      </LazyAnimation>
      <div className={styles.main__axis__divisor} />
      <LazyAnimation>
        <LocationSection />
      </LazyAnimation>
      <LazyAnimation>
        <AmenitiesSection />
      </LazyAnimation>
      <LazyAnimation>
        <UnitsAvailable
          title='Desde $8.9 MDP*'
          button={{
            title: 'Agenda una cita',
          }}
          headerDescription='Departamentos y villas de lujo'
          footerDescription='*Sujeto a disponibilidad y cambios sin previo aviso.'
        />
      </LazyAnimation>
      <div className={styles.main__axis__divisor} />
      <LazyAnimation>
        <BrochureSection
          title='Conoce más sobre EMANA'
          description='Descubre cómo el diseño, la ubicación y las amenidades del proyecto se unen para crear una experiencia residencial única.'
          titleFont='gilroy'
        />
      </LazyAnimation>
      <LazyAnimation>
        <AppointmentSection
          title={'Vive la experiencia EMANA'}
          description={'Visita nuestro showroom y conoce el futuro de tu inversión.'}
          coverImage={homepageImagesdata.emanaExperience.src}
          blurDataURL={homepageImagesdata.emanaExperience.blurData}
        />
      </LazyAnimation>
    </main>
  );
}
