import React from 'react';
import styles from './project-details-banner.module.css';
import Button from '../button';

export default function ProjectDetailsBanner() {
  return (
    <section className={styles.banner}>
      <h3 className={styles.title}>
        Conoce todos los detalles detrás del proyecto.
      </h3>

      <Button className={styles.buttonWrapper}>
        <span className={styles.buttonText}>Descarga el Brochure</span>
        <div className={styles.iconContainer}>
          {/* Icon vertical_align_bottom placeholder */}
          <span className={styles.iconInner}></span>
        </div>
      </Button>
    </section>
  );
}
