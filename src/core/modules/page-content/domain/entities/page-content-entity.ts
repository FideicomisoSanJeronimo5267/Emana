export interface PageContentEntity {
    id: string;
    pageType: 'home' | 'development' | 'department' | 'amenidades' | 'residencias' | 'colaboradores';
    homeSections?:
    | (
        | {
            alt?: string | null;
            src?: string | null;
            blurData?: string | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'coverpage';
        }
        | {
            title?: string | null;
            description?: string | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'oasis';
        }
        | {
            features?:
            | {
                title: string;
                description?: string | null;
                icon: string;
                id?: string | null;
            }[]
            | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'features';
        }
        | {
            id?: string | null;
            blockName?: string | null;
            blockType: 'divisor';
        }
        | {
            coverSrc?: string | null;
            coverAlt?: string | null;
            coverBlurData?: string | null;
            title?: string | null;
            description?: string | null;
            importantLocations?: {
                icon?: string | null;
                description?: string | null;
                id?: string | null;
            }[] | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'location';
        }
        | {
            title?: string | null;
            description?: string | null;
            linkText?: string | null;
            amenities?: {
                name?: string | null;
                description?: string | null;
                imageSrc?: string | null;
                imageAlt?: string | null;
                imageBlurData?: string | null;
                id?: string | null;
            }[] | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'amenities';
        }
        | {
            title?: string | null;
            buttonTitle?: string | null;
            headerDescription?: string | null;
            footerDescription?: string | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'unitsAvailable';
        }
        | {
            title?: string | null;
            description?: string | null;
            titleFont?: string | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'brochure';
        }
        | {
            title?: string | null;
            description?: string | null;
            coverImage?: string | null;
            blurDataURL?: string | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'appointment';
        }
    )[]
    | null;
    residenciasSections?:
    | (
        | {
            title?: string | null;
            subtitle?: string | null;
            buttonTitle?: string | null;
            buttonHref?: string | null;
            coverSrc?: string | null;
            coverAlt?: string | null;
            coverBlurData?: string | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'residenciasCoverpage';
        }
        | {
            features?: { text?: string | null; id?: string | null }[] | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'residenciasFeatures';
        }
        | {
            apartments?: {
                title?: string | null;
                description?: string | null;
                buttonText?: string | null;
                bgSrc?: string | null;
                bgAlt?: string | null;
                bgBlurData?: string | null;
            } | null;
            villas?: {
                title?: string | null;
                description?: string | null;
                buttonText?: string | null;
                bgSrc?: string | null;
                bgAlt?: string | null;
                bgBlurData?: string | null;
            } | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'residenciasPropertyType';
        }
        | {
            title?: string | null;
            description?: string | null;
            features?: { text?: string | null; id?: string | null }[] | null;
            imageSrc?: string | null;
            imageAlt?: string | null;
            imageBlurData?: string | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'residenciasApartmentSection';
        }
        | {
            title?: string | null;
            description?: string | null;
            features?: { text?: string | null; id?: string | null }[] | null;
            imageSrc?: string | null;
            imageAlt?: string | null;
            imageBlurData?: string | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'residenciasVillasSection';
        }
        | {
            title?: string | null;
            description?: string | null;
            bgSrc?: string | null;
            bgAlt?: string | null;
            bgBlurData?: string | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'residenciasHero';
        }
        | {
            src?: string | null;
            alt?: string | null;
            blurData?: string | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'residenciasPanoramicPhoto';
        }
        | {
            title?: string | null;
            buttonTitle?: string | null;
            headerDescription?: string | null;
            footerDescription?: string | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'unitsAvailable';
        }
        | {
            id?: string | null;
            blockName?: string | null;
            blockType: 'divisor';
        }
        | {
            title?: string | null;
            description?: string | null;
            titleFont?: string | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'brochure';
        }
        | {
            title?: string | null;
            description?: string | null;
            coverImage?: string | null;
            blurDataURL?: string | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'appointment';
        }
    )[]
    | null;
    amenidadesSections?:
    | (
        | {
            title?: string | null;
            subtitle?: string | null;
            buttonTitle?: string | null;
            buttonHref?: string | null;
            coverSrc?: string | null;
            coverAlt?: string | null;
            coverBlurData?: string | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'amenidadesCoverpage';
        }
        | {
            amenities?: {
                title?: string | null;
                description?: string | null;
                imageSrc?: string | null;
                imageAlt?: string | null;
                imageBlurData?: string | null;
                applyGrillDeckZoom?: boolean | null;
                id?: string | null;
            }[] | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'amenidadesMainSection';
        }
        | {
            amenities?: {
                title?: string | null;
                description?: string | null;
                galleryDescription?: string | null;
                imageSrc?: string | null;
                imageAlt?: string | null;
                imageBlurData?: string | null;
                galleryImageSrc?: string | null;
                galleryImageAlt?: string | null;
                galleryImageBlurData?: string | null;
                id?: string | null;
            }[] | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'amenidadesGallerySection';
        }
        | {
            id?: string | null;
            blockName?: string | null;
            blockType: 'divisor';
        }
        | {
            title?: string | null;
            description?: string | null;
            titleFont?: string | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'brochure';
        }
        | {
            title?: string | null;
            description?: string | null;
            coverImage?: string | null;
            blurDataURL?: string | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'appointment';
        }
    )[]
    | null;
    colaboradoresSections?:
    | (
        | {
            title?: string | null;
            subtitle?: string | null;
            coverSrc?: string | null;
            coverAlt?: string | null;
            coverBlurData?: string | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'colaboradoresCoverpage';
        }
        | {
            collaborators?: {
                name?: string | null;
                description?: string | null;
                imageSrc?: string | null;
                imageAlt?: string | null;
                imageBlurData?: string | null;
                logoSrc?: string | null;
                id?: string | null;
            }[] | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'colaboradoresList';
        }
        | {
            title?: string | null;
            description?: string | null;
            titleFont?: string | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'brochure';
        }
        | {
            title?: string | null;
            description?: string | null;
            coverImage?: string | null;
            blurDataURL?: string | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'appointment';
        }
    )[]
    | null;
    updatedAt: string;
    createdAt: string;
}