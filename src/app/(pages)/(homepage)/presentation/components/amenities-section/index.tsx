// Next js imports
import Image from 'next/image';

// Styles
import styles from './amenities-section.module.css';

// Assets
import AmenitiesCover from '@assets/images/homepage/amenities-cover.png';

export default function AmenitiesSection() {
    return (
        <section className={styles.wrapper}>
            <div className={styles.wrapper__content}>
                <h2 className={styles.wrapper__content__title}>
                    Amenidades <br /> que emanan bienestar
                </h2>
                <p className={styles.wrapper__content__description}>Espacios caracterizados por brindar tranquilidad y equilibrio.</p>
            </div>

            <div className={styles.wrapper__amenities__cover}>
                <Image className={styles.wrapper__amenities__cover__image} src={AmenitiesCover} alt={'Amenities Cover'}/>
            </div>
        </section>
    )
}