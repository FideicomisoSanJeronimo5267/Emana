// Next.js
import Image from "next/image";

// Styles
import styles from './appoiment-section.module.css'
import Button from "../button";


interface Props {
    title: string;
    description: string;
    coverImage: string;
    blurDataURL?: string;
}
export default function AppointmentSection(props: Props) {
    return (
        <section className={styles.container}>
            <div className={styles.container__info}>
                <h2 className={styles.container__info__title}>{props.title}</h2>
                <p className={styles.container__info__description}>{props.description}</p>

            </div>
            <div className={styles.container__divider} />
            <div className={styles.container__contact__info}>
                <Button>Agenda una visita</Button>

                <div className={styles.container__contact__info__details}>
                    <span>WhatsApp</span>
                    <div className={styles.cross__axis_divisor} />
                    <span>Email</span>
                    <div className={styles.cross__axis_divisor} />
                    <span>Llamada</span>
                </div>
            </div>
            <div className={styles.container__coverImage}>
                <Image
                    src={props.coverImage}
                    alt={props.title}
                    fill objectFit="cover"
                    placeholder={"blur"}
                    blurDataURL={props.blurDataURL}
                />
            </div>
        </section>
    )
}