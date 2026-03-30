import styles from './showroom-section.module.css';
import Map from '@/src/core/components/map';

export default function ShowroomSection() {
    // Coordenadas actualizadas al nuevo showroom
    const location = {
        lat: 25.6515, 
        lng: -100.3658
    };

    return (
        <section className={styles.container}>
            <div className={styles.info__column}>
                <div className={styles.content__wrapper}>
                    
                    <div className={styles.top__block}>
                        <div className={styles.title__wrapper}>
                            <h2 className={styles.title}>VISITA NUESTRO SHOWROOM</h2>
                        </div>
                        <p className={styles.description}>
                            Conoce el proyecto en persona y recibe asesoría personalizada.
                        </p>
                    </div>

                    <div className={styles.bottom__block}>
                        <p>
                            Ubicación del showroom:<br />
                            Calz. Mauricio Fernández Garza 121, Miravalle, 64660<br />
                            Monterrey, N.L.
                        </p>
                        <p>
                            Whatsapp:<br />
                            81 3124 3371
                        </p>
                        <p>
                            Contáctanos para conocer nuestros horarios
                            <br/>disponibles.
                        </p>
                        
                    </div>

                </div>
            </div>
            
            <div className={styles.map__column}>
                <Map 
                    latitude={location.lat} 
                    longitude={location.lng} 
                    zoom={14}
                />
            </div>
        </section>
    );
}