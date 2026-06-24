"use client"

import { useAmenitieSelectedStore } from '../../stores/amenitie-selected.store';
import styles from './amenity-description.module.css'

interface AmenityItem {
    description?: string | null
    id?: string | null
}

interface AmenityDescriptionProps {
    amenities: AmenityItem[]
}

export default function AmenityDescription({ amenities }: AmenityDescriptionProps) {
    const currentAmenitieIndex = useAmenitieSelectedStore((state) => state.currentAmenitieIndex);
    const description = amenities[currentAmenitieIndex]?.description ?? ''

    return (
        <div className={styles.wrapper}>
            <span
                className={styles.wrapper__text}
                dangerouslySetInnerHTML={{ __html: description }}
            />
        </div>
    )
}
