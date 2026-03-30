// Styles
import styles from './amenities-section.module.css';

// Assets
import AmenitiesList from '../amenities-list';
import AmenitiesGallery from '../amenities-gallery';
import AmenityDescription from '../amenity-description';
import Link from 'next/link';

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


                <Link className={styles.wrapper__amenities__link} href="/amenidades">
                    Ver todas las amenidades
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.0788 7.5H0V6.5H12.0788L6.2865 0.70775L7 0L14 7L7 14L6.2865 13.2923L12.0788 7.5Z" fill="white" />
                    </svg>

                </Link>
            </div>
        </section>
    )
}