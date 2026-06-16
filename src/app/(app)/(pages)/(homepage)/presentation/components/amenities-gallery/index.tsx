"use client"

// Next.js imports
import Image from "next/image";

// Styles
import styles from './amenities-gallery.module.css'

// Constants & Store
import { useAmenitieSelectedStore } from "../../stores/amenitie-selected.store";
import { homepageImagesdata } from "@/src/core/constants/image-data/home-page";


export default function AmenitiesGallery() {
    const currentAmenity = useAmenitieSelectedStore((state) => state.currentAmenitie);

    const GALLERY_IMAGES = {
        SKYPOOL: homepageImagesdata.skyPool,
        GRILLDECK: homepageImagesdata.grillDeck,
        BUSINESSCENTER: homepageImagesdata.businessCenter,
        POOL: homepageImagesdata.pool,
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