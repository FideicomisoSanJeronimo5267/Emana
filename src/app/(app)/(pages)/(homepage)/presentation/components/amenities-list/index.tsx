"use client";

import styles from './amenities-list.module.css';
import { useAmenitieSelectedStore } from '../../stores/amenitie-selected.store';

interface AmenityItem {
    name?: string | null
    id?: string | null
}

interface AmenitiesListProps {
    amenities: AmenityItem[]
}

export default function AmenitiesList({ amenities }: AmenitiesListProps) {
    const currentAmenitieIndex = useAmenitieSelectedStore((state) => state.currentAmenitieIndex);
    const setCurrentAmenitieIndex = useAmenitieSelectedStore((state) => state.setCurrentAmenitieIndex);

    return (
        <ul className={styles.wrapper__amenities__list}>
            {amenities.map((amenity, index) => (
                <li key={amenity.id ?? index} className={styles.wrapper__amenities__list__item}>
                    <button
                        className={`${styles.wrapper__amenities__list__item__button} ${currentAmenitieIndex === index ? styles.wrapper__amenities__list__item__button__active : ''}`}
                        onClick={() => setCurrentAmenitieIndex(index)}
                    >
                        {amenity.name}
                    </button>
                </li>
            ))}
        </ul>
    )
}
