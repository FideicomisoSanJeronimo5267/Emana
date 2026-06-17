// Next.js
import Image from 'next/image';

// Styles
import styles from './units-available.module.css';

//Assets
import SmallLogo from '@assets/images/residences-page/small_logo.svg';
import { Button } from '@/src/app/(app)/components';

interface UnitsAvailableProps {
    title: string;
    button: {
        title: string,
        action?: () => void
    }
    headerDescription?: string;
    footerDescription?: string
}

export default function UnitsAvailable(props: UnitsAvailableProps) {
    return (
        <div className={styles.units__available}>
            {
                props.headerDescription && (
                    <span className={styles.units__available__header__description}>
                        {props.headerDescription}
                    </span>
                )
            }
            <h2 className={styles.units__available__title}>
                {props.title}
            </h2>
            <Button
                className={styles.units__available__button}
                link={{
                    href: 'https://one-development-group.vercel.app/residencias?proyecto=Emana',
                    target: '_blank'
                }}
            >
                Ver Inventario
            </Button>
            <Image className={styles.units__available__logo} src={SmallLogo} alt={'Small logo'} />
            {
                props.footerDescription && (
                    <span className={styles.units__available__footer__description}>
                        {props.footerDescription}
                    </span>
                )
            }
        </div>
    )
}   