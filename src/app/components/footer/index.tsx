// Styles
import Image from 'next/image';
import styles from './footer.module.css'
import Link from 'next/link';
// Assets
import Logo from '@assets/images/general/large-logo.svg'
export default function Footer() {
    return (
        <footer className={styles.container}>
            <div className={styles.main__axis__divisor} />
            <div className={styles.container__content}>
                <ul className={styles.container__pages_list}>
                    <li>
                        <Link href={'/'}>Inicio</Link>
                    </li>
                    <li>
                        <Link href={'/residencias'}>Residencias</Link>
                    </li>
                    <li>
                        <Link href={'/amenidades'}>Amenidades</Link>
                    </li>
                    <li>
                        <Link href={'/nosotros'}>Nosotros</Link>
                    </li>
                    <li>
                        <Link href={'/contacto'}>Contacto</Link>
                    </li>
                </ul>

                <ul className={styles.container__content__contact__info}>
                    <li>
                        81 3124 3371
                    </li>
                    <li>
                        info@emanamx.com
                    </li>
                    <li className={styles.container__content__contact__info__address}>
                        Calle V, 419, San Jerónimo, Monterrey, Nuevo León, <br />C.P. 64640
                    </li>
                </ul>
                <span>Todos los Derechos Reservados.</span>
                <div className={styles.container__content__logo__wrapper}>
                    <Image src={Logo} alt={'Logo'} />
                </div>
            </div>
            <div className={styles.main__axis__divisor} />
            <div className={styles.container__privacy__notice}>
                <Link href={'/aviso-de-privacidad'}>
                    <span>Aviso de Privacidad</span>
                </Link>
            </div>
        </footer>
    );
}