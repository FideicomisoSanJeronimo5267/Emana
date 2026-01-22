// Next.js
import Image from 'next/image';

// Styles
import styles from './units-available.module.css';

//Assets
import SmallLogo from '@assets/images/residences-page/small_logo.svg';
import Button from '@/app/components/button';
export default function UnitsAvailable() {
    return (
        <div className={styles.units__available}>
            <h2 className={styles.units__available__title}>
                Conoce las unidades disponibles
            </h2>
            <Button className={styles.units__available__button}>
                Ver Inventario
            </Button>
            <Image className={styles.units__available__logo} src={SmallLogo} alt={'Small logo'} />
        </div>
    )
}   