// Next.js
import Image from 'next/image'

// Styles
import styles from './residencias.module.css'

// Components
import {
    ApartmentSection,
    BrochureSection,
    FeaturesSection,
    PropertyTypeSection,
    ResidencesHeroSection,
    UnitsAvailable,
    VillasSection
} from './presentation/components'
import { AppointmentSection } from '@/app/components'

// Assets
import PanoramicPhoto from '@assets/images/residences-page/panoramic_photo.png'
import AppoimentSection from '@assets/images/residences-page/appoiment-section.png'
import Coverpage from '@assets/images/residences-page/coverpage.png'
export default function Residences() {
    return (
        <main className={styles.main}>
            <div className={styles.coverpage}>
                <Image className={styles.coverpage__image} src={Coverpage} alt={'Cover page'} fill />
                Amenidades que aman bienestar
            </div>
            <FeaturesSection />
            <PropertyTypeSection />
            <ApartmentSection />
            <VillasSection />
            <div className={styles.panoramic__photo}>
                <Image
                    className={styles.panoramic__photo__image}
                    src={PanoramicPhoto}
                    alt={'Panoramic view of residences'}
                    objectFit='cover'
                />
            </div>
            <ResidencesHeroSection />
            <UnitsAvailable />
            <div className={styles.main__axis__divisor} />
            <BrochureSection />
            <AppointmentSection
                title={'Vive la experiencia EMANA'}
                description={'Visita nuestro showroom y conoce el futuro de tu inversión.'}
                coverImage={AppoimentSection}
            />
        </main>
    )
}
