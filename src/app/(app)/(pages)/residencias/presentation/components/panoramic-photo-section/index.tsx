import Image from 'next/image'
import styles from '../../../residencias.module.css'
import { residencesImagesdata } from '@/src/core/constants/image-data/residences-page'

interface PanoramicPhotoSectionProps {
    src?: string | null;
    alt?: string | null;
    blurData?: string | null;
}

export default function PanoramicPhotoSection({
    src,
    alt,
    blurData,
}: PanoramicPhotoSectionProps = {}) {
    return (
        <div className={styles.panoramic__photo}>
            <Image
                className={styles.panoramic__photo__image}
                src={src ?? residencesImagesdata.socialArea.src}
                alt={alt ?? residencesImagesdata.socialArea.alt}
                placeholder="blur"
                blurDataURL={blurData ?? residencesImagesdata.socialArea.blurData}
                fill
            />
        </div>
    )
}
