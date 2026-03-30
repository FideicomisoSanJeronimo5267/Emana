import { ENV } from "../../config/env"; 
import { ImageDataStructure } from "../../interfaces";

export const contactImagesData = {
    
    contactEmanaExperienceBg: {
        alt: "Contact Emana experience background",
        src: `${ENV.ASSETS_BASE_URL}/contacto/contact_emana_experience_bg.webp`,
        blurData: "data:image/webp;base64,UklGRmYAAABXRUJQVlA4IFoAAACQAwCdASoUAA0APm0qkUWkIqGYBABABsS0gAAt+B3mvvp/BTBAAP78SJGcu6wNaSoEzQimWdcdVa9DruhzBAL0cRThI6bXrBSNgPuWvf7+PgLV4D08MAIAAAA="
    }
} satisfies ImageDataStructure;