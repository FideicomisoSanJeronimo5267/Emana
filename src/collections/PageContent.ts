import { CollectionConfig } from "payload";
import { CoverpageBlock } from "../blocks/homepage/coverpage.block";
import { OasisBlock } from "../blocks/homepage/oasis.block";
import { FeaturesBlock } from "../blocks/homepage/features-section";
import { DivisorBlock } from "../blocks/homepage/divisor.block";
import { LocationBlock } from "../blocks/homepage/location.block";
import { AmenitiesBlock } from "../blocks/homepage/amenities.block";
import { UnitsAvailableBlock } from "../blocks/homepage/units-available.block";
import { BrochureBlock } from "../blocks/homepage/brochure.block";
import { AppointmentBlock } from "../blocks/homepage/appoiment.block";
import { CoverpageV2Block } from "../blocks/amenidades/coverpage-v2.block";
import { AmenitiesMainSectionBlock } from "../blocks/amenidades/main-section.block";
import { AmenitiesGallerySectionBlock } from "../blocks/amenidades/gallery-section.block";
import { ResidenciasCoverpageBlock } from "../blocks/residencias/coverpage.block";
import { ResidenciasFeaturesBlock } from "../blocks/residencias/features.block";
import { ResidenciasPropertyTypeBlock } from "../blocks/residencias/property-type.block";
import { ResidenciasApartmentSectionBlock } from "../blocks/residencias/apartment-section.block";
import { ResidenciasVillasSectionBlock } from "../blocks/residencias/villas-section.block";
import { ResidenciasHeroBlock } from "../blocks/residencias/hero.block";
import { ResidenciasPanoramicPhotoBlock } from "../blocks/residencias/panoramic-photo.block";

export const PageContent: CollectionConfig = {
    slug: "page-content",
    fields: [
        {
            name: 'pageType',
            type: 'select',
            required: true,
            options: [
                {
                    label: 'Home',
                    value: 'home',
                },
                {
                    label: 'Development',
                    value: 'development',
                },
                {
                    label: 'Department',
                    value: 'department',
                },
                {
                    label: 'Amenidades',
                    value: 'amenidades',
                },
                {
                    label: 'Residencias',
                    value: 'residencias',
                },
            ],

        },
        {
            name: 'homeSections',
            type: 'blocks',
            blocks: [
                CoverpageBlock,
                OasisBlock,
                FeaturesBlock,
                DivisorBlock,
                LocationBlock,
                AmenitiesBlock,
                UnitsAvailableBlock,
                BrochureBlock,
                AppointmentBlock,
            ],
            admin: {
                condition: (_, siblingData) =>
                    siblingData.pageType === 'home',
            },
        },
        {
            name: 'amenidadesSections',
            type: 'blocks',
            blocks: [
                CoverpageV2Block,
                AmenitiesMainSectionBlock,
                AmenitiesGallerySectionBlock,
                DivisorBlock,
                BrochureBlock,
                AppointmentBlock,
            ],
            admin: {
                condition: (_, siblingData) =>
                    siblingData.pageType === 'amenidades',
            },
        },
        {
            name: 'residenciasSections',
            type: 'blocks',
            blocks: [
                ResidenciasCoverpageBlock,
                ResidenciasFeaturesBlock,
                ResidenciasPropertyTypeBlock,
                ResidenciasApartmentSectionBlock,
                ResidenciasVillasSectionBlock,
                ResidenciasHeroBlock,
                ResidenciasPanoramicPhotoBlock,
                UnitsAvailableBlock,
                DivisorBlock,
                BrochureBlock,
                AppointmentBlock,
            ],
            admin: {
                condition: (_, siblingData) =>
                    siblingData.pageType === 'residencias',
            },
        }
    ],
}