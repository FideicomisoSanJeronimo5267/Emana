"use client"

import Image from "next/image";
import styles from './amenities-gallery.module.css'
import { useAmenitieSelectedStore } from "../../stores/amenitie-selected.store";

interface AmenityItem {
    imageSrc?: string | null
    imageAlt?: string | null
    imageBlurData?: string | null
    id?: string | null
}

interface AmenitiesGalleryProps {
    amenities: AmenityItem[]
}

export default function AmenitiesGallery({ amenities }: AmenitiesGalleryProps) {
    const currentAmenitieIndex = useAmenitieSelectedStore((state) => state.currentAmenitieIndex);

    return (
        <div className={styles.container}>
            {amenities.map((amenity, index) => {
                if (!amenity.imageSrc) return null
                const isActive = currentAmenitieIndex === index
                return (
                    <Image
                        key={amenity.id ?? index}
                        className={`${styles.image} ${isActive ? styles.active : ""}`}
                        src={amenity.imageSrc}
                        alt={amenity.imageAlt ?? ''}
                        fill
                        placeholder={amenity.imageBlurData ? "blur" : "empty"}
                        blurDataURL={amenity.imageBlurData ?? undefined}
                        sizes="100vw"
                        loading="lazy"
                    />
                )
            })}
        </div>
    )
}
