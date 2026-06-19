import AmenitiesGallery from '../amenities-gallery';
import styles from '../../../amenidades.module.css';

interface CMSAmenity {
    title?: string | null;
    description?: string | null;
    galleryDescription?: string | null;
    imageSrc?: string | null;
    imageAlt?: string | null;
    imageBlurData?: string | null;
    galleryImageSrc?: string | null;
    galleryImageAlt?: string | null;
    galleryImageBlurData?: string | null;
    id?: string | null;
}

interface AmenitiesGallerySectionProps {
    amenities?: CMSAmenity[] | null;
}

export default function AmenitiesGallerySection({ amenities }: AmenitiesGallerySectionProps) {
    const amenitiesData = (amenities ?? []).map((a, index) => ({
        id: index + 1,
        title: a.title ?? '',
        description: a.description ?? '',
        galleryDescription: a.galleryDescription ?? undefined,
        imageData: {
            src: a.imageSrc ?? '',
            alt: a.imageAlt ?? '',
            blurData: a.imageBlurData ?? '',
        },
        galleryImageData: a.galleryImageSrc
            ? {
                src: a.galleryImageSrc,
                alt: a.galleryImageAlt ?? '',
                blurData: a.galleryImageBlurData ?? '',
            }
            : undefined,
    }));

    return (
        <section className={styles.gallerySection}>
            <AmenitiesGallery amenitiesData={amenitiesData} />
        </section>
    );
}
