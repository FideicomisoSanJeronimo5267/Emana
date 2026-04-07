"use client"
import Image from 'next/image'
import styles from './coverpage.module.css'
import Button from '../button';
import { motion, useScroll, useTransform } from 'motion/react';

interface CoverPageV2Props {
    coverImage: {
        alt: string;
        src: string;
        blurData: string;
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
                    Residencias para habitar <br /> con propósito
                </h1>
                <span className={styles.coverpage__content__subtitle}>
                    Descubre el lugar donde vivir es una experiencia
                </span>
                <Button>
                    Conoce tu nuevo hogar
                </Button>
            </motion.div>

        </div >
    )
}