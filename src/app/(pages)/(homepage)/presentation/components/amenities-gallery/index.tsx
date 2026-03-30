"use client"

// Next.js imports
import Image from "next/image";

// Styles
import styles from './amenities-gallery.module.css'
import { residencesImagesdata } from "@/src/core/constants/image-data/residences-page";
import { useAmenitieSelectedStore } from "../../stores/amenitie-selected.store";

// Constants & Store


export default function AmenitiesGallery() {
    const currentAmenity = useAmenitieSelectedStore((state) => state.currentAmenitie);

    const GALLERY_IMAGES = {
        SKYPOOL: residencesImagesdata.apartmentsBG,
        GRILLDECK: residencesImagesdata.bedroom,
        BUSINESSCENTER: residencesImagesdata.apartmentsBG,
        POOL: residencesImagesdata.apartmentsBG,
    } as const

    return (
        <div className={styles.container}>
            {Object.entries(GALLERY_IMAGES).map(([key, image]) => {
                const isActive = currentAmenity === key
                return (
                    <Image
                        key={key}
                        className={`${styles.image} ${isActive ? styles.active : ""}`}
                        src={image.src}
                        alt={image.alt}
                        fill
                        placeholder="blur"
                        blurDataURL={image.blurData}
                        sizes="100vw"
                        loading="lazy"
                    />
                )
            })}
        </div>
    )
}