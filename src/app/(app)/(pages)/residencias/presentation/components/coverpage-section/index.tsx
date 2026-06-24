import CoverPageV2 from '@/src/app/(app)/components/coverpage-v2'
import styles from '../../../residencias.module.css'
import { residencesImagesdata } from '@/src/core/constants/image-data/residences-page'

interface CoverpageSectionProps {
    title?: string | null;
    subtitle?: string | null;
    buttonTitle?: string | null;
    buttonHref?: string | null;
    coverSrc?: string | null;
    coverAlt?: string | null;
    coverBlurData?: string | null;
}

export default function CoverpageSection({
    title,
    subtitle,
    buttonTitle,
    buttonHref,
    coverSrc,
    coverAlt,
    coverBlurData,
}: CoverpageSectionProps = {}) {
    return (
        <CoverPageV2
            title={{
                text: title ?? 'Residencias para habitar con propósito',
                className: styles.coverTitle,
            }}
            subtitle={{
                text: subtitle ?? 'Departamentos y villas que emanan equilibrio, funcionalidad y diseño.',
                className: styles.coverDescription,
            }}
            button={{
                title: buttonTitle ?? 'Conoce tu nuevo hogar',
                href: buttonHref ?? '/contacto',
            }}
            coverImage={{
                src: coverSrc ?? residencesImagesdata.coverpage.src,
                alt: coverAlt ?? residencesImagesdata.coverpage.alt,
                blurData: coverBlurData ?? residencesImagesdata.coverpage.blurData,
            }}
        />
    )
}
