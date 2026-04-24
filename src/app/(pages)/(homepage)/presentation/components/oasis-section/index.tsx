'use client'
import { useState } from 'react';
import Button from '@/src/app/components/button';
import { BrochureModal, ModalLayout } from '@/src/core/components';
import styles from './oasis-section.module.css';

export default function OasisSection() {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <section className={styles.oasis}>
            <h2 className={styles.oasis__title}>UN OASIS DENTRO DE LA CIUDAD</h2>
            <p className={styles.oasis__description}>
                Ubicado en Valle Norte – San Jerónimo, EMANA redefine la experiencia de vivir en Monterrey: diseño, calma y conexión en equilibrio.
            </p>

            <div className={styles.oasis__actions}>
                <Button
                    className={styles.oasis__explore}
                    link={{ href: '/residencias' }}
                >
                    Explora EMANA
                </Button>

                <Button
                    className={styles.oasis__brochure}
                    onClick={() => setModalVisible(true)}
                >
                    Descarga el Brochure
                    <svg className={styles.oasis__brochure__icon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 16L7 11L8.4 9.55L11 12.15V4H13V12.15L15.6 9.55L17 11L12 16ZM6 20C5.45 20 4.97917 19.8042 4.5875 19.4125C4.19583 19.0208 4 18.55 4 18V15H6V18H18V15H20V18C20 18.55 19.8042 19.0208 19.4125 19.4125C19.0208 19.8042 18.55 20 18 20H6Z" fill="#676861" />
                    </svg>
                </Button>
            </div>

            {modalVisible && (
                <ModalLayout
                    visibility={modalVisible}
                    setVisibility={setModalVisible}
                >
                    <BrochureModal />
                </ModalLayout>
            )}
        </section>
    );
}
