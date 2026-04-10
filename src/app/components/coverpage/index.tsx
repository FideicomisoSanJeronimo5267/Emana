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
    stiffness: 90,
    damping: 22,
    mass: 0.8,
  });

  useEffect(() => {
    if (sectionRef.current) {
      setCoverRef(sectionRef);
    }
  }, [setCoverRef]);

  const logoBottom = useTransform(smoothProgress, [0, 1], ["0%", "90%"]);
  const logoScale = useTransform(smoothProgress, [0, 1], [1, 0.12]);
  const logoX = useTransform(smoothProgress, [0, 1], [0, -10]);
  const coverpageHeight = useTransform(smoothProgress, [0.8, 1], ["100dvh", "40dvh"]);

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
            bottom: logoBottom,
            x: logoX,
          }}
        >
          <h1 className={styles.title}>EMANA</h1>
          {/* <span className={styles.title_part_two}>San Jerónimo</span> */}
        </motion.div>
      </motion.div>
    </section>
  );
}