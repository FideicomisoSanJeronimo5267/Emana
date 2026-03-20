// Styles
import Image from 'next/image';
import styles from './footer.module.css'

// Assets
import Logo from '@assets/images/general/large-logo.svg'
export default function Footer() {
    return (
        <footer className={styles.container}>
            <div className={styles.main__axis__divisor} />
            <div className={styles.container__content}>
                <ul className={styles.container__pages_list}>
                    <li>
                        Inicio
                    </li>
                    <li>
                        Residencias
                    </li>
                    <li>
                        Amenidades
                    </li>
                    <li>
                        Nosotros
                    </li>
                    <li>
                        Contacto
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
                    <Image src={Logo} alt={'Logo'}/>
                </div>
            </div>
            <div className={styles.main__axis__divisor} />
            <div className={styles.container__privacy__notice}>
                <span>Aviso de Privacidad</span>
            </div>
        </footer>
    );
}