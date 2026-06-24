
import BrochureForm from './brochure-form';
import styles from './brochure_modal.module.css';

export default function BrochureModal() {
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>
                Compártenos tu información y recibe el brochure.
            </h2>
            <BrochureForm />
        </div>
    )
}