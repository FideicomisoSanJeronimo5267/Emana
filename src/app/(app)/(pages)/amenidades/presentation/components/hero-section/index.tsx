import React from 'react';
import styles from './hero-section.module.css';
import Button from '@/src/app/components/button';

interface HeroSectionProps {
  text: string;
  buttonText: string;
  onButtonClick?: () => void;
}

export default function HeroSection({ text, buttonText, onButtonClick }: HeroSectionProps) {
  return (
    <section className={styles.heroSection}>
      <p className={styles.heroText}>
        {text}
      </p>
      <Button className={styles.heroButton} onClick={onButtonClick}>
        {buttonText}
      </Button>
    </section>
  );
}