//Next.js imports
import Image from 'next/image';

//React imports
import { JSX, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

//Styles
import styles from './modal-layout.module.css';

//Assets
import closeIcon from '@assets/images/close.svg';
interface Props {
    children: React.ReactNode | JSX.Element | JSX.Element[];
    visibility: boolean;
    setVisibility: (visibility: boolean) => void;
}

export default function ModalLayout({ visibility = false, children, ...props }: Props) {
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        if (!isClosing) {
            setIsClosing(true);
            const timeout = setTimeout(() => {
                props.setVisibility(false);
            }, 250);

            return () => clearTimeout(timeout);
        }
    }, [isClosing]);

    return (
        createPortal(
            <div className={`${styles.wrapper} ${isClosing ? styles.wrapperClosing : ''}`}>
                <div className={`${styles.wrapper__content} ${visibility ? styles.wrapperActive : ''}`}>
                    <button
                    
                        onClick={() => props.setVisibility(false)}
                        className={styles.icon__wrapper}
                    >
                        <Image src={closeIcon} alt={'Close icon'} />
                    </button>
                    {children}
                </div>
            </div >,
            document.body
        )
    )
}