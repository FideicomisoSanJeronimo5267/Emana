export const ENV = {
    ASSETS_BASE_URL: process.env.NEXT_PUBLIC_ASSETS_BASE_URL || 'http://localhost:3000/assets',
    //TODO: add NEXT_PUBLIC_MAPBOX_TOKEN
    // API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
    GHL_API_KEY: process.env.GHL_API_KEY || "",
    GHL_LOCATION_ID: process.env.GHL_LOCATION_ID || "",
    BROCHURE_URL: process.env.NEXT_PUBLIC_BROCHURE_URL || "",
}