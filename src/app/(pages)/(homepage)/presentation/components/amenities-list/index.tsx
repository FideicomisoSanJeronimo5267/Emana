"use client";

// Styles
import styles from './amenities-list.module.css';

// Stores
import { useAmenitieSelectedStore } from '../../stores/amenitie-selected.store';

// Intefaces and Enums
import { Amenities } from '../../enums/amenities';

export default function AmenitiesList() {
    const currentAmenity = useAmenitieSelectedStore((state) => state.currentAmenitie);
    const setCurrentAmenity = useAmenitieSelectedStore((state) => state.setCurrentAmenitie);
    return (
        <ul className={styles.wrapper__amenities__list}>
            <li className={styles.wrapper__amenities__list__item}>
                <button
                    className={`${styles.wrapper__amenities__list__item__button} ${currentAmenity === Amenities.SKYPOOL ? styles.wrapper__amenities__list__item__button__active : ''}`}
                    onClick={() => {
                        setCurrentAmenity(Amenities.SKYPOOL)
                    }}
                >
                    Sky Pool
                </button>
            </li>
            <li className={styles.wrapper__amenities__list__item}>

                <button
                    className={`${styles.wrapper__amenities__list__item__button} ${currentAmenity === Amenities.GRILLDECK ? styles.wrapper__amenities__list__item__button__active : ''}`}
                    onClick={() => {
                        setCurrentAmenity(Amenities.GRILLDECK)
                    }}
                >
                    Grill Deck
                </button>
            </li>
            <li className={styles.wrapper__amenities__list__item}>
                <button
                    className={`${styles.wrapper__amenities__list__item__button} ${currentAmenity === Amenities.BUSINESSCENTER ? styles.wrapper__amenities__list__item__button__active : ''}`}
                    onClick={() => {
                        setCurrentAmenity(Amenities.BUSINESSCENTER)
                    }}
                >
                    Business Center
                </button>
            </li>
            <li className={styles.wrapper__amenities__list__item}>
                <button
                    className={`${styles.wrapper__amenities__list__item__button} ${currentAmenity === Amenities.POOL ? styles.wrapper__amenities__list__item__button__active : ''}`}
                    onClick={() => {
                        setCurrentAmenity(Amenities.POOL)
                    }}
                >
                    Alberca
                </button>
            </li>
        </ul>
    )
}