import { ENV } from "../../config/env";
import { ImageDataStructure } from "../../interfaces";

export const homepageImagesdata = {
    coverpage:{
        alt: "Emana home cover page",
        src: `${ENV.ASSETS_BASE_URL}/homepage/social-area-v1.webp`,
        blurData: "data:image/webp;base64,UklGRm4AAABXRUJQVlA4IGIAAAAQBACdASoUAAsAPm0skkWkIqGYBABABsSygE6ZQAExWWgpIc6fcEHMAAD+9Dj1S3QXZCGsFyVbSsy3kGoj7uGBS0yZNFotkopDbqVBCORi/WrW5C86I6KcuIYcxdVOAuAAAA=="
    },
    frontalTower:{
        alt: "Frontal Tower",
        src: `${ENV.ASSETS_BASE_URL}/homepage/frontal-tower.webp`,
        blurData: "data:image/webp;base64,UklGRqoAAABXRUJQVlA4IJ4AAADwBACdASoUABIAPm0wkkckIqGhKAqogA2JZwCw7AyF/c+z3up/Q+br+/UohlAJ7AAA/uo6qt3GIQ/X766Als2+lc/f/8+69m8HKkK1fvu2uVZqFh46Zu2UV68I+MElH5Q50WZGV2EGFraYbZfZxFZQPPLsthzwt7idEcLsP5KRPPOhgxKNOTbP/HrUzdQg2ShUUG1jnByxypMAK0AAAA=="
    },
    skyPool:{
        alt: "Sky Pool",
        src: `${ENV.ASSETS_BASE_URL}/homepage/rooftop.webp`,
        blurData: "data:image/webp;base64,UklGRngAAABXRUJQVlA4IGwAAADwAwCdASoUAAsAPm0skkWkIqGYBABABsSzgE6ACvPqfpNRszuu+boAAP7JYotnc11Ifh8ylsf6u4L4FYnZn9jOfC/mcKig8W0/xPu03jAG+XA07uHid56CS2gbSFjrGwJqlOwxO5V+LIJMAAA="
    },
    pool:{
        alt: "Pool",
        src: `${ENV.ASSETS_BASE_URL}/homepage/pool.webp`,
        blurData: "data:image/webp;base64,UklGRo4AAABXRUJQVlA4IIIAAAAQBACdASoUAA4APm0skkWkIqGYBABABsSygE6AD5N9q8W2eSPvEVTCAAD+kYVjO+DHUFiueSNyF4Vv+N7af+jB9Ag7meSqJD16Sa/VUgTlSqUr8DMsaEC1t3EBEiFErUNyWDC47yiLHydFSiJDzvnB4dm9+P/dzEOn1BlKzQJo3AAA"
    },
    grillDeck:{
        alt: "Grill Deck",
        src: `${ENV.ASSETS_BASE_URL}/homepage/grill-deck.webp`,
        blurData: "data:image/webp;base64,UklGRoIAAABXRUJQVlA4IHYAAADwAwCdASoUAA4APm0skkWkIqGYBABABsSygCo/RA1KOQUWox0P0QqAAP727WOXHcUO5NFgZVlUVgTiQa85iGh0bnR6v4kNmbWCXUODjLO828nFrh32+B4mxLrKjUiE/OWQpS/Jn/hsJtgvGv0tWmWSPieO0AAA"
    },
    businessCenter:{
        alt: "Business Center",
        src: `${ENV.ASSETS_BASE_URL}/homepage/business_center.webp`,
        blurData: "data:image/webp;base64,UklGRn4AAABXRUJQVlA4IHIAAADwAwCdASoUAA4APm0qkUWkIqGYBABABsSgCdMoAC8PxVmniv3iL6YgAP7qSW3h3jXbFcMfF3bOoNBfn3l+Ga08+S9jyb7xF0m+Zr2qTjhetbUY7b2TWqU7mV3Pvd89bs8ufHspH4obeQ0nowioBSviAAA="
    },
    emanaExperience:{
        alt: "Emana Experience",
        src: `${ENV.ASSETS_BASE_URL}/homepage/emana_experience.webp`,
        blurData: "data:image/webp;base64,UklGRlIAAABXRUJQVlA4IEYAAADQAwCdASoUAA4APm0qkUWkIqGYBABABsSzgFh2EPDCHlblVaA8aQAA/NPrhPnCC30k8tZvogkz1c4pwux+EZBnVYjavAAA"
    },

} satisfies ImageDataStructure;