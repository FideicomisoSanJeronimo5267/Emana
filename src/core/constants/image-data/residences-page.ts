import { ENV } from "../../config/env";
import { ImageDataStructure } from "../../interfaces";

export const residencesImagesdata = {
    coverpage:{
        alt: "Residences cover page",
        src: `${ENV.ASSETS_BASE_URL}/residences/residences-cover-bg.webp`,
        blurData: "data:image/webp;base64,UklGRnoAAABXRUJQVlA4IG4AAADwAwCdASoUAAsAPm0skkWkIqGYBABABsSgCdMoRwABMslxPet0DQJAAP7ax2iGiRm5CPAWj8uKNb313ylQs7ETeMqt2T75j+ITbVU3u8BPqtX870z0nIKhtfXDulZIBYrdULdGKvLK7CAzVMAAAA=="
    },
    apartmentsBG:{
        alt: "Apartments background",
        src: `${ENV.ASSETS_BASE_URL}/residences/residences-apartments-bg.webp`,
        blurData: "data:image/webp;base64,UklGRnoAAABXRUJQVlA4IG4AAAAwBACdASoUAAwAPm0qkUWkIqGYBABABsSgCdMoMYAEt2uH0AsgVUxnWQAA2/k77mCYE9JLbMLyHJCJ+FeNNEBqulm0QuGTAkR+Lj4wfH3Aoz4O5KwmGSHHhMDZEoX2E75uacaALpBdm7rUhUIAAA=="
    },
    villasBG:{
        alt: "Villas background",
        src: `${ENV.ASSETS_BASE_URL}/residences/residences-villas-bg.webp`,
        blurData: "data:image/webp;base64,UklGRm4AAABXRUJQVlA4IGIAAAAQBACdASoUAAsAPm0skkWkIqGYBABABsSygE6ZQAExWXVAIMQI67RMwAD+9DTKjrfZSwopNv29EgOdsKgrYKXInflmS3cFslFIbdSoIRyMX61a3IXnRHRqx81P8CMwAFAAAA=="
    },
    appointmentBG:{
        alt: "Appointment background",
        src: `${ENV.ASSETS_BASE_URL}/residences/residences-footer-bg.webp`,
        blurData: "data:image/webp;base64,UklGRm4AAABXRUJQVlA4IGIAAACQAwCdASoUAA0APm0skkWkIqGYBABABsSzgF2ADbWeuXT7SknAAPzZdwL4ht5CoYyAsdytFDfm7bT0hSTXWfiwf06svRDu5OKc1XWy/O2bh+03F8kaTXHQmzpt37tP5UAAAA=="
    },
    socialArea:{
        alt: "Social area background",
        src: `${ENV.ASSETS_BASE_URL}/residences/residences-social-area.webp`,
        blurData: "data:image/webp;base64,UklGRn4AAABXRUJQVlA4IHIAAADwAwCdASoUAAoAPm0skUWkIqGYBABABsSxgE6ZQAFagAtJtfnRspRAAP6rrNZJTcUke9ehAJ2qitNiuB7KydLYT95xJWEcKFJR43+mNTjhrdi+TejuyCsq5mSesLnLhldfIgZri/fHt9xphd8uTBGAAAA="
    
    },
    socialAreaT4:{
        alt: "Social area T4 background",
        src: `${ENV.ASSETS_BASE_URL}/residences/residences-t4-social-area.webp`,
        blurData: "data:image/webp;base64,UklGRnoAAABXRUJQVlA4IG4AAADwAwCdASoUAAsAPm0skkWkIqGYBABABsSxgE6ADROGCPauiUSyMdgAAP7rl/KqQuj6XOELuQlw80O3VWLLPTOSuJv/tu+eqqevytytJpGVr/EBZEefGloi1ss9RzPoDXddZ0usUROhU4P3gewAAA=="
    },
    bedroom:{
        alt: "Bedroom background",
        src: `${ENV.ASSETS_BASE_URL}/residences/residences-v2-bedroom-a.webp`,
        blurData: "data:image/webp;base64,UklGRnoAAABXRUJQVlA4IG4AAADwAwCdASoUAAsAPm0skkWkIqGYBABABsSxgE6ZQAEXV7mmu2vzRAbwAPkKaxt1wrsrU23nvy5S8AHxFwNvf7Ix7Qz3tW4iGe5/BBtoNzM0bBuE+K2ynVYUevFztsIGu52p2wzxbJTOE3+2jbIAAA=="
    },
    rooftop:{
        alt: "Rooftop background",
        src: `${ENV.ASSETS_BASE_URL}/residences/residences-v3-rooftop.webp`,
        blurData: "data:image/webp;base64,UklGRmYAAABXRUJQVlA4IFoAAAAQBACdASoUAAkAPm0ukkYkIqGhMAgAgA2JZQCdACP8+XxjVNHFctssAAD+8wuy5RfFxBJKBvZnCzsWES5qeAVHCdTMrEFRJXVEpIYjc4YKZq9YIrLWvF8AAAA="
    }
} satisfies ImageDataStructure;