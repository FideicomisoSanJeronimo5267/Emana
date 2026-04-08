import styles from './coverpage.module.css'
import Image from 'next/image';

interface CoverPageProps {
    coverImage: {
        className?: string;
        alt: string;
        src: string;
        blurData: string;
    }
}

export default function CoverPage(props: CoverPageProps) {
    return (
        <div className={styles.coverpage}>
            <Image
                className={`${styles.coverpage__image}`}
                src={props.coverImage.src}
                alt={props.coverImage.alt}
                placeholder="blur"
                objectFit='cover'
                blurDataURL={props.coverImage.blurData}
                fill
            />
            {/* <div className={styles.coverpage__content}>
                <h1>
                    Emana
                </h1>
            </div> */}
        </div>
    )
}