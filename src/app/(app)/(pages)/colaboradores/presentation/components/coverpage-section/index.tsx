import CoverPageV2 from '@/src/app/(app)/components/coverpage-v2'
import styles from '../../../colaboradores.module.css'
import { collaboratorsImagesdata } from '@/src/core/constants/image-data/collaborators-page'

interface CoverpageSectionProps {
    title?: string | null;
    subtitle?: string | null;
    coverSrc?: string | null;
    coverAlt?: string | null;
    coverBlurData?: string | null;
}

export default function CoverpageSection({
    title,
    subtitle,
    coverSrc,
    coverAlt,
    coverBlurData,
}: CoverpageSectionProps = {}) {
    return (
        <CoverPageV2
            title={{
                text: title ?? 'El origen de un oasis en la ciudad',
                className: styles.coverTitle,
            }}
            subtitle={{
                text: subtitle ?? 'Una visión respaldada por experiencia, diseño y compromiso.',
                className: styles.coverDescription,
            }}
            coverImage={{
                src: coverSrc ?? collaboratorsImagesdata.frontal_tower.src,
                alt: coverAlt ?? collaboratorsImagesdata.frontal_tower.alt,
                blurData: coverBlurData ?? collaboratorsImagesdata.frontal_tower.blurData,
            }}
            darkLayout
        />
    )
}
