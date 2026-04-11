"use client";
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import styles from './header.module.css';
import logo from '@assets/images/general/logo.svg'
import logoContacto from '@assets/images/general/logo-contacto.svg'
import sidebarLogo from '@assets/images/general/sidebarLogo.svg'
import logoMobile from '@assets/images/general/extra-largeLogo.svg'
import close from '@assets/images/general/close.svg'
import Image from 'next/image';
import Link from 'next/link';
import sidebarLogoMobile from '@assets/images/general/sidebarLogoMobile.svg'
import { useCoverpageRefStore } from '@/src/core/stores/coverpage-ref.store';
import { useScroll, useTransform, motion, useSpring, useMotionValueEvent } from 'motion/react';

export default function Header() {
    const pathname = usePathname();
    const isHomePage = pathname === '/';
    const isContactPage = pathname === '/contacto';
    const isPrivacyPolicy = pathname === '/aviso-de-privacidad'

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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


    const coverRef = useCoverpageRefStore((state) => state.coverRef)

    useEffect(() => {
        console.log('Se cargo el ref correctamente')
        console.log(coverRef)
    }, [coverRef])


    const { scrollYProgress, scrollY } = useScroll({
        target: coverRef || undefined,
        offset: ["start start", "end end"]
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 90,
        damping: 22,
        mass: 0.8,
    });

    const inicioOpacity = useTransform(smoothProgress, [0, 1], [1, 0]);
    const expandProgress = useTransform(smoothProgress, [0, 1], [0, 1]);

    const [freezeY, setFreezeY] = useState(-1);
    const [isHeaderFixed, setIsHeaderFixed] = useState(true);

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (!coverRef?.current) {
            if (!isHeaderFixed) setIsHeaderFixed(true);
            return;
        }

        const finalStickyHeight = isHomePage ? window.innerHeight * 0.4 : window.innerHeight;
        const exactUnlockY = coverRef.current.offsetTop + coverRef.current.offsetHeight - finalStickyHeight;

        if (latest >= exactUnlockY && isHeaderFixed) {
            setIsHeaderFixed(false);
            setFreezeY(exactUnlockY);
        } else if (latest < exactUnlockY && !isHeaderFixed) {
            setIsHeaderFixed(true);
        }
    });

    return (
        <>
            <header
                className={`${styles.header} ${isContactPage || isPrivacyPolicy ? styles.headerContact : ''}`}
                style={!isHeaderFixed ? { position: 'absolute', top: freezeY } : undefined}
            >
                <nav className={styles.header__nav}>


                    <ul className={styles.header__nav__options__list}>

                        {isHomePage ? (
                            <li className={styles.header__nav__options__list__item}>
                                <motion.div
                                    className={styles.homeLogoContainer}
                                    style={{
                                        '--progress': expandProgress
                                    } as React.CSSProperties}
                                >
                                    <motion.div style={{ opacity: inicioOpacity }}>

                                        <Link
                                            href="/"

                                            style={{ textDecoration: 'none' }}
                                        >
                                            Inicio
                                        </Link>

                                    </motion.div>
                                </motion.div></li>
                        ) : (
                            <Link className={styles.header__nav__logo} href="/">
                                <Image
                                    src={isContactPage || isPrivacyPolicy ? logoContacto : logo}
                                    alt="Logo"
                                    fill
                                    priority
                                />
                            </Link>
                        )}

                        <li className={styles.header__nav__options__list__item}><Link href="/residencias">Residencias</Link></li>
                        <li className={styles.header__nav__options__list__item}><Link href="/amenidades">Amenidades</Link></li>
                        <li className={styles.header__nav__options__list__item}><Link href="/colaboradores">Colaboradores</Link></li>
                        <li className={styles.header__nav__options__list__item}><Link href="/contacto">Contacto</Link></li>
                        <li className={styles.header__nav__options__list__item}>
                            <Link href="/contacto" className={styles.citaLink}>
                                Agenda una cita
                            </Link>
                        </li>
                    </ul>

                    <div className={styles.header__nav__sidebarLogo} onClick={toggleMenu}>
                        <Image
                            src={isContactPage || isPrivacyPolicy ? sidebarLogoMobile : sidebarLogo}
                            alt="Menu"
                            fill
                        />
                    </div>
                </nav>
            </header >

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


                    <ul className={styles.mobileNavList}>
                        <li><Link href="/" className={styles.mobileNavLink} onClick={closeMenu}>INICIO</Link></li>
                        <li><Link href="/residencias" className={styles.mobileNavLink} onClick={closeMenu}>RESIDENCIAS</Link></li>
                        <li><Link href="/amenidades" className={styles.mobileNavLink} onClick={closeMenu}>AMENIDADES</Link></li>
                        <li><Link href="/colaboradores" className={styles.mobileNavLink} onClick={closeMenu}>COLABORADORES</Link></li>
                        <li><Link href="/contacto" className={styles.mobileNavLink} onClick={closeMenu}>CONTACTO</Link></li>
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