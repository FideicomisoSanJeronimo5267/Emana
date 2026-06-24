'use client'
import { useState } from 'react'
import Image from 'next/image'
import styles from './property-type-section.module.css'

import { residencesImagesdata } from '@/src/core/constants/image-data/residences-page'

interface PropertyTypeData {
    title?: string | null;
    description?: string | null;
    buttonText?: string | null;
    bgSrc?: string | null;
    bgAlt?: string | null;
    bgBlurData?: string | null;
}

interface PropertyTypeSectionProps {
    apartments?: PropertyTypeData | null;
    villas?: PropertyTypeData | null;
}

export default function PropertyTypeSection({ apartments, villas }: PropertyTypeSectionProps = {}) {
    const [expanded, setExpanded] = useState<'apartments' | 'villas' | null>(null);

    const toggle = (panel: 'apartments' | 'villas') => {
        setExpanded(prev => prev === panel ? null : panel);
    };

    const aptTitle = apartments?.title ?? 'Departamentos';
    const aptDesc = apartments?.description ?? 'De 85 m² a 190 m², con 2 o 3 recámaras, terrazas amplias y distribución funcional que aprovecha cada metro.';
    const aptBtn = apartments?.buttonText ?? 'Ver detalles';
    const aptBgSrc = apartments?.bgSrc ?? residencesImagesdata.apartmentsBG.src;
    const aptBgAlt = apartments?.bgAlt ?? residencesImagesdata.apartmentsBG.alt;
    const aptBgBlur = apartments?.bgBlurData ?? residencesImagesdata.apartmentsBG.blurData;

    const villaTitle = villas?.title ?? 'Villas';
    const villaDesc = villas?.description ?? 'De 155 m² a 228 m², distribuidas en 2 niveles, con dobles alturas y espacios tipo casa dentro de un proyecto vertical.';
    const villaBtn = villas?.buttonText ?? 'Ver detalles';
    const villaBgSrc = villas?.bgSrc ?? residencesImagesdata.villasBG.src;
    const villaBgAlt = villas?.bgAlt ?? residencesImagesdata.villasBG.alt;
    const villaBgBlur = villas?.bgBlurData ?? residencesImagesdata.villasBG.blurData;

    return (
        <div className={styles.property__type}>
            <div className={styles.property__type__apartments} onClick={() => toggle('apartments')}>
                <div className={`${styles.property__type__apartments__text} ${expanded === 'apartments' ? styles.expanded : ''}`}>
                    <h1 className={styles.property__type__apartments__text__title}>{aptTitle}</h1>
                    <p className={styles.property__type__apartments__text__description}>{aptDesc}</p>
                    <button className={styles.property__type__apartments__text__button}>
                        <span>{aptBtn}</span>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.5 16V8.5H0V7.5H7.5V0H8.5V7.5H16V8.5H8.5V16H7.5Z" fill="white" />
                        </svg>
                    </button>
                </div>
                <Image
                    className={styles.property__type__apartments__image}
                    src={aptBgSrc}
                    alt={aptBgAlt}
                    placeholder={"blur"}
                    blurDataURL={aptBgBlur}
                    sizes="(max-width: 1024px) 150vw, 50vw"
                    quality={90}
                    fill
                />
            </div>
            <div className={styles.property__type__villas} onClick={() => toggle('villas')}>
                <div className={`${styles.property__type__villas__text} ${expanded === 'villas' ? styles.expanded : ''}`}>
                    <h1 className={styles.property__type__villas__text__title}>{villaTitle}</h1>
                    <p className={styles.property__type__villas__text__description}>{villaDesc}</p>
                    <button className={styles.property__type__villas__text__button}>
                        <span>{villaBtn}</span>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.5 16V8.5H0V7.5H7.5V0H8.5V7.5H16V8.5H8.5V16H7.5Z" fill="white" />
                        </svg>
                    </button>
                </div>
                <Image
                    className={styles.property__type__villas__image}
                    src={villaBgSrc}
                    alt={villaBgAlt}
                    placeholder={"blur"}
                    blurDataURL={villaBgBlur}
                    sizes="(max-width: 1024px) 180vw, 50vw"
                    quality={90}
                    fill
                />
            </div>
        </div>
    )
}
