import Button from '@/src/app/components/button'
import styles from './brochure-section.module.css'

export default function BrochureSection() {
    return (
        <section className={styles.brochure__section}>
            <div className={styles.brochure__section__info}>
                <h2 className={styles.brochure__section__info__title}>
                    Conoce más sobre nuestras amenidades
                </h2>
                <h2 className={styles.brochure__section__info__title__mobile}>
                    Descubre nuestras amenidades
                </h2>
                
                <p className={styles.brochure__section__info__description}>
                    Planos, amenidades y especificaciones en un PDF.
                </p>
            </div>
            <Button>
                Descargar brochure
            </Button>
        </section>
    )
}