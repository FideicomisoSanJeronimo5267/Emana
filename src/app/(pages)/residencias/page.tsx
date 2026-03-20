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
import { AppointmentSection } from '@/src/app/components'

import { residencesImagesdata } from '@/src/core/constants/image-data/residences-page'

export default function Residences() {
    return (
        <main className={styles.main}>
            <div className={styles.coverpage}>
                <Image
                    className={styles.coverpage__image}
                    src={residencesImagesdata.coverpage.src}
                    alt={residencesImagesdata.coverpage.alt}
                    placeholder={"blur"}
                    blurDataURL={residencesImagesdata.coverpage.blurData}
                    fill
                    priority
                />
                Amenidades que aman bienestar
            </div>
            <FeaturesSection />
            <PropertyTypeSection />
            <ApartmentSection />
            <VillasSection />
            <div className={styles.panoramic__photo}>
                <Image
                    className={styles.panoramic__photo__image}
                    src={residencesImagesdata.socialArea.src}
                    alt={residencesImagesdata.socialArea.alt}
                    placeholder={"blur"}
                    blurDataURL={residencesImagesdata.socialArea.blurData}
                    objectFit='cover'
                    fill
                />
            </div>
            <ResidencesHeroSection />
            <UnitsAvailable />
            <div className={styles.main__axis__divisor} />
            <BrochureSection />
            <AppointmentSection
                title={'Vive la experiencia EMANA'}
                description={'Visita nuestro showroom y conoce el futuro de tu inversión.'}
                coverImage={residencesImagesdata.appointmentBG.src}
                blurDataURL={residencesImagesdata.appointmentBG.blurData}
            />
        </main>
    )
}
