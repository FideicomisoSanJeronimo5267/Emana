import styles from './amenities-section.module.css';
import AmenitiesList from '../amenities-list';
import AmenitiesGallery from '../amenities-gallery';
import AmenityDescription from '../amenity-description';
import Link from 'next/link';

interface AmenityItem {
    name?: string | null
    description?: string | null
    imageSrc?: string | null
    imageAlt?: string | null
    imageBlurData?: string | null
    id?: string | null
}

interface AmenitiesSectionProps {
    title?: string | null
    description?: string | null
    linkText?: string | null
    amenities?: AmenityItem[] | null
}

export default function AmenitiesSection({ title, description, linkText, amenities }: AmenitiesSectionProps) {
    const items = amenities ?? []

    return (
        <section className={styles.wrapper}>
            <div className={styles.wrapper__content}>
                <div className={styles.wrapper__content__text}>
                    <h2 className={styles.wrapper__content__title}>
                        {title}
                    </h2>
                    <p className={styles.wrapper__content__description}>
                        {description}
                    </p>
                </div>

                <div className={styles.amenities__wrapper}>
                    <AmenitiesList amenities={items} />
                    <AmenityDescription amenities={items} />
                </div>
            </div>

            <div className={styles.wrapper__amenities__cover}>
                <AmenitiesGallery amenities={items} />

                <Link className={styles.wrapper__amenities__link} href="/amenidades">
                    {linkText}
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.0788 7.5H0V6.5H12.0788L6.2865 0.70775L7 0L14 7L7 14L6.2865 13.2923L12.0788 7.5Z" fill="white" />
                    </svg>
                </Link>
            </div>
        </section>
    )
}
