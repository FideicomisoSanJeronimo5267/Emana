
import ContactForm from '@/src/app/(app)/(pages)/contacto/components/contact-form';
import styles from './brochure_modal.module.css';

export default function BrochureModal() {
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>
                Compártenos tu información y recibe el brochure.
            </h2>
            <ContactForm isBrochureModal={true} />
        </div>
    )
}