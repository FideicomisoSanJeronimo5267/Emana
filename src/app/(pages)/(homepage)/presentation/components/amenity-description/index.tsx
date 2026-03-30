"use client"

import { amenitiesDescriptions } from '../../constants/amenities-descriptions';
import { useAmenitieSelectedStore } from '../../stores/amenitie-selected.store';
import styles from './amenity-description.module.css'
type AmenityKey = keyof typeof amenitiesDescriptions;
export default function AmenityDescription() {
    const currentAmenity = useAmenitieSelectedStore((state) => state.currentAmenitie);

    return (
        <div className={styles.wrapper}>
            <span
                className={styles.wrapper__text}
                dangerouslySetInnerHTML={{
                    __html: amenitiesDescriptions[currentAmenity as AmenityKey]
                }}
            />
        </div>
    )
} 