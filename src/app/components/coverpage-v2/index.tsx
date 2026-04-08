"use client"
import Image from 'next/image'
import styles from './coverpage.module.css'
import Button from '../button';
import { motion, useScroll, useTransform } from 'motion/react';
import { JSX } from 'react';

interface CoverPageV2Props {
    coverImage: {
        className?: string;
        alt: string;
        src: string;
        blurData: string;
    }
    title: string | JSX.Element | JSX.Element[];
    subtitle: string | JSX.Element | JSX.Element[];
    button?: {
        title: string;
        href?: string;
    }
    darkLayout?: boolean;
}

export default function CoverPageV2({ darkLayout = false, ...props }: CoverPageV2Props) {
    const { scrollYProgress } = useScroll();
    const filter = useTransform(
        scrollYProgress,
        [0, 0.1],
        ["bottom(-45px)", "bottom(50px)"]
    )


    return (
        <div className={styles.coverpage}>
            <Image
                className={`${styles.coverpage__image} ${props.coverImage.className || ""}`}
                src={props.coverImage.src}
                alt={props.coverImage.alt}
                placeholder="blur"
                objectFit='cover'
                blurDataURL={props.coverImage.blurData}
                fill
            />
            {
                darkLayout && (
                    <div className={styles.dark__layout} />
                )
            }
            <motion.div style={{ filter }} className={styles.coverpage__content}>
                <h1 className={styles.coverpage__content__title}>
                    {props.title}
                </h1>
                <span className={styles.coverpage__content__subtitle}>
                    {props.subtitle}
                </span>

                {
                    props.button && (
                        <Button
                            link={{
                                href: '/contacto'
                            }}
                        >
                            {props.button.title}
                        </Button>

                    )
                }
            </motion.div>

        </div >
    )
}