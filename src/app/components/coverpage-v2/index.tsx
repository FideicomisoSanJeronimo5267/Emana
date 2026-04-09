"use client"
import Image from 'next/image'
import styles from './coverpage.module.css'
import Button from '../button';
import { motion, useScroll, useTransform } from 'motion/react';
import { JSX, useRef } from 'react';

interface CoverPageV2Props {
    coverImage: {
        className?: string;
        alt: string;
        src: string;
        blurData: string;
    }
    title: {
        className?: string
        text: string | JSX.Element | JSX.Element[];
    }
    subtitle: {
        className?: string
        text: string | JSX.Element | JSX.Element[];
    }
    button?: {
        title: string;
        href?: string;
    }
    darkLayout?: boolean;
}

export default function CoverPageV2({ darkLayout = false, ...props }: CoverPageV2Props) {
    const sectionRef = useRef<HTMLElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"]
    });

    const titleScale = useTransform(scrollYProgress, [0, 1], [1, 0.7]);
    const titleY = useTransform(scrollYProgress, [0, 1], [150, -80]);
    return (
        <section
            ref={sectionRef}
            className={styles.wrapper}
        >
            <div className={styles.wrapper__content}>
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
                <motion.div
                    className={styles.wrapper__content__text}
                    style={{
                        y: titleY
                    }}
                >
                    <motion.h1
                        className={`${styles.wrapper__content__title} ${props.title.className}`}
                        style={{
                            scale: titleScale,
                            transformOrigin: "left bottom",
                        }}
                    >
                        {props.title.text}
                    </motion.h1>
                    <span className={`${styles.wrapper__content__subtitle} ${props.subtitle.className}`}>
                        {props.subtitle.text}
                    </span>

                    <div className={styles.button__wrapper}>
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
                    </div>
                </motion.div>

            </div>

        </section >
    )
}