import CoverpageSection from '../components/coverpage-section';
import {
    FeaturesSection,
    PropertyTypeSection,
    ApartmentSection,
    VillasSection,
    ResidencesHeroSection,
    PanoramicPhotoSection,
    UnitsAvailable,
    BrochureSection,
    ResidenciasDivisor,
} from '../components';
import { AppointmentSection } from '@/src/app/(app)/components';

export const ResidenciasPageSections = {
    residenciasCoverpage:        CoverpageSection,
    residenciasFeatures:         FeaturesSection,
    residenciasPropertyType:     PropertyTypeSection,
    residenciasApartmentSection: ApartmentSection,
    residenciasVillasSection:    VillasSection,
    residenciasHero:             ResidencesHeroSection,
    residenciasPanoramicPhoto:   PanoramicPhotoSection,
    unitsAvailable:              UnitsAvailable,
    divisor:                     ResidenciasDivisor,
    brochure:                    BrochureSection,
    appointment:                 AppointmentSection,
}
