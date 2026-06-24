import AppointmentSection from '@/src/app/(app)/components/appoiment-section'
import styles from '../../../colaboradores.module.css'

interface ColaboradoresAppointmentSectionProps {
    title?: string | null;
    description?: string | null;
    coverImage?: string | null;
    blurDataURL?: string | null;
}

export default function ColaboradoresAppointmentSection({
    title,
    description,
    coverImage,
    blurDataURL,
}: ColaboradoresAppointmentSectionProps = {}) {
    return (
        <AppointmentSection
            title={title ?? 'Vive la experiencia EMANA'}
            description={description ?? 'Conoce nuestro showroom'}
            coverImage={coverImage ?? ''}
            blurDataURL={blurDataURL ?? ''}
            className={styles.container__coverImage}
        />
    )
}
