import React from 'react';
import styles from './collaborator-section.module.css';

interface CollaboratorSectionProps {
  title: string;
  description: string;
  imageAlt: string;
  logoAlt: string;
  logoWidth: string;
  logoHeight: string;
  reversed?: boolean;
}

export default function CollaboratorSection({
  title,
  description,
  imageAlt,
  logoAlt,
  logoWidth,
  logoHeight,
  reversed = false,
}: CollaboratorSectionProps) {
  return (
    <section className={`${styles.section} ${reversed ? styles.reversed : ''}`}>
      <div className={styles.imagePlaceholder}>
        <span>{imageAlt}</span>
      </div>

      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <div
          className={styles.logoPlaceholder}
          style={{ width: logoWidth, height: logoHeight }}
        >
          <span>{logoAlt}</span>
        </div>
      </div>
    </section>
  );
}
