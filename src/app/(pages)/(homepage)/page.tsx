//Next JS
import Image from 'next/image';

// Styles
import styles from './home-page.module.css'

//Assets
import coverpage from '@assets/images/homepage/cover-image.png';

// Components
import { AmenitiesSection, FeaturesSection, LocationSection } from './presentation/components';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.coverpage}>
        <Image className={styles.coverImage} src={coverpage} alt={'Cover page image'} fill />
      </div>

      <FeaturesSection />
      <div className={styles.main__axis__divisor} />
      <LocationSection />
      <AmenitiesSection />
    </main>
  );
}
