import styles from '../../../contacto.module.css'

interface ContactoHeaderSectionProps {
    title?: string | null;
    subtitle?: string | null;
}

export default function ContactoHeaderSection({ title, subtitle }: ContactoHeaderSectionProps = {}) {
    return (
        <div className={styles.header}>
            <h1 className={styles.title}>
                {title ?? 'QUEREMOS ESCUCHARTE'}
            </h1>
            <p className={styles.subtitle}>
                {subtitle ?? 'Deja tu información de contacto y nos comunicaremos contigo a la brevedad.'}
            </p>
        </div>
    )
}
