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
        }
    ],
}