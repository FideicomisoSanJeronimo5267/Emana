'use client'
import styles from './contacto.module.css';
import ContactForm from './components/contact-form';
import ShowroomSection from './components/showroom-section';
import ExperienceSection from './components/experience-section';

export default function ContactPage() {
    return (
        <main className={styles.main}>
            {/* Si tienes un HeroSection en Emana, agrégalo aquí arriba */}
            
            <div className={styles.content__wrapper}>
                <div className={styles.centered__container}>
                    <div className={styles.header}>
                        <h1 className={styles.title}>QUEREMOS ESCUCHARTE</h1>
                        <p className={styles.subtitle}>
                            Deja tu información de contacto detalles de tu interés y nos comunicaremos contigo a la brevedad.
                        </p>
                    </div>

                    <ContactForm />
                </div>

                <ShowroomSection />

                <div className={styles.banner__filter__wrapper}>
                    <ExperienceSection />
                </div>
            </div>
        </main>
    )
}