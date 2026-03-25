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
                    className={`${styles.wrapper__amenities__list__item__button} ${currentAmenity === Amenities.POOL ? styles.wrapper__amenities__list__item__button__active : ''}`}
                    onClick={() => {
                        setCurrentAmenity(Amenities.POOL)
                    }}
                >
                    Alberca
                </button>
            </li>
            <li className={styles.wrapper__amenities__list__item}>

                <button
                    className={`${styles.wrapper__amenities__list__item__button} ${currentAmenity === Amenities.GYM ? styles.wrapper__amenities__list__item__button__active : ''}`}
                    onClick={() => {
                        setCurrentAmenity(Amenities.GYM)
                    }}
                >
                    Gimnasio
                </button>
            </li>
            <li className={styles.wrapper__amenities__list__item}>
                <button
                    className={`${styles.wrapper__amenities__list__item__button} ${currentAmenity === Amenities.TOYLIBRARY ? styles.wrapper__amenities__list__item__button__active : ''}`}
                    onClick={() => {
                        setCurrentAmenity(Amenities.TOYLIBRARY)
                    }}
                >
                    Ludoteca
                </button>
            </li>
            <li className={styles.wrapper__amenities__list__item}>
                <button
                    className={`${styles.wrapper__amenities__list__item__button} ${currentAmenity === Amenities.COWORKING ? styles.wrapper__amenities__list__item__button__active : ''}`}
                    onClick={() => {
                        setCurrentAmenity(Amenities.COWORKING)
                    }}
                >
                    Co-working
                </button>
            </li>
            <li className={styles.wrapper__amenities__list__item}>
                <button
                    className={`${styles.wrapper__amenities__list__item__button} ${currentAmenity === Amenities.ZENZONE ? styles.wrapper__amenities__list__item__button__active : ''}`}
                    onClick={() => {
                        setCurrentAmenity(Amenities.ZENZONE)
                    }}
                >
                    Zen Zone
                </button>
            </li>
            <li className={styles.wrapper__amenities__list__item}>
                <button
                    className={`${styles.wrapper__amenities__list__item__button} ${currentAmenity === Amenities.FIREPITS ? styles.wrapper__amenities__list__item__button__active : ''}`}
                    onClick={() => {
                        setCurrentAmenity(Amenities.FIREPITS)
                    }}
                >
                    Fire Pits
                </button>
            </li>
            <li className={styles.wrapper__amenities__list__item}>
                <button
                    className={`${styles.wrapper__amenities__list__item__button} ${currentAmenity === Amenities.ROOFTOPS ? styles.wrapper__amenities__list__item__button__active : ''}`}
                    onClick={() => {
                        setCurrentAmenity(Amenities.ROOFTOPS)
                    }}
                >
                    Rooftops
                </button>
            </li>
            <li className={styles.wrapper__amenities__list__item}>
                <button
                    className={`${styles.wrapper__amenities__list__item__button} ${currentAmenity === Amenities.HIGHBAR ? styles.wrapper__amenities__list__item__button__active : ''}`}
                    onClick={() => {
                        setCurrentAmenity(Amenities.HIGHBAR)
                    }}
                >
                    High Bar 
                </button>
            </li>
            <li className={styles.wrapper__amenities__list__item}>
                <button
                    className={`${styles.wrapper__amenities__list__item__button} ${currentAmenity === Amenities.SPA ? styles.wrapper__amenities__list__item__button__active : ''}`}
                    onClick={() => {
                        setCurrentAmenity(Amenities.SPA)
                    }}
                >
                    Spa
                </button>
            </li>
        </ul>
    )
}