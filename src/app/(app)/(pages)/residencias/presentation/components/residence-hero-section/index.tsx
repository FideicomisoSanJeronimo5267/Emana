import styles from './residence-hero-section.module.css'
import Image from 'next/image'
import { residencesImagesdata } from '@/src/core/constants/image-data/residences-page'

interface ResidencesHeroSectionProps {
    title?: string | null;
    description?: string | null;
    bgSrc?: string | null;
    bgAlt?: string | null;
    bgBlurData?: string | null;
}

export default function ResidencesHeroSection({
    title,
    description,
    bgSrc,
    bgAlt,
    bgBlurData,
}: ResidencesHeroSectionProps = {}) {
    return (
        <section className={styles.hero__section}>
            <div className={styles.hero__content}>
                <h2 className={styles.hero__content__title}>
                    {title ?? 'Así se ve tu oasis dentro de la ciudad'}
                </h2>
                <p className={styles.hero__content__description}>
                    {description ?? 'El equilibrio perfecto entre diseño, privacidad y bienestar.'}
                </p>
            </div>
            <Image
                className={styles.hero__bg}
                src={bgSrc ?? residencesImagesdata.socialAreaV3.src}
                alt={bgAlt ?? residencesImagesdata.socialAreaV3.alt}
                placeholder={"blur"}
                blurDataURL={bgBlurData ?? residencesImagesdata.socialAreaV3.blurData}
                fill
            />
            <div className={styles.overlay} />
        </section>
    )
}