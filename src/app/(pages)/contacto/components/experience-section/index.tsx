import styles from './experience-section.module.css';

export default function ExperienceSection() {
    return (
        <section className={styles.container}>
            <div className={styles.overlay} />

            <div className={styles.content}>
                <div className={styles.titleWrapper}>
                    <h2 className={styles.title}>VISÍTANOS Y VIVE LA EXPERIENCIA EMANA</h2>
                </div>
                
                <div className={styles.subtitleWrapper}>
                    <p className={styles.subtitle}>Agenda tu recorrido hoy mismo</p>
                </div>
                
                <button className={styles.button}>Agendar visita</button>
                
                <div className={styles.linksContainer}>
                    <div className={styles.linkItemLeft}>
                        <a href="#">WhatsApp</a>
                    </div>
                    <div className={styles.linkItemCenter}>
                        <a href="#">Email</a>
                    </div>
                    <div className={styles.linkItemRight}>
                        <a href="#">Llamada</a>
                    </div>
                </div>
            </div>
        </section>
    );
}