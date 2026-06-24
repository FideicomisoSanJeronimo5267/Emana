import CoverpageV2Section from '../components/coverpage-v2-section';
import AmenitiesMainSection from '../components/amenities-main-section';
import AmenitiesGallerySection from '../components/amenities-gallery-section';
import AmenidadesDivisor from '../components/amenidades-divisor';
import { BrochureSection } from '../../../residencias/presentation/components';
import { AppointmentSection } from '@/src/app/(app)/components';

export const AmenidadesPageSections = {
    amenidadesCoverpage:      CoverpageV2Section,
    amenidadesMainSection:    AmenitiesMainSection,
    amenidadesGallerySection: AmenitiesGallerySection,
    divisor:                  AmenidadesDivisor,
    brochure:                 BrochureSection,
    appointment:              AppointmentSection,
}
