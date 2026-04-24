'use client'
import { useState } from 'react'
import Image from 'next/image'
import styles from './property-type-section.module.css'

import { residencesImagesdata } from '@/src/core/constants/image-data/residences-page'

export default function PropertyTypeSection() {
    const [expanded, setExpanded] = useState<'apartments' | 'villas' | null>(null);

    const toggle = (panel: 'apartments' | 'villas') => {
        setExpanded(prev => prev === panel ? null : panel);
    };

    return (
        <div className={styles.property__type}>
            <div className={styles.property__type__apartments} onClick={() => toggle('apartments')}>
                <div className={`${styles.property__type__apartments__text} ${expanded === 'apartments' ? styles.expanded : ''}`}>
                    <h1 className={styles.property__type__apartments__text__title}>Departamentos</h1>
                    <p className={styles.property__type__apartments__text__description}>De 85 m² a 190 m², con 2 o 3 recámaras, terrazas amplias y distribución funcional que aprovecha cada metro.</p>

                    <button className={styles.property__type__apartments__text__button}>
                        <span>
                            Ver detalles
                        </span>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.5 16V8.5H0V7.5H7.5V0H8.5V7.5H16V8.5H8.5V16H7.5Z" fill="white" />
                        </svg>
                    </button>
                </div>

                <Image
                    className={styles.property__type__apartments__image}
                    src={residencesImagesdata.apartmentsBG.src}
                    alt={residencesImagesdata.apartmentsBG.alt}
                    placeholder={"blur"}
                    blurDataURL={residencesImagesdata.apartmentsBG.blurData}
                    sizes="(max-width: 1024px) 150vw, 50vw"
                    quality={90}
                    fill
                />
            </div>
            <div className={styles.property__type__villas} onClick={() => toggle('villas')}>
                <div className={`${styles.property__type__villas__text} ${expanded === 'villas' ? styles.expanded : ''}`}>
                    <h1 className={styles.property__type__villas__text__title}>Villas</h1>
                    <p className={styles.property__type__villas__text__description}>De 155 m² a 228 m², distribuidas en 2 niveles, con dobles alturas y espacios tipo casa dentro de un proyecto vertical.</p>

                    <button className={styles.property__type__villas__text__button}>
                        <span>
                            Ver detalles
                        </span>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.5 16V8.5H0V7.5H7.5V0H8.5V7.5H16V8.5H8.5V16H7.5Z" fill="white" />
                        </svg>
                    </button>
                </div>
                <Image
                    className={styles.property__type__villas__image}
                    src={residencesImagesdata.villasBG.src}
                    alt={residencesImagesdata.villasBG.alt}
                    placeholder={"blur"}
                    blurDataURL={residencesImagesdata.villasBG.blurData}
                    sizes="(max-width: 1024px) 180vw, 50vw"
                    quality={90}
                    fill
                />
            </div>
        </div>
    )
}