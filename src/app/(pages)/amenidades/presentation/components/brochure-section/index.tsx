import Button from '@/src/app/components/button'
import styles from './brochure-section.module.css'

export default function BrochureSection() {
    return (
        <section className={styles.brochure__section}>
            <div className={styles.brochure__section__info}>
                <h2 className={styles.brochure__section__info__title}>
                    Conoce más sobre nuestras amenidades
                </h2>
                
                <p className={styles.brochure__section__info__description}>
                    Planos, amenidades y especificaciones en un PDF.
                </p>
            </div>
            <Button className={styles.brochure__button}>
                Descarga el Brochure
                <svg className={styles.brochure__button__icon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 16L7 11L8.4 9.55L11 12.15V4H13V12.15L15.6 9.55L17 11L12 16ZM6 20C5.45 20 4.97917 19.8042 4.5875 19.4125C4.19583 19.0208 4 18.55 4 18V15H6V18H18V15H20V18C20 18.55 19.8042 19.0208 19.4125 19.4125C19.0208 19.8042 18.55 20 18 20H6Z" fill="#676861"/>
                </svg>
            </Button>
        </section>
    )
}