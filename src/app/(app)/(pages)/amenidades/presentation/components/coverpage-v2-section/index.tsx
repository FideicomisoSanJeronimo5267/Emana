import CoverPageV2 from '@/src/app/(app)/components/coverpage-v2';
import styles from '../../../amenidades.module.css';

interface CoverpageV2SectionProps {
    title?: string | null;
    subtitle?: string | null;
    buttonTitle?: string | null;
    buttonHref?: string | null;
    coverSrc?: string | null;
    coverAlt?: string | null;
    coverBlurData?: string | null;
}

export default function CoverpageV2Section(props: CoverpageV2SectionProps) {
    return (
        <CoverPageV2
            title={{
                className: styles.coverTitle,
                text: props.title ?? '',
            }}
            subtitle={{
                className: styles.coverDescription,
                text: props.subtitle ?? '',
            }}
            button={props.buttonTitle ? { title: props.buttonTitle, href: props.buttonHref ?? '/contacto' } : undefined}
            coverImage={{
                className: styles.coverImage,
                src: props.coverSrc ?? '',
                alt: props.coverAlt ?? '',
                blurData: props.coverBlurData ?? '',
            }}
            darkLayout
        />
    );
}
