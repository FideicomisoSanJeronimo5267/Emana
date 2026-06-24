import Coverpage from "@/src/app/(app)/components/coverpage";
import { AmenitiesSection, FeaturesSection, LocationSection, OasisSection } from "../components";
import { BrochureSection, UnitsAvailable } from "../../../residencias/presentation/components";
import { AppointmentSection } from "@/src/app/(app)/components";
import MainAxisDivisor from "../components/main-axis-divisor";

export const PageSections = {
    coverpage: Coverpage,
    oasis: OasisSection,
    features: FeaturesSection,
    location: LocationSection,
    amenities: AmenitiesSection,
    unitsAvailable: UnitsAvailable,
    brochure: BrochureSection,
    appointment: AppointmentSection,
    divisor: MainAxisDivisor
}