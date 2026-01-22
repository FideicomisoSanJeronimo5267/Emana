// Styles

// Assets
import HeroBG from '@assets/images/residences-page/hero-bg.png'
import styles from './residence-hero-section.module.css'
import Image from 'next/image'
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
                src={HeroBG}
                alt={'Hero background'}
            />
            <div className={styles.overlay}/>

        </section>
    )
}