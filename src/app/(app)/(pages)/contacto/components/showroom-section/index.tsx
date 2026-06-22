import styles from './showroom-section.module.css';
import Map from '@/src/core/components/map';

interface ShowroomSectionProps {
    title?: string | null;
    description?: string | null;
    address?: string | null;
    whatsapp?: string | null;
    hours?: string | null;
    latitude?: number | null;
    longitude?: number | null;
}

export default function ShowroomSection({
    title,
    description,
    address,
    whatsapp,
    hours,
    latitude,
    longitude,
}: ShowroomSectionProps = {}) {
    const lat = latitude ?? 25.6515;
    const lng = longitude ?? -100.3658;

    return (
        <section className={styles.container}>
            <div className={styles.info__column}>
                <div className={styles.content__wrapper}>

                    <div className={styles.top__block}>
                        <div className={styles.title__wrapper}>
                            <h2 className={styles.title}>
                                {title ?? 'VISITA NUESTRO SHOWROOM'}
                            </h2>
                        </div>
                        <p className={styles.description}>
                            {description ?? 'Conoce el proyecto en persona y recibe asesoría personalizada.'}
                        </p>
                    </div>

                    <div className={styles.bottom__block}>
                        <p style={{ whiteSpace: 'pre-line' }}>
                            {`Ubicación del showroom:\n${address ?? 'Calz. Mauricio Fernández Garza 121, Miravalle, 64660\nMonterrey, N.L.'}`}
                        </p>
                        <p style={{ whiteSpace: 'pre-line' }}>
                            {`Whatsapp:\n${whatsapp ?? '81 3124 3371'}`}
                        </p>
                        <p style={{ whiteSpace: 'pre-line' }}>
                            {hours ?? 'Contáctanos para conocer nuestros horarios disponibles.'}
                        </p>
                    </div>

                </div>
            </div>

            <div className={styles.map__column}>
                <Map
                    latitude={lat}
                    longitude={lng}
                    zoom={14}
                />
            </div>
        </section>
    );
}
