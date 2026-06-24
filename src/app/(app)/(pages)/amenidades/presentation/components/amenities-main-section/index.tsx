import Image from 'next/image';
import LazyAnimation from '@/src/app/(app)/components/lazy-animation';
import styles from '../../../amenidades.module.css';

interface AmenityCardData {
    title?: string | null;
    description?: string | null;
    imageSrc?: string | null;
    imageAlt?: string | null;
    imageBlurData?: string | null;
    applyGrillDeckZoom?: boolean | null;
    id?: string | null;
}

interface AmenitiesMainSectionProps {
    amenities?: AmenityCardData[] | null;
}

export default function AmenitiesMainSection({ amenities }: AmenitiesMainSectionProps) {
    const items = amenities ?? [];
    return (
        <section className={styles.container}>
            {items.map((amenity, index) => (
                <LazyAnimation key={amenity.id ?? index}>
                    <article className={`${styles.card} ${index % 2 !== 0 ? styles.reverse : ''}`}>
                        <div className={styles.imageWrapper} style={{ position: 'relative' }}>
                            <Image
                                src={amenity.imageSrc ?? ''}
                                alt={amenity.imageAlt ?? ''}
                                fill
                                className={`${styles.image} ${amenity.applyGrillDeckZoom ? styles.grillDeckDrasticZoom : ''}`}
                                placeholder="blur"
                                blurDataURL={amenity.imageBlurData ?? ''}
                                sizes="(max-width: 1024px) 100vw, 928px"
                            />
                        </div>
                        <div className={styles.textWrapper}>
                            <div className={styles.titleContainer}>
                                <h2 className={styles.title}>{amenity.title}</h2>
                            </div>
                            <div className={styles.descriptionContainer}>
                                <p className={styles.description}>{amenity.description}</p>
                            </div>
                        </div>
                    </article>
                </LazyAnimation>
            ))}
        </section>
    );
}
