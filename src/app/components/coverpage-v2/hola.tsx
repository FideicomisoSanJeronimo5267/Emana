"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function AmenitiesParallax() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Título: grande al inicio, más pequeño al final
  const titleScale = useTransform(scrollYProgress, [0, 1], [1, 0.55]);

  // Título: baja un poco / se reposiciona
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -120]);

  // Descripción: aparece después de cierto punto
  const descriptionOpacity = useTransform(
    scrollYProgress,
    [0.35, 0.6],
    [0, 1]
  );

  const descriptionY = useTransform(
    scrollYProgress,
    [0.35, 0.6],
    [40, 0]
  );

  // Botón: aparece un poco después
  const buttonOpacity = useTransform(scrollYProgress, [0.5, 0.75], [0, 1]);
  const buttonY = useTransform(scrollYProgress, [0.5, 0.75], [30, 0]);

  // Overlay opcional para que el texto final tenga mejor legibilidad
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.15, 0.35]);

  return (
    <section
      ref={sectionRef}
      style={{ height: "200vh", position: "relative" }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <Image
          src="/images/amenidades.webp"
          alt="Amenidades"
          fill
          priority
          style={{ objectFit: "cover" }}
        />

        <motion.div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.15), rgba(0,0,0,0.45))",
            opacity: overlayOpacity,
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "flex-end",
            padding: "0 4rem 4rem",
          }}
        >
          <div style={{ maxWidth: "620px", color: "white" }}>
            <motion.h1
              style={{
                scale: titleScale,
                y: titleY,
                transformOrigin: "left bottom",
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                lineHeight: 1,
                margin: 0,
              }}
            >
              AMENIDADES QUE EMANAN BIENESTAR
            </motion.h1>

            <motion.p
              style={{
                opacity: descriptionOpacity,
                y: descriptionY,
                marginTop: "1.5rem",
                fontSize: "clamp(1rem, 2vw, 1.5rem)",
                lineHeight: 1.5,
              }}
            >
              Espacios diseñados para promover un estilo de vida con
              movimiento, calma y comunidad.
            </motion.p>

            <motion.button
              style={{
                opacity: buttonOpacity,
                y: buttonY,
                marginTop: "1.25rem",
                padding: "0.9rem 1.4rem",
                borderRadius: "999px",
                border: "none",
                background: "white",
                color: "#333",
                fontWeight: 500,
                cursor: "pointer",
              }}
            >
              Conoce nuestras amenidades
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}