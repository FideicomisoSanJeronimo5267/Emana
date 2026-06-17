import { AppointmentSection } from '@/src/app/(app)/components';
import { amenitiesImagesData } from '@/src/core/constants/image-data/amenities-page';

export default function ExperienceSection() {
    return (
        <AppointmentSection
            title="VISÍTANOS Y VIVE LA EXPERIENCIA EMANA"
            description="Agenda tu recorrido hoy mismo"
            coverImage={amenitiesImagesData.emanaExperience.src}
            blurDataURL={amenitiesImagesData.emanaExperience.blurData}
            hideButton
        />
    );
}