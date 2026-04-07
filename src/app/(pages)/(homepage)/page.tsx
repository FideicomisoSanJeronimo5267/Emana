//Next JS
import Image from 'next/image';

// Styles
import styles from './home-page.module.css'

//Assets
import coverpage from '@assets/images/homepage/cover-image.png';

// Components
import { AmenitiesSection, FeaturesSection, LocationSection } from './presentation/components';
import { BrochureSection, UnitsAvailable } from '../residencias/presentation/components';
import { AppointmentSection } from '../../components';
import { homepageImagesdata } from '@/src/core/constants/image-data/home-page';
import CoverPageV2 from '../../components/coverpage-v2';

export default function Home() {
  return (
    <main className={styles.main}>
      <CoverPageV2
        coverImage={{
          alt: 'Cover Image',
          src: homepageImagesdata.coverpage.src,
          blurData: homepageImagesdata.coverpage.blurData
        }}
      />

      <FeaturesSection />
      <div className={styles.main__axis__divisor} />
      <LocationSection />
      <AmenitiesSection />
      <UnitsAvailable
        title='Desde $8.7 MDP*'
        button={{
          title: 'Agenda una cita'
        }}
        headerDescription='Departamentos y villas de lujo'
        footerDescription='*Sujeto a disponibilidad y cambios sin previo aviso.'
      />
      <div className={styles.main__axis__divisor} />
      <BrochureSection
        title='Conoce más sobre EMANA'
        description='Descubre cómo el diseño, la ubicación y las amenidades del proyecto se unen para crear una experiencia residencial única.'
      />
      <AppointmentSection
        title={'Vive la experiencia EMANA'}
        description={'Visita nuestro showroom y conoce el futuro de tu inversión.'}
        coverImage={homepageImagesdata.emanaExperience.src}
        blurDataURL={homepageImagesdata.emanaExperience.blurData}
      />
    </main>
  );
}
