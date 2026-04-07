"use client"
import Image from 'next/image'
import styles from './coverpage.module.css'
import Button from '../button';
import { motion, useScroll, useTransform } from 'motion/react';
import { JSX } from 'react';

interface CoverPageV2Props {
    coverImage: {
        alt: string;
        src: string;
        blurData: string;
    }
    title: string | JSX.Element | JSX.Element[];
    subtitle: string | JSX.Element | JSX.Element[];
    button: {
        title: string;
        href?: string;
    }
}

export default function CoverPageV2(props: CoverPageV2Props) {
    const { scrollYProgress } = useScroll();
    const filter = useTransform(
        scrollYProgress,
        [0, 0.1],
        ["bottom(-45px)", "bottom(50px)"]
    )


    return (
        <div className={styles.coverpage}>
            <Image
                className={styles.coverpage__image}
                src={props.coverImage.src}
                alt={props.coverImage.alt}
                placeholder="blur"
                objectFit='cover'
                blurDataURL={props.coverImage.blurData}
                fill
            />
            <motion.div style={{ filter }} className={styles.coverpage__content}>
                <h1 className={styles.coverpage__content__title}>
                    {props.title}
                </h1>
                <span className={styles.coverpage__content__subtitle}>
                    {props.subtitle}
                </span>
                <Button
                    link={{
                        href: '/contacto'
                    }}
                >
                    {props.button.title}
                </Button>
            </motion.div>

        </div >
    )
}