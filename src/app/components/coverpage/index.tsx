"use client"
import styles from './coverpage.module.css'
import Image from 'next/image';
import { useEffect, useEffectEvent, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useCoverpageRefStore } from '@/src/core/stores/coverpage-ref.store';
interface CoverPageProps {
    coverImage: {
        className?: string;
        alt: string;
        src: string;
        blurData: string;
    }
}

export default function CoverPage(props: CoverPageProps) {
    const sectionRef = useRef<HTMLElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"]
    });

    const setCoverRef = useCoverpageRefStore((state) => state.setCoverRef)

    useEffect(() => {
        if (sectionRef.current != null) {
            setCoverRef(sectionRef)
        }
    }, [sectionRef])



    const logoPosition = useTransform(scrollYProgress, [0, 1], [0, -500]);
    return (
        <section
            ref={sectionRef}
            className={styles.wrapper}
        >
            <div className={styles.wrapper__content}>
                <Image
                    className={`${styles.coverpage__image}`}
                    src={props.coverImage.src}
                    alt={props.coverImage.alt}
                    placeholder="blur"
                    objectFit='cover'
                    blurDataURL={props.coverImage.blurData}
                    fill
                />


                <motion.div
                    className={styles.logo__wrapper}
                    style={{
                        y: logoPosition
                    }}
                >
                    <h1 className={styles.title}>EMANA</h1>
                    {/* <Image
                        className={`${styles.logo__image}`}
                        src={EmanaLogo}
                        alt={'Emana Logo'}
                        objectFit='cover'
                    /> */}
                </motion.div>
            </div>
        </section>
    )
}