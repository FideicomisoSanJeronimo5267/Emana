import styles from './header.module.css'

export default function Header() {
    return (
        <header className={styles.header}>
            <nav className={styles.header__nav}>
                <a className={styles.header__nav__logo} href="/">
                    logo
                </a>

                <ul className={styles.header__nav__options__list}>
                    <li className={styles.header__nav__options__list__item}><a href="/">Inicio</a></li>
                    <li className={styles.header__nav__options__list__item}><a href="/residencias">Residencias</a></li>
                    <li className={styles.header__nav__options__list__item}><a href="/amenidades">Amenidades</a></li>
                    <li className={styles.header__nav__options__list__item}><a href="/colaboradores">Colaboradores</a></li>
                    <li className={styles.header__nav__options__list__item}><a href="/contacto">Contacto</a></li>
                </ul>

                {/* <button
                    aria-label="Abrir menú"
                    aria-expanded={isOpen}
                    aria-controls="main-menu"
                >
                    ☰
                </button> */}
            </nav>
        </header>
    ) 
}