"use client";
import { useState, useEffect } from 'react';
import styles from './header.module.css';

import logo from '@assets/images/logo.svg';
import sidebarLogo from '@assets/images/sidebarLogo.svg';
import logoMobile from '@assets/images/logoMobile.svg';
import close from '@assets/images/close.svg';

import Image from 'next/image';
import Link from 'next/link';
import Button from '../button';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    // Estado solo para el acordeón del dropdown en versión móvil
    const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMenu = () => {
        setIsMobileMenuOpen(false);
        setIsMobileDropdownOpen(false);
    };

    useEffect(() => {
        if (isMobileMenuOpen) {
            const scrollY = window.scrollY;
            document.body.style.overflow = 'hidden';
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollY}px`;
            document.body.style.width = '100%';
        } else {
            const scrollY = document.body.style.top;

            document.body.style.overflow = '';
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';

            if (scrollY) {
                window.scrollTo(0, parseInt(scrollY || '0') * -1);
            }
        }

        return () => {
            document.body.style.overflow = '';
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
        };
    }, [isMobileMenuOpen]);

    return (
        <>
            <header className={`${styles.header}`}>
                <nav className={styles.header__nav}>
                    <Link className={styles.header__nav__logo} href="/">
                        <Image
                            src={logo}
                            alt="Logo"
                            fill
                            priority
                        />
                    </Link>

                    <ul className={styles.header__nav__options__list}>
                        <li className={styles.header__nav__options__list__item}><Link href="/">Inicio</Link></li>
                        
                        {/* Dropdown Desktop (Controlado por CSS puro para evitar bugs de hover) */}
                        <li className={`${styles.header__nav__options__list__item} ${styles.dropdownContainer}`}>
                            <div className={styles.dropdownTrigger}>
                                Departamentos
                                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.dropdownIcon}>
                                    <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <ul className={styles.dropdownMenu}>
                                <li><Link href="/departamentos">Departamentos</Link></li>
                                <li><Link href="/amenidades">Amenidades</Link></li>
                            </ul>
                        </li>

                        <li className={styles.header__nav__options__list__item}><Link href="/parque-y-comercio">Parque y Comercio</Link></li>
                        <li className={styles.header__nav__options__list__item}><Link href="/colaboradores">Colaboradores</Link></li>
                        <li className={styles.header__nav__options__list__item}><Link href="/contacto">Contacto</Link></li>
                        <li className={styles.header__nav__options__list__item}>
                            <Link href="/contacto">
                                <Button variant={'secondary'}>
                                    Agenda visita al showroom
                                </Button>
                            </Link>
                        </li>
                    </ul>

                    <div className={styles.header__nav__sidebarLogo} onClick={toggleMenu}>
                        <Image
                            src={sidebarLogo}
                            alt="Menu"
                            fill
                        />
                    </div>
                </nav>
            </header>

            <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
                <div className={styles.closeButtonWrapper}>
                    <button className={styles.closeButton} onClick={closeMenu} aria-label="Close menu">
                        <Image
                            src={close}
                            alt="Close"
                            fill
                        />
                    </button>
                </div>

                <div className={styles.mobileNavContent}>
                    <div className={styles.agendaButtonWrapper}>
                        <Link href="/contacto" onClick={closeMenu}>
                            <Button variant='secondary'>Agenda una cita</Button>
                        </Link>
                    </div>

                    <ul className={styles.mobileNavList}>
                        <li><Link href="/" className={styles.mobileNavLink} onClick={closeMenu}>Inicio</Link></li>
                        
                        {/* Dropdown Móvil (Acordeón controlado por JS) */}
                        <li className={styles.mobileNavDropdownContainer}>
                            <div className={styles.mobileNavLink} onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}>
                                Departamentos
                                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg" 
                                     className={`${styles.mobileDropdownIcon} ${isMobileDropdownOpen ? styles.mobileDropdownIconOpen : ''}`}>
                                    <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <ul className={`${styles.mobileDropdownMenu} ${isMobileDropdownOpen ? styles.mobileDropdownMenuOpen : ''}`}>
                                <li><Link href="/departamentos" className={styles.mobileNavLinkSub} onClick={closeMenu}>Departamentos</Link></li>
                                <li><Link href="/amenidades" className={styles.mobileNavLinkSub} onClick={closeMenu}>Amenidades</Link></li>
                            </ul>
                        </li>

                        <li><Link href="/parque-y-comercio" className={styles.mobileNavLink} onClick={closeMenu}>Parque y Comercio</Link></li>
                        <li><Link href="/colaboradores" className={styles.mobileNavLink} onClick={closeMenu}>Colaboradores</Link></li>
                        <li><Link href="/contacto" className={styles.mobileNavLink} onClick={closeMenu}>Contacto</Link></li>
                    </ul>

                    <div className={styles.mobileLogo}>
                        <Image
                            src={logoMobile}
                            alt="Monterra Park"
                            fill
                        />
                    </div>
                </div>
            </div>
        </>
    )
}