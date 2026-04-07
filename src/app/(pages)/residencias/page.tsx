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
import CoverPageV2 from '../../components/coverpage-v2'

export default function Residences() {
    return (
        <main className={styles.main}>
            <CoverPageV2
                title={
                    'Residencias para habitar\ncon propósito'
                }
                subtitle={
                    'Departamentos y villas que emanan\nequilibrio, funcionalidad y diseño.'
                }
                button={{
                    title: 'Conoce tu nuevo hogar',
                    href: '/contacto'
                }}
                coverImage={{
                    alt: 'Cover Image',
                    src: residencesImagesdata.coverpage.src,
                    blurData: residencesImagesdata.coverpage.blurData
                }}
            />
            <FeaturesSection />
            {/* <PropertyTypeSection /> */}
            <ApartmentSection />
            <VillasSection />
            <div className={styles.panoramic__photo}>
                <Image
                    className={styles.panoramic__photo__image}
                    src={residencesImagesdata.socialArea.src}
                    alt={residencesImagesdata.socialArea.alt}
                    placeholder={"blur"}
                    blurDataURL={residencesImagesdata.socialArea.blurData}

                    fill
                />
            </div>
            <ResidencesHeroSection />
            <UnitsAvailable
                title='Conoce las unidades disponibles'
                button={{
                    title: 'Agenda una cita'
                }}
            />
            <div className={styles.main__axis__divisor} />
            <BrochureSection
                title='Descubre más sobre EMANA'
            />
            <AppointmentSection
                title={'Vive la experiencia EMANA'}
                description={'Visita nuestro showroom y conoce el futuro de tu inversión.'}
                coverImage={residencesImagesdata.appointmentBG.src}
                blurDataURL={residencesImagesdata.appointmentBG.blurData}
            />
        </main>
    )
}
