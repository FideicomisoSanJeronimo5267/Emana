// Styles
import styles from './amenities-section.module.css';

// Assets
import AmenitiesList from '../amenities-list';
import AmenitiesGallery from '../amenities-gallery';
// import AmenitiesRedirectButton from '../amenities-redirect-button';

export default function AmenitiesSection() {
    return (
        <section className={styles.wrapper}>
            <div className={styles.wrapper__content}>
                <h2 className={styles.wrapper__content__title}>
                    Amenidades que emanan bienestar.
                </h2>
                <p className={styles.wrapper__content__description}>
                    Espacios caracterizados por brindar tranquilidad y equilibrio.
                </p>

                <AmenitiesList />

                {/* <AmenitiesRedirectButton/> */}
            </div>

            <div className={styles.wrapper__amenities__cover}>
                <AmenitiesGallery />
            </div>
        </section>
    )
}