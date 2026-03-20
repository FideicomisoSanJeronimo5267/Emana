// Styles 
import Button from '@/src/app/components/button'
import styles from './brochure-section.module.css'
export default function BrochureSection() {
    return (
        <section className={styles.brochure__section}>
            <div className={styles.brochure__section__info}>
                <h2 className={styles.brochure__section__info__title}>
                    Conoce más sobre EMANA
                </h2>
                <h2 className={styles.brochure__section__info__title__mobile}>
                    Descubre más sobre EMANA
                </h2>
                
                <p className={styles.brochure__section__info__description}>
                    Descubre cómo el diseño, la ubicación y las amenidades del proyecto se unen para crear una experiencia residencial única.
                </p>
            </div>
            <Button>
                Descargar brochure
            </Button>
        </section>
    )
}