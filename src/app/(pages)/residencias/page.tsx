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
import LazyAnimation from '../../components/lazy-animation'

export default function Residences() {
    return (
        <main className={styles.main}>
            <CoverPageV2
                title={{
                    text: 'Residencias para habitar con propósito',
                    className: styles.coverTitle
                }}
                subtitle={{
                    className: styles.coverDescription,
                    text: 'Departamentos y villas que emanan equilibrio, funcionalidad y diseño.'
                }}
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
            <LazyAnimation>
                <FeaturesSection />
            </LazyAnimation>
            <PropertyTypeSection /> 
            <LazyAnimation>
                <ApartmentSection />
            </LazyAnimation>
            <LazyAnimation>
                <VillasSection />
            </LazyAnimation>
            <LazyAnimation>
                <ResidencesHeroSection />
            </LazyAnimation>
            <LazyAnimation>
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
            </LazyAnimation>
            <LazyAnimation>
                <UnitsAvailable
                    title='Conoce las unidades disponibles'
                    button={{
                        title: 'Agenda una cita'
                    }}
                />
            </LazyAnimation>
            <div className={styles.main__axis__divisor} />
            <LazyAnimation>
                <BrochureSection
                    title='Descubre más sobre EMANA'
                />
            </LazyAnimation>
            <LazyAnimation>
                <AppointmentSection
                    title={'Vive la experiencia EMANA'}
                    description={'Visita nuestro showroom y conoce el futuro de tu inversión.'}
                    coverImage={residencesImagesdata.appointmentBG.src}
                    blurDataURL={residencesImagesdata.appointmentBG.blurData}
                />
            </LazyAnimation>
        </main>
    )
}
