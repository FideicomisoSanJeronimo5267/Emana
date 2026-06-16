"use client";

import styles from "./coverpage.module.css";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useCoverpageRefStore } from "@/src/core/stores/coverpage-ref.store";

interface CoverPageProps {
  coverImage: {
    className?: string;
    alt: string;
    src: string;
    blurData: string;
  };
}

export default function CoverPage(props: CoverPageProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const setCoverRef = useCoverpageRefStore((state) => state.setCoverRef);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 32,
    mass: 0.4,
  });

  useEffect(() => {
    if (sectionRef.current) {
      setCoverRef(sectionRef);
    }
    return () => setCoverRef(null);
  }, [setCoverRef]);


  const logoScale = useTransform(smoothProgress, [0, 1], [1, 0.14]);
  const logoX = useTransform(smoothProgress, [0, 1], [0, -10]);
  const coverpageHeight = useTransform(smoothProgress, [0.8, 1], ["100dvh", "40dvh"]);
  const subtitleOpacity = useTransform(smoothProgress, [0, 0.15], [0, 1]);
  const subtitleScale = useTransform(smoothProgress, [0, 0.6, 1], [1, 1, 1.55]);
  // Separación SAN JERÓNIMO ↔ EMANA al final del scroll.
  // Subir el último número aumenta la separación; bajarlo la reduce.
  const subtitleY = useTransform(smoothProgress, [0, 0.6, 1], [0, 0, 200]);

  return (
    <section ref={sectionRef} className={styles.wrapper}>
      <motion.div
        className={styles.wrapper__content}
        style={{ height: coverpageHeight }}
      >
        <Image
          className={styles.coverpage__image}
          src={props.coverImage.src}
          alt={props.coverImage.alt}
          placeholder="blur"
          blurDataURL={props.coverImage.blurData}
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />

        <motion.div
          className={styles.logo__wrapper}
          style={{
            scale: logoScale,
            x: logoX,
            ...({ '--logo-progress': smoothProgress } as any)
          }}
        >
          <h1 className={styles.title}>EMANA</h1>
          <motion.span
            className={styles.title_part_two}
            style={{
              opacity: subtitleOpacity,
              scale: subtitleScale,
              x: "-50%",
              y: subtitleY,
            }}
          >
            SAN JERÓNIMO
          </motion.span>
        </motion.div>
      </motion.div>
    </section>
  );
}