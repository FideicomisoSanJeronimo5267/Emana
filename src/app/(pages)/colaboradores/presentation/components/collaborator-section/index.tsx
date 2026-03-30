import Image from 'next/image';
import styles from './collaborator-section.module.css';

interface CollaboratorProps {
    name: string;
    description: string;
    image: {
        src: string;
        alt: string;
        blurData: string;
    };
    isReversed?: boolean;
    logo: string;
}

export default function CollaboratorSection({ name, description, image, isReversed = false, logo }: CollaboratorProps) {
    return (
        <section className={`${styles.collaboratorSection} ${isReversed ? styles.reversed : ''}`}>
            <div className={styles.collaboratorInfo}>
                <h3 className={styles.collaboratorName}>{name}</h3>
                <p className={styles.collaboratorDescription}>{description}</p>

                <div className={styles.logoPlaceholder}>
                    <Image
                        src={logo}
                        alt={name}
                        fill
                        className={styles.logo}
                    />

                </div>
            </div>
            <div className={styles.collaboratorImageWrapper}>
                <Image
                    src={image.src}
                    alt={image.alt}

                    className={styles.collaboratorImage}
                    placeholder={"blur"}
                    blurDataURL={image.blurData}

                    fill
                />
            </div>
        </section>
    );
}

