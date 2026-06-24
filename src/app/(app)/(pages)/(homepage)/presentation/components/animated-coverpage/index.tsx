'use client';

import Image from 'next/image';
import {
  motion,
  useMotionTemplate,
  useReducedMotion,
  useScroll,
  useTransform
} from 'motion/react';
import { useRef } from 'react';

import styles from './animated-coverpage.module.css';

type AnimatedCoverpageProps = {
  imageSrc: string;
  imageAlt: string;
  blurDataURL?: string;
};

export default function AnimatedCoverpage({
  imageSrc,
  imageAlt,
  blurDataURL
}: AnimatedCoverpageProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end']
  });

  const imageScale = useTransform(
    scrollYProgress,
    [0, 0.35, 1],
    shouldReduceMotion ? [1, 1, 1] : [1.22, 1, 0.92]
  );
  const imageY = useTransform(
    scrollYProgress,
    [0, 0.35, 1],
    shouldReduceMotion ? ['0%', '0%', '0%'] : ['-8%', '0%', '14%']
  );
  const contentY = useTransform(
    scrollYProgress,
    [0, 0.55, 1],
    shouldReduceMotion ? ['0%', '0%', '0%'] : ['0%', '8%', '32%']
  );
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.6, 0.9, 1],
    shouldReduceMotion ? [1, 1, 1, 1] : [1, 1, 0.35, 0]
  );
  const overlayOpacity = useTransform(
    scrollYProgress,
    [0, 0.35, 1],
    [0.18, 0.42, 0.78]
  );
  const overlayBlur = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ['0px', '0px'] : ['0px', '8px']
  );
  const overlayBackdropFilter = useMotionTemplate`blur(${overlayBlur})`;
  const scrollHintOpacity = useTransform(
    scrollYProgress,
    [0, 0.18, 0.3],
    [0, 1, 0]
  );

  return (
    <section ref={sectionRef} className={styles.scrollSection}>
      <div className={styles.stickyFrame}>
        <motion.div
          className={styles.background}
          style={{ scale: imageScale, y: imageY }}
        >
          <Image
            className={styles.coverImage}
            src={imageSrc}
            alt={imageAlt}
            blurDataURL={blurDataURL}
            placeholder={blurDataURL ? 'blur' : 'empty'}
            fill
            priority
          />
        </motion.div>

        <motion.div
          className={styles.overlay}
          style={{ opacity: overlayOpacity, backdropFilter: overlayBackdropFilter }}
        />

        <motion.div
          className={styles.content}
          style={{ y: contentY, opacity: contentOpacity }}
        >
          <span className={styles.eyebrow}>
            Luxury Residences in Baja California
          </span>

          <h1 className={styles.title}>
            La portada se revela mientras haces scroll, no antes.
          </h1>

          <p className={styles.description}>
            El hero queda fijo durante un tramo, la imagen hace zoom inverso y el
            contenido se desvanece conforme la siguiente seccion toma el control.
          </p>

          <a className={styles.cta} href="#contenido">
            Explorar proyecto
          </a>
        </motion.div>

        <motion.div
          className={styles.scrollHint}
          style={{ opacity: scrollHintOpacity }}
        >
          Scroll
        </motion.div>
      </div>
    </section>
  );
}
