// Styles 
import Button from '@/src/app/components/button'
import styles from './brochure-section.module.css'

interface BrochureSectionProps {
    title: string;
    description?: string
}
export default function BrochureSection(props: BrochureSectionProps) {
    return (
        <section className={styles.brochure__section}>
            <div className={styles.brochure__section__info}>
                <h2 className={styles.brochure__section__info__title}>
                    {props.title}
                </h2>
                <h2 className={styles.brochure__section__info__title__mobile}>
                    {props.title}
                </h2>
                {
                    props.description &&
                    (
                        <p className={styles.brochure__section__info__description}>
                            {props.description}
                        </p>
                    )
                }
            </div>
            <Button>
                Descargar brochure
            </Button>
        </section>
    )
}