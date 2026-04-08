import { ENV } from "../../config/env";
import { ImageDataStructure } from "../../interfaces";

export const collaboratorsImagesdata = {
    frontal_tower: {
        alt: "Frontal tower",
        src: `${ENV.ASSETS_BASE_URL}/collaborators/tower-frontal-view.webp`,
        blurData: "data:image/webp;base64,UklGRqoAAABXRUJQVlA4IJ4AAADwBACdASoUABIAPm0wkkckIqGhKAqogA2JZwCw7AyF/c+z3up/Q+br+/UohlAJ7AAA/uo6qt3GIQ/X766Als2+lc/f/8+69m8HKkK1fvu2uVZqFh46Zu2UV68I+MElH5Q50WZGV2EGFraYbZfZxFZQPPLsthzwt7idEcLsP5KRPPOhgxKNOTbP/HrUzdQg2ShUUG1jnByxypMAK0AAAA=="
    },
    one_development_group: {
        alt: "One development group",
        src: `${ENV.ASSETS_BASE_URL}/collaborators/one_development_group.webp`,
        blurData: "data:image/webp;base64,UklGRn4AAABXRUJQVlA4IHIAAACwAwCdASoUAA0APm0skkWkIqGYBABABsSygFYAChji5auGyC9aYAD+7m39pHgEYqp83oyhAwkB1OR99URbSCY8UV1xDk9znUKqxdFhdKcUCh+vTo8VAZtgDTMRGFQHgzmc65Yy7HBuIdQd/Nh3g+gYAAA="
    },
    jsa: {
        alt: "JSA",
        src: `${ENV.ASSETS_BASE_URL}/collaborators/jsa.webp`,
        blurData: "data:image/webp;base64,UklGRoQAAABXRUJQVlA4IHgAAABwBACdASoUAAsAPm0qkUWkIqGYBABABsSzAE6ZQjuEgAA10JJXvIBeM30dQAD+6UklllissmEHWFE03lydK6MNJpEWgnyp3Xynr2DwE1AJVdnxQeq0aF8qkK2o/7okE26vrQvhnFPA8al1p0EHKhFnRQ4jIERIAAA="
    },
    esrawe: {
        alt: "Esrawe",
        src: `${ENV.ASSETS_BASE_URL}/collaborators/esrawe.webp`,
        blurData: "data:image/webp;base64,UklGRuoAAABXRUJQVlA4IN4AAACQBgCdASoUAB4APm0skEWkIqGYDAYAQAbEoAnTKEgC+mknk4K5cs5ViH0wPSKyvAax7fCtmP2JIumON6xAAP7o/uL8qfWXVkEYkyytXLEr7NXjnnVTYVJqybI5ggwuLR2hz9RY6KYt+0IKrTh3/XvR0+H9CvB515kW/XNgIpGftTKniAC6BfA2dG8nVSj6EFzb1UG+VOggl/JzvqVV0rRZhAC3Iki7ASUqkHfsjuF6DXcNfx63DpKIpA6x0PFAb/mbK8lQeJFA2kYxsd5gFg5CZrfTHRuQZ2sEawGYAAA="
    },
    emana_experience: {
        alt: "emana_experience",
        src: `${ENV.ASSETS_BASE_URL}/collaborators/emana-experience.webp`,
        blurData: "data:image/webp;base64,UklGRsIAAABXRUJQVlA4ILYAAADwBQCdASoUACQAPm0ukkWkIqGVXAb8QAbEtIvAABpRgGL/3Utl9FqPPlyNitWWdppN6uJcCsaC0AD+x1NJ2BQasB58pAJCSRyjL1Q38Xuo4epCn0b9U9aekt9J6Xl33J+Xj4b7hfh9CvKimuhQsT49DE5VZUBROoM4ubla4juP64Q0FLAy1el4ecyX3xdr63WRKNn8kd9bMlL9OH7oJx5R7THdO+tnSy6aeuRjppjtoHiQDMAAAA=="
    }
} satisfies ImageDataStructure;





/* {
  'https://dlsxqwz0ptmx4.cloudfront.net/collaborators/one_development_group.webp': 'data:image/webp;base64,UklGRn4AAABXRUJQVlA4IHIAAACwAwCdASoUAA0APm0skkWkIqGYBABABsSygFYAChji5auGyC9aYAD+7m39pHgEYqp83oyhAwkB1OR99URbSCY8UV1xDk9znUKqxdFhdKcUCh+vTo8VAZtgDTMRGFQHgzmc65Yy7HBuIdQd/Nh3g+gYAAA=',     
  'https://dlsxqwz0ptmx4.cloudfront.net/collaborators/jsa.webp': 'data:image/webp;base64,UklGRoQAAABXRUJQVlA4IHgAAABwBACdASoUAAsAPm0qkUWkIqGYBABABsSzAE6ZQjuEgAA10JJXvIBeM30dQAD+6UklllissmEHWFE03lydK6MNJpEWgnyp3Xynr2DwE1AJVdnxQeq0aF8qkK2o/7okE26vrQvhnFPA8al1p0EHKhFnRQ4jIERIAAA=',
  'https://dlsxqwz0ptmx4.cloudfront.net/collaborators/esrawe.webp': 'data:image/webp;base64,UklGRuoAAABXRUJQVlA4IN4AAACQBgCdASoUAB4APm0skEWkIqGYDAYAQAbEoAnTKEgC+mknk4K5cs5ViH0wPSKyvAax7fCtmP2JIumON6xAAP7o/uL8qfWXVkEYkyytXLEr7NXjnnVTYVJqybI5ggwuLR2hz9RY6KYt+0IKrTh3/XvR0+H9CvB515kW/XNgIpGftTKniAC6BfA2dG8nVSj6EFzb1UG+VOggl/JzvqVV0rRZhAC3Iki7ASUqkHfsjuF6DXcNfx63DpKIpA6x0PFAb/mbK8lQeJFA2kYxsd5gFg5CZrfTHRuQZ2sEawGYAAA=',
  'https://dlsxqwz0ptmx4.cloudfront.net/collaborators/emana-experience.webp': 'data:image/webp;base64,UklGRsIAAABXRUJQVlA4ILYAAADwBQCdASoUACQAPm0ukkWkIqGVXAb8QAbEtIvAABpRgGL/3Utl9FqPPlyNitWWdppN6uJcCsaC0AD+x1NJ2BQasB58pAJCSRyjL1Q38Xuo4epCn0b9U9aekt9J6Xl33J+Xj4b7hfh9CvKimuhQsT49DE5VZUBROoM4ubla4juP64Q0FLAy1el4ecyX3xdr63WRKNn8kd9bMlL9OH7oJx5R7THdO+tnSy6aeuRjppjtoHiQDMAAAA=='
} */