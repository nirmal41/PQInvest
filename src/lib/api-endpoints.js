// API Endpoints Configuration
const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://127.0.0.1:2555";

export const API_ENDPOINTS = {
    // Web Pages
    WEB_PAGES: '/api/web-pages',

    // Google Analytics
    GOOGLE_TAG: '/api/gtag',

    // Add more endpoints here as needed
};

export { STRAPI_URL };
