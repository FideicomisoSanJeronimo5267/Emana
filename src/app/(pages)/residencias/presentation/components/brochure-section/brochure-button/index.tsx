"use client";

import { Button } from "@/src/app/components";
import { BrochureModal, ModalLayout } from "@/src/core/components";
import { useState } from "react";

import styles from './brochure-button.module.css'

export default function BrochureButton() {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
            <Button className={styles.button} onClick={() => setModalVisible(true)}>
                Descargar brochure
            </Button>

            {
                modalVisible && (
                    <ModalLayout
                        contentClassName={styles.modal}
                        visibility={modalVisible}
                        setVisibility={setModalVisible}
                    >
                        <BrochureModal />
                    </ModalLayout>
                )
            }
        </>
    )
}