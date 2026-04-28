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
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_1592_2075" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                        <rect width="24" height="24" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_1592_2075)">
                        <path d="M5 20V19H19V20H5ZM12 16.3077L7.69225 12L8.4 11.2923L11.5 14.3923V4H12.5V14.3923L15.6 11.2923L16.3077 12L12 16.3077Z" fill="#676861" />
                    </g>
                </svg>
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