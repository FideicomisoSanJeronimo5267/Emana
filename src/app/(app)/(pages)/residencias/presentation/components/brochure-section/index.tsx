// Styles 
import styles from './brochure-section.module.css'
import BrochureButton from './brochure-button';

interface BrochureSectionProps {
    title: string;
    description?: string;
    titleFont?: 'gilroy' | 'neue-machina'; 
}
export default function BrochureSection(props: BrochureSectionProps) {
    const fontClass = props.titleFont === 'gilroy' ? styles.font__gilroy : '';
    return (
        <section className={styles.brochure__section}>
            <div className={styles.brochure__section__info}>
                <h2 className={`${styles.brochure__section__info__title} ${fontClass}`.trim()}>
                    {props.title}
                </h2>
                <h2 className={`${styles.brochure__section__info__title__mobile} ${fontClass}`.trim()}>
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
            <BrochureButton />
        </section>
    )
}