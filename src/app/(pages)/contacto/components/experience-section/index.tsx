import AppointmentSection from '@/src/app/components/appoiment-section';
import { contactImagesData } from '@/src/core/constants/image-data/contacto-page';

export default function ExperienceSection() {
    return (
        <AppointmentSection 
            title="VISÍTANOS Y VIVE LA EXPERIENCIA EMANA"
            description="Agenda tu recorrido hoy mismo"
            coverImage={contactImagesData.contactEmanaExperienceBg.src}
            blurDataURL={contactImagesData.contactEmanaExperienceBg.blurData}
        />
    );
}