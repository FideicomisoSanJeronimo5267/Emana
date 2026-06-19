import Image from 'next/image'
import styles from './villas-section.module.css'

import { residencesImagesdata } from '@/src/core/constants/image-data/residences-page'

const ICONS = [
    <svg key={0} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_323_1847v" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect width="24" height="24" fill="#D9D9D9" /></mask><g mask="url(#mask0_323_1847v)"><path d="M19 8.923V5H15.077V4H20V8.923H19ZM4 20V15.077H5V19H8.923V20H4ZM4 12.6155V11.3845H5.23075V12.6155H4ZM4 8.923V7.69225H5.23075V8.923H4ZM4 5.23075V4H5.23075V5.23075H4ZM7.69225 5.23075V4H8.923V5.23075H7.69225ZM11.3845 20V18.7693H12.6155V20H11.3845ZM11.3845 5.23075V4H12.6155V5.23075H11.3845ZM15.077 20V18.7693H16.3077V20H15.077ZM18.7693 20V18.7693H20V20H18.7693ZM18.7693 16.3077V15.077H20V16.3077H18.7693ZM18.7693 12.6155V11.3845H20V12.6155H18.7693Z" fill="#95978C" /></g></svg>,
    <svg key={1} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_323_1900v" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect width="24" height="24" fill="#D9D9D9" /></mask><g mask="url(#mask0_323_1900v)"><path d="M4.38452 18.9999V10.4229L9.38452 5.42285L14.3845 10.4229V18.9999H4.38452ZM5.38452 17.9999H8.61527V15.6921H10.1538V17.9999H13.3845V10.8249L9.38452 6.82485L5.38452 10.8249V17.9999ZM8.61527 12.7691V11.2306H10.1538V12.7691H8.61527ZM16 19.0191V9.75185L11.6713 5.42285H13.0923L17 9.3306V19.0191H16ZM18.6155 19.0191V8.65935L15.3788 5.42285H16.8193L19.6155 8.23835V19.0191H18.6155Z" fill="#676861" /></g></svg>,
    <svg key={2} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_323_1895v" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect width="24" height="24" fill="#D9D9D9" /></mask><g mask="url(#mask0_323_1895v)"><path d="M6 18.9999H9.69225V13.1154H14.3077V18.9999H18V9.99993L12 5.46143L6 9.99993V18.9999ZM5 19.9999V9.49993L12 4.21143L19 9.49993V19.9999H13.3077V14.1154H10.6923V19.9999H5Z" fill="#676861" /></g></svg>,
    <svg key={3} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_323_1915v" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect width="24" height="24" fill="#D9D9D9" /></mask><g mask="url(#mask0_323_1915v)"><path d="M7.5 17.5V6.5H9.5V17.5H7.5ZM14.5 17.5V6.5H16.5V17.5H14.5ZM3 4V3H21V4H3ZM3 21V20H21V21H3Z" fill="#676861" /></g></svg>,
    <svg key={4} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_323_1857v" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect width="24" height="24" fill="#D9D9D9" /></mask><g mask="url(#mask0_323_1857v)"><path d="M12.019 21L3.98053 13.1L8.38428 7.76925H15.6343L20.0383 13.1L12.019 21ZM5.45928 7.25L3.48828 5.298L4.20178 4.5905L6.17278 6.54225L5.45928 7.25ZM11.519 5.76925V3H12.519V5.76925H11.519ZM18.5285 7.25L17.8343 6.5365L19.7863 4.5845L20.4998 5.298L18.5285 7.25ZM12.019 19.6038L18.192 13.5385H5.82678L12.019 19.6038ZM8.85353 8.76925L5.72478 12.5385H18.294L15.1653 8.76925H8.85353Z" fill="#95978C" /></g></svg>,
    <svg key={5} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_323_1867v" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect width="24" height="24" fill="#D9D9D9" /></mask><g mask="url(#mask0_323_1867v)"><path d="M5.23075 18V19.5C5.23075 19.6417 5.18283 19.7604 5.087 19.8562C4.99117 19.9521 4.87242 20 4.73075 20H4.5C4.35833 20 4.23958 19.9521 4.14375 19.8562C4.04792 19.7604 4 19.6417 4 19.5V12.1537L5.9845 6.5C6.03333 6.341 6.12725 6.21792 6.26625 6.13075C6.40542 6.04358 6.56025 6 6.73075 6H17.3462C17.4976 6 17.635 6.04583 17.7585 6.1375C17.882 6.22917 17.9677 6.35 18.0155 6.5L20 12.1537V19.5C20 19.6417 19.9521 19.7604 19.8562 19.8562C19.7604 19.9521 19.6417 20 19.5 20H19.2693C19.1276 20 19.0088 19.9521 18.913 19.8562C18.8172 19.7604 18.7693 19.6417 18.7693 19.5V18H5.23075ZM5.4155 11.1538H18.5845L17.1115 7H6.8885L5.4155 11.1538ZM7.4275 15.6923C7.73867 15.6923 8.00158 15.5834 8.21625 15.3658C8.43108 15.1479 8.5385 14.8835 8.5385 14.5725C8.5385 14.2613 8.42958 13.9984 8.21175 13.7838C7.99408 13.5689 7.72967 13.4615 7.4185 13.4615C7.1075 13.4615 6.84458 13.5704 6.62975 13.7882C6.41508 14.0059 6.30775 14.2703 6.30775 14.5815C6.30775 14.8925 6.41658 15.1554 6.63425 15.3702C6.85208 15.5849 7.1165 15.6923 7.4275 15.6923ZM16.5815 15.6923C16.8925 15.6923 17.1554 15.5834 17.3702 15.3658C17.5849 15.1479 17.6923 14.8835 17.6923 14.5725C17.6923 14.2613 17.5834 13.9984 17.3658 13.7838C17.1479 13.5689 16.8835 13.4615 16.5725 13.4615C16.2613 13.4615 15.9984 13.5704 15.7837 13.7882C15.5689 14.0059 15.4615 14.2703 15.4615 14.5815C15.4615 14.8925 15.5704 15.1554 15.7883 15.3702C16.0059 15.5849 16.2703 15.6923 16.5815 15.6923ZM5 17H19V12.1537H5V17Z" fill="#95978C" /></g></svg>,
]

const DEFAULT_FEATURES = [
    'Superficies desde 155 m² hasta 228 m²',
    '2 niveles',
    'Distribución tipo casa',
    'Espacios de doble altura',
    'Acabados premium',
    '1 a 3 cajones de estacionamiento por unidad',
]

interface VillasSectionProps {
    title?: string | null;
    description?: string | null;
    features?: { text?: string | null; id?: string | null }[] | null;
    imageSrc?: string | null;
    imageAlt?: string | null;
    imageBlurData?: string | null;
}

export default function VillasSection({
    title,
    description,
    features,
    imageSrc,
    imageAlt,
    imageBlurData,
}: VillasSectionProps = {}) {
    const featureTexts = features?.length ? features.map(f => f.text ?? '') : DEFAULT_FEATURES;
    const src = imageSrc ?? residencesImagesdata.rooftop.src;
    const alt = imageAlt ?? residencesImagesdata.rooftop.alt;
    const blur = imageBlurData ?? residencesImagesdata.rooftop.blurData;

    return (
        <section className={styles.villas__section}>
            <div className={styles.villas__section__info}>
                <h2 className={styles.villas__section__info__title}>{title ?? 'Villas'}</h2>
                <p className={styles.villas__section__info__description}>
                    {description ?? 'Un concepto exclusivo que combina la comodidad de una casa con la practicidad de un proyecto vertical. Espacios amplios y techos altos que se combinan con la tranquilidad de un entorno seguro rodeado de naturaleza'}
                </p>
                <ul className={styles.villas__section__info__features}>
                    {featureTexts.map((text, i) => (
                        <li key={i} className={styles.villas__section__info__features__item}>
                            {ICONS[i]}
                            <span className={styles.villas__section__info__features__item__text}>
                                {text}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.villas__section__image}>
                <Image
                    className={styles.villas__section__cover__image}
                    src={src}
                    alt={alt}
                    blurDataURL={blur}
                    placeholder={"blur"}
                    fill
                />
            </div>
        </section>
    )
}
