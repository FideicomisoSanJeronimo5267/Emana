import Image from 'next/image'
import styles from './apartment-section.module.css'

import { residencesImagesdata } from '@/src/core/constants/image-data/residences-page'

const ICONS = [
    <svg key={0} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_323_1847a" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect width="24" height="24" fill="#D9D9D9" /></mask><g mask="url(#mask0_323_1847a)"><path d="M19 8.923V5H15.077V4H20V8.923H19ZM4 20V15.077H5V19H8.923V20H4ZM4 12.6155V11.3845H5.23075V12.6155H4ZM4 8.923V7.69225H5.23075V8.923H4ZM4 5.23075V4H5.23075V5.23075H4ZM7.69225 5.23075V4H8.923V5.23075H7.69225ZM11.3845 20V18.7693H12.6155V20H11.3845ZM11.3845 5.23075V4H12.6155V5.23075H11.3845ZM15.077 20V18.7693H16.3077V20H15.077ZM18.7693 20V18.7693H20V20H18.7693ZM18.7693 16.3077V15.077H20V16.3077H18.7693ZM18.7693 12.6155V11.3845H20V12.6155H18.7693Z" fill="#95978C" /></g></svg>,
    <svg key={1} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_323_1852a" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect width="24" height="24" fill="#D9D9D9" /></mask><g mask="url(#mask0_323_1852a)"><path d="M3 18V13C3 12.7038 3.08525 12.3884 3.25575 12.0538C3.42625 11.7193 3.67433 11.468 4 11.3V9C4 8.43583 4.19233 7.9615 4.577 7.577C4.9615 7.19233 5.43583 7 6 7H10.5C10.8448 7 11.1391 7.07083 11.3828 7.2125C11.6263 7.35417 11.832 7.55 12 7.8C12.168 7.55 12.3738 7.35417 12.6173 7.2125C12.8609 7.07083 13.1552 7 13.5 7H18C18.5642 7 19.0385 7.19233 19.423 7.577C19.8077 7.9615 20 8.43583 20 9V11.3C20.3257 11.468 20.5738 11.7193 20.7443 12.0538C20.9148 12.3884 21 12.7038 21 13V18H20V16H4V18H3ZM12.5 11H19V9C19 8.71667 18.9042 8.47917 18.7125 8.2875C18.5208 8.09583 18.2833 8 18 8H13.5C13.2167 8 12.9792 8.09583 12.7875 8.2875C12.5958 8.47917 12.5 8.71667 12.5 9V11ZM5 11H11.5V9C11.5 8.71667 11.4042 8.47917 11.2125 8.2875C11.0208 8.09583 10.7833 8 10.5 8H6C5.71667 8 5.47917 8.09583 5.2875 8.2875C5.09583 8.47917 5 8.71667 5 9V11ZM4 15H20V13C20 12.7167 19.9042 12.4792 19.7125 12.2875C19.5208 12.0958 19.2833 12 19 12H5C4.71667 12 4.47917 12.0958 4.2875 12.2875C4.09583 12.4792 4 12.7167 4 13V15Z" fill="#95978C" /></g></svg>,
    <svg key={2} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_323_1857a" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect width="24" height="24" fill="#D9D9D9" /></mask><g mask="url(#mask0_323_1857a)"><path d="M12.019 21L3.98053 13.1L8.38428 7.76925H15.6343L20.0383 13.1L12.019 21ZM5.45928 7.25L3.48828 5.298L4.20178 4.5905L6.17278 6.54225L5.45928 7.25ZM11.519 5.76925V3H12.519V5.76925H11.519ZM18.5285 7.25L17.8343 6.5365L19.7863 4.5845L20.4998 5.298L18.5285 7.25ZM12.019 19.6038L18.192 13.5385H5.82678L12.019 19.6038ZM8.85353 8.76925L5.72478 12.5385H18.294L15.1653 8.76925H8.85353Z" fill="#95978C" /></g></svg>,
    <svg key={3} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_323_1872a" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect width="24" height="24" fill="#D9D9D9" /></mask><g mask="url(#mask0_323_1872a)"><path d="M2.1499 19L5.02615 13.4808C5.16499 13.2141 5.35899 13.0032 5.60815 12.848C5.85715 12.693 6.13649 12.6155 6.44615 12.6155C6.76915 12.6155 7.0659 12.6996 7.3364 12.8677C7.60707 13.0361 7.80324 13.275 7.9249 13.5845L8.44615 14.8115C8.56915 15.0782 8.7984 15.2005 9.1339 15.1785C9.46924 15.1563 9.68482 15.0128 9.78065 14.748L11.8729 8.073C12.0806 7.414 12.4656 6.89092 13.0279 6.50375C13.5901 6.11658 14.2133 5.923 14.8977 5.923C15.5683 5.923 16.1828 6.11242 16.7412 6.49125C17.2995 6.87008 17.6845 7.37875 17.8962 8.01725L21.8749 19H20.8269L16.9384 8.3345C16.7922 7.88717 16.5294 7.54008 16.1499 7.29325C15.7704 7.04642 15.3506 6.923 14.8904 6.923C14.4301 6.923 14.0092 7.05058 13.6279 7.30575C13.2464 7.56092 12.9826 7.91217 12.8364 8.3595L10.7442 15.0345C10.6198 15.3858 10.4099 15.6698 10.1144 15.8865C9.8189 16.1032 9.48274 16.2115 9.1059 16.2115C8.76674 16.2115 8.45274 16.1228 8.1639 15.9453C7.87507 15.7676 7.66015 15.5198 7.51915 15.202L6.9594 13.8595C6.8569 13.6417 6.68065 13.5295 6.43065 13.523C6.18065 13.5167 5.99799 13.6225 5.88265 13.8405L3.2404 19H2.1499ZM6.47965 9.923C5.80082 9.923 5.21782 9.68075 4.73065 9.19625C4.24349 8.71158 3.9999 8.13483 3.9999 7.466C3.9999 6.7835 4.24349 6.20192 4.73065 5.72125C5.21782 5.24042 5.80082 5 6.47965 5C7.15832 5 7.73524 5.23992 8.2104 5.71975C8.6854 6.19942 8.9229 6.782 8.9229 7.4675C8.9229 8.13917 8.6854 8.71633 8.2104 9.199C7.73524 9.68167 7.15832 9.923 6.47965 9.923ZM6.47765 8.923C6.88715 8.923 7.2304 8.77908 7.5074 8.49125C7.7844 8.20342 7.9229 7.857 7.9229 7.452C7.9229 7.04683 7.7844 6.7035 7.5074 6.422C7.2304 6.14067 6.88715 6 6.47765 6C6.06815 6 5.71949 6.14008 5.43165 6.42025C5.14382 6.70042 4.9999 7.0475 4.9999 7.4615C4.9999 7.86017 5.14382 8.20342 5.43165 8.49125C5.71949 8.77908 6.06815 8.923 6.47765 8.923Z" fill="#95978C" /></g></svg>,
    <svg key={4} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_323_1862a" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect width="24" height="24" fill="#D9D9D9" /></mask><g mask="url(#mask0_323_1862a)"><path d="M11.5 21.5V16.6578L7.75 20.3577L7.04225 19.65L11.5 15.1923V12.5H8.80775L4.35 16.9578L3.64225 16.25L7.34225 12.5H2.5V11.5H7.34225L3.64225 7.75L4.35 7.04225L8.80775 11.5H11.5V8.80775L7.04225 4.35L7.75 3.64225L11.5 7.34225V2.5H12.5V7.34225L16.25 3.64225L16.9578 4.35L12.5 8.80775V11.5H15.1923L19.65 7.04225L20.3577 7.75L16.6578 11.5H21.5V12.5H16.6578L20.3577 16.25L19.65 16.9578L15.1923 12.5H12.5V15.1923L16.9578 19.65L16.25 20.3577L12.5 16.6578V21.5H11.5Z" fill="#95978C" /></g></svg>,
    <svg key={5} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_323_1867a" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect width="24" height="24" fill="#D9D9D9" /></mask><g mask="url(#mask0_323_1867a)"><path d="M5.23075 18V19.5C5.23075 19.6417 5.18283 19.7604 5.087 19.8562C4.99117 19.9521 4.87242 20 4.73075 20H4.5C4.35833 20 4.23958 19.9521 4.14375 19.8562C4.04792 19.7604 4 19.6417 4 19.5V12.1537L5.9845 6.5C6.03333 6.341 6.12725 6.21792 6.26625 6.13075C6.40542 6.04358 6.56025 6 6.73075 6H17.3462C17.4976 6 17.635 6.04583 17.7585 6.1375C17.882 6.22917 17.9677 6.35 18.0155 6.5L20 12.1537V19.5C20 19.6417 19.9521 19.7604 19.8562 19.8562C19.7604 19.9521 19.6417 20 19.5 20H19.2693C19.1276 20 19.0088 19.9521 18.913 19.8562C18.8172 19.7604 18.7693 19.6417 18.7693 19.5V18H5.23075ZM5.4155 11.1538H18.5845L17.1115 7H6.8885L5.4155 11.1538ZM7.4275 15.6923C7.73867 15.6923 8.00158 15.5834 8.21625 15.3658C8.43108 15.1479 8.5385 14.8835 8.5385 14.5725C8.5385 14.2613 8.42958 13.9984 8.21175 13.7838C7.99408 13.5689 7.72967 13.4615 7.4185 13.4615C7.1075 13.4615 6.84458 13.5704 6.62975 13.7882C6.41508 14.0059 6.30775 14.2703 6.30775 14.5815C6.30775 14.8925 6.41658 15.1554 6.63425 15.3702C6.85208 15.5849 7.1165 15.6923 7.4275 15.6923ZM16.5815 15.6923C16.8925 15.6923 17.1554 15.5834 17.3702 15.3658C17.5849 15.1479 17.6923 14.8835 17.6923 14.5725C17.6923 14.2613 17.5834 13.9984 17.3658 13.7838C17.1479 13.5689 16.8835 13.4615 16.5725 13.4615C16.2613 13.4615 15.9984 13.5704 15.7837 13.7882C15.5689 14.0059 15.4615 14.2703 15.4615 14.5815C15.4615 14.8925 15.5704 15.1554 15.7883 15.3702C16.0059 15.5849 16.2703 15.6923 16.5815 15.6923ZM5 17H19V12.1537H5V17Z" fill="#95978C" /></g></svg>,
]

const DEFAULT_FEATURES = [
    'Superficies desde 85 m² hasta 190 m²',
    'Opciones de 2 y 3 recámaras',
    'Acabados premium',
    'Terrazas amplias',
    'Climatización VRF',
    '1 a 3 cajones de estacionamiento por unidad',
]

interface ApartmentSectionProps {
    title?: string | null;
    description?: string | null;
    features?: { text?: string | null; id?: string | null }[] | null;
    imageSrc?: string | null;
    imageAlt?: string | null;
    imageBlurData?: string | null;
}

export default function ApartmentSection({
    title,
    description,
    features,
    imageSrc,
    imageAlt,
    imageBlurData,
}: ApartmentSectionProps = {}) {
    const featureTexts = features?.length ? features.map(f => f.text ?? '') : DEFAULT_FEATURES;
    const src = imageSrc ?? residencesImagesdata.bedroom.src;
    const alt = imageAlt ?? residencesImagesdata.bedroom.alt;
    const blur = imageBlurData ?? residencesImagesdata.bedroom.blurData;

    return (
        <section className={styles.apartment__section}>
            <div className={styles.apartment__section__image}>
                <Image
                    className={styles.apartment__section__cover__image}
                    src={src}
                    alt={alt}
                    blurDataURL={blur}
                    placeholder={"blur"}
                    fill
                />
            </div>
            <div className={styles.apartment__section__apartment__info}>
                <h2 className={styles.apartment__section__apartment__info__title}>
                    {title ?? 'Departamentos'}
                </h2>
                <p className={styles.apartment__section__apartment__info__description}>
                    {description ?? 'Combinan distribución inteligente, acabados premium y vistas inigualables. Cada espacio fue diseñado para aprovechar la luz natural y mantener una sensación constante de amplitud y calma.'}
                </p>
                <ul className={styles.apartment__section__apartment__info__features}>
                    {featureTexts.map((text, i) => (
                        <li key={i} className={styles.apartment__section__apartment__info__features__item}>
                            {ICONS[i]}
                            <span className={styles.apartment__section__apartment__info__features__item__text}>
                                {text}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
