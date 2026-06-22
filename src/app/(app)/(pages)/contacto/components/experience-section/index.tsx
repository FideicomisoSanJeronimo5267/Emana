import { AppointmentSection } from '@/src/app/(app)/components';
import { amenitiesImagesData } from '@/src/core/constants/image-data/amenities-page';

interface ExperienceSectionProps {
    title?: string | null;
    description?: string | null;
    coverImage?: string | null;
    blurDataURL?: string | null;
}

export default function ExperienceSection({
    title,
    description,
    coverImage,
    blurDataURL,
}: ExperienceSectionProps = {}) {
    return (
        <AppointmentSection
            title={title ?? 'VISÍTANOS Y VIVE LA EXPERIENCIA EMANA'}
            description={description ?? 'Agenda tu recorrido hoy mismo'}
            coverImage={coverImage ?? amenitiesImagesData.emanaExperience.src}
            blurDataURL={blurDataURL ?? amenitiesImagesData.emanaExperience.blurData}
            hideButton
        />
    );
}
