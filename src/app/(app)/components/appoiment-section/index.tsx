"use client";

// Next.js
import Image from "next/image";

// Styles
import styles from './appoiment-section.module.css'
import Button from "../button";
import { useDataLayer } from "@/src/core/hooks/useDataLayer";

interface Props {
    title: string;
    description: string;
    coverImage: string;
    blurDataURL?: string;
    className?: string;
    style?: React.CSSProperties;
    hideButton?: boolean;
}

export default function AppointmentSection(props: Props) {
    const { push } = useDataLayer();

    return (
        <section className={styles.container}>
            <div className={styles.container__info}>
                <h2 className={styles.container__info__title}>{props.title}</h2>
                <p className={styles.container__info__description}>{props.description}</p>
            </div>
            
            <div className={styles.container__divider} />
            
            <div className={styles.container__contact__info}>
                {!props.hideButton && (
                    <Button link={{ href: "/contacto" }} onClick={() => push('cta_agenda_click')}>Agenda una visita</Button>
                )}

                <div className={styles.container__contact__info__details}>
                    <a
                        href="https://wa.me/528131243371"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.contactLink}
                        onClick={() => push('contact_link_click', { contact_type: 'whatsapp' })}
                    >
                        WhatsApp
                    </a>

                    <div className={styles.cross__axis_divisor} />

                    <a
                        href="mailto:info@emanamx.com"
                        className={styles.contactLink}
                        onClick={() => push('contact_link_click', { contact_type: 'email' })}
                    >
                        Email
                    </a>

                    <div className={styles.cross__axis_divisor} />

                    <a
                        href="tel:8131243371"
                        className={styles.contactLink}
                        onClick={() => push('contact_link_click', { contact_type: 'phone' })}
                    >
                        Llamada
                    </a>
                </div>
            </div>
            
            <div
                className={`${styles.container__coverImage} ${props.className || ''}`}
                style={props.style}
            >
                <Image
                    src={props.coverImage}
                    alt={props.title}
                    blurDataURL={props.blurDataURL}
                    placeholder={"blur"}
                    fill
                />
            </div>
        </section>
    )
}