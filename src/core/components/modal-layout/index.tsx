//React imports
import { JSX, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

//Styles
import styles from './modal-layout.module.css';

//Assets
interface Props {
    contentClassName?: string
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

    useEffect(() => {
        if (visibility) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [visibility]);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                props.setVisibility(false);
            }
        };

        if (visibility) {
            window.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [visibility]);

    return (
        createPortal(
            <div className={`${styles.wrapper} ${isClosing ? styles.wrapperClosing : ''}`}>
                <div className={`${styles.wrapper__content} ${props.contentClassName || ''} ${visibility ? styles.wrapperActive : ''}`}>
                    <button

                        onClick={() => props.setVisibility(false)}
                        className={styles.icon__wrapper}
                    >
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.05375 13.3075L0 12.2538L5.6 6.65375L0 1.05375L1.05375 0L6.65375 5.6L12.2537 0L13.3075 1.05375L7.7075 6.65375L13.3075 12.2538L12.2537 13.3075L6.65375 7.7075L1.05375 13.3075Z" fill="#1C1B1F" />
                        </svg>
                    </button>
                    {children}
                </div>
            </div >,
            document.body
        )
    )
}