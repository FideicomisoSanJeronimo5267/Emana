import Image from 'next/image';
import styles from './location-section.module.css'

interface LocationSectionProps {
    coverSrc: string;
    coverAlt: string;
    coverBlurData: string;
    title: string;
    description: string;
    importantLocations?: {
        icon?: string | null;
        description?: string | null;
        id?: string | null;
    }[] | null;
}

export default function LocationSection({
    coverSrc,
    coverAlt,
    coverBlurData,
    title,
    description,
    importantLocations,
}: LocationSectionProps) {
    return (
        <section className={styles.wrapper}>
            <div className={styles.wrapper__cover}>
                <Image
                    className={styles.wrapper__cover__image}
                    src={coverSrc}
                    alt={coverAlt}
                    blurDataURL={coverBlurData}
                    placeholder="blur"
                    objectFit="cover"
                    fill
                />
            </div>
            <div className={styles.wrapper__content}>
                <h2 className={styles.wrapper__content__title}>
                    {title}
                </h2>
                <p
                    className={styles.wrapper__content__description}
                    dangerouslySetInnerHTML={{ __html: description }}
                />

                <ul className={styles.wrapper__content__important_locations__list}>
                    {importantLocations?.map((location) => (
                        <li key={location.id} className={styles.wrapper__content__important_locations__list__item}>
                            {location.icon && (
                                <span dangerouslySetInnerHTML={{ __html: location.icon }} />
                            )}
                            <span>{location.description}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
