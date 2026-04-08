"use client"

import { useInView } from "motion/react";
import { useEffect, useRef } from "react";

import styles from './lazy-animation.module.css'

interface LazyAnimationProps {
    children: React.ReactNode;
}

export default function LazyAnimation(props: LazyAnimationProps) {
    const ref = useRef(null)

    const isInView = useInView(ref, {
        once: true,
        margin: "0px 0px -100px 0px",
    });
    return (
        <div
            className={styles.wrapper}
            ref={ref}
            style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateY(0px)" : "translateY(40px)",
                transition: "opacity 0.6s ease, transform 0.6s ease",
            }}

        >
            {props.children}
        </div>
    );
}