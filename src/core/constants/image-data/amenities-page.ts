import { ENV } from "../../config/env";
import { ImageDataStructure } from "../../interfaces";

export const amenitiesImagesData = {
    businessCenter: {
        alt: "Business center",
        src: `${ENV.ASSETS_BASE_URL}/amenities/business_center.webp`,
        blurData: "data:image/webp;base64,UklGRnwAAABXRUJQVlA4IHAAAAAwBACdASoUAA4APm0skkWkIqGYBABABsSgCdMoB3AA8tdtrA4n+i296YAA/uojOauwJyF3yieymxeefmBuh6QzQnm4GpFp10A83ouE5xuE+O/a7vUxhcVSQTXHnYXWvGVzGYeVFpqQlvdR2q11tAAA"
    },
    familyPoolV2: {
        alt: "Family pool version 2",
        src: `${ENV.ASSETS_BASE_URL}/amenities/family_pool_v2.webp`,
        blurData: "data:image/webp;base64,UklGRrIAAABXRUJQVlA4WAoAAAAQAAAAEwAADQAAQUxQSBkAAAABD9D/iAgoCECGcfp3Uo4tQkT/JwDvcRkBAFZQOCByAAAA8AMAnQEqFAAOAD5tLJJFpCKhmAQAQAbEsoBadAuJ+Yb0NHCUp1gEAAD+9ffcwpSr2wSUeFY2wr9p0eRbPrK852DQ310zrk+yxdiqgzxYYV4Offy3q7MFoXLc7qgRuAVMMOU0o+OHmcr9IMQDHV7thAAA"
    },
    familyPool: {
        alt: "Family pool",
        src: `${ENV.ASSETS_BASE_URL}/amenities/family_pool.webp`,
        blurData: "data:image/webp;base64,UklGRooAAABXRUJQVlA4IH4AAADwAwCdASoUAA4APm0skkWkIqGYBABABsSygE6AD5N9DXe0bbnhlX3gAP6RhWM74MdQWK55I3IXhW/43tp/6MH0CGiWBFK8Z+4Wd+qM10uMr5A91uDLlUwBJhHErUPoZ19VINF/4pSQ8VC1vmrFaXdAV6EoXNuURvwu9OAAAAA="
    },
    grillDeckV2: {
        alt: "Grill deck version 2",
        src: `${ENV.ASSETS_BASE_URL}/amenities/grill_deck_v2.webp`,
        blurData: "data:image/webp;base64,UklGRoAAAABXRUJQVlA4IHQAAACwAwCdASoUAA4APm0qkkWkIqGYBABABsSygAAw+2M0eYAUgXYsAAD+9u1jlyTSSG8JDAqrZIiZcED/2IB9cv3pI7uUjeYYoakkvXcMsMu+Iwvz8j5aetp5uFqMhIo4TOWuSAEN/HjCaijnSqgIMGCppKgAAA=="
    },
    grillDeck: {
        alt: "Grill deck",
        src: `${ENV.ASSETS_BASE_URL}/amenities/grill_deck.webp`,
        blurData: "data:image/webp;base64,UklGRoAAAABXRUJQVlA4IHQAAACwAwCdASoUAA4APm0qkkWkIqGYBABABsSygAAw+2M0eYAUgXYsAAD+9u1jlyTSSG8JDAqrZIiZcED/2IB9cv3pI7uUjeYYoakkvXcMsMu+Iwvz8j5aetp5uFqMhIo4TOWuSAEN/HjCaijnSqgIMGCppKgAAA=="
    },
    skyPool: {
        alt: "Sky pool",
        src: `${ENV.ASSETS_BASE_URL}/amenities/sky_pool.webp`,
        blurData: "data:image/webp;base64,UklGRnoAAABXRUJQVlA4IG4AAAAQBACdASoUAAsAPm0skkWkIqGYBABABsSzgE6Qf4D4VfPdCEB0SXHQAAD+yWKLZ3NdSH4fMpbH+ruC+BWJ2Z/Yznwv5nCooPFtP8T7tN4wBvlsoCHPZGxy3reA/A0YAPFBQWMRtC2ABR7XssAAAA=="
    },
    sportBar: {
        alt: "Sport bar",
        src: `${ENV.ASSETS_BASE_URL}/amenities/sport_bar.webp`,
        blurData: "data:image/webp;base64,UklGRmQAAABXRUJQVlA4IFgAAACwAwCdASoUAAwAPm0qkUWkIqGYBABABsSygF2XgACZbKBK7eA8CAD87ji/qJX0zj91HnT4tStkA0N2l0vz12IO5Ll0iuNIt9Tg31jOykftZIr8XIDsTeAA"
    },
    toyLibrary: {
        alt: "Toy library",
        src: `${ENV.ASSETS_BASE_URL}/amenities/toy_library.webp`,
        blurData: "data:image/webp;base64,UklGRmwAAABXRUJQVlA4IGAAAACwAwCdASoUAAoALk02m02hJCQkBABMSxgE6ZQANXkiVDqHnLhzAAD+6ExSHF+xuK+mALpzb3EVRFlNUQ3KqCzcRFh6mJIb+3wRda3sy35rLLhmCkzCSAruoBklUWuAAAA="
    },
    emanaExperience: {
        alt: "Emana experience",
        src: `${ENV.ASSETS_BASE_URL}/amenities/emana-experience.webp`,
        blurData: "data:image/webp;base64,UklGRlQAAABXRUJQVlA4IEgAAACQAwCdASoUAA0APm0uk0YkIqGhMAgAgA2JaQAAW7fp0OmrWAiAAP75iK3Fv/nLQiiBSyigWRr0aTqmHKAm9J9Ooi4gcGas4AA="
    }
} satisfies ImageDataStructure;