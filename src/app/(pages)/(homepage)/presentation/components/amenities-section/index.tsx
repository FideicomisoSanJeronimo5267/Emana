// Styles
import styles from './amenities-section.module.css';

// Assets
import AmenitiesList from '../amenities-list';
import AmenitiesGallery from '../amenities-gallery';
import AmenityDescription from '../amenity-description';

export default function AmenitiesSection() {
    return (
        <section className={styles.wrapper}>
            <div className={styles.wrapper__content}>
                <div className={styles.wrapper__content__text}>
                    <h2 className={styles.wrapper__content__title}>
                        Amenidades que emanan bienestar.
                    </h2>
                    <p className={styles.wrapper__content__description}>
                        Espacios caracterizados por brindar tranquilidad y equilibrio.
                    </p>

                </div>

                <div className={styles.amenities__wrapper}>
                    <AmenitiesList />
                    <AmenityDescription />
                </div>

            </div>

            <div className={styles.wrapper__amenities__cover}>
                <AmenitiesGallery />
            </div>
        </section>
    )
}