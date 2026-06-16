// Styles

// Assets
import styles from './residence-hero-section.module.css'
import Image from 'next/image'
import { residencesImagesdata } from '@/src/core/constants/image-data/residences-page'
export default function ResidencesHeroSection() {
    return (
        <section className={styles.hero__section}>
            <div className={styles.hero__content}>
                <h2 className={styles.hero__content__title}>
                    Así se ve tu oasis dentro de la ciudad
                </h2>
                <p className={styles.hero__content__description}>
                    El equilibrio perfecto entre diseño, privacidad y bienestar.
                </p>
            </div>
            <Image
                className={styles.hero__bg}
                src={residencesImagesdata.socialAreaV3.src}
                alt={residencesImagesdata.socialAreaV3.alt}
                placeholder={"blur"}
                blurDataURL={residencesImagesdata.socialAreaV3.blurData}
                fill
            />
            <div className={styles.overlay}/>

        </section>
    )
}