import Template1 from './Templates/Template1';
import Template2 from './Templates/Template2';

const templateMap = {
    'template1': Template1,
    'template2': Template2,
};

/**
 * TemplateRenderer - Dynamically renders page templates based on Strapi data
 * @param {Object} pageData - Page data from Strapi
 * @returns {JSX.Element} - Selected template component
 */
export default function TemplateRenderer({ pageData }) {
    // Determine template based on slug (until template field is added to CMS)
    // Home page uses Template2 (full-width), other pages use Template1 (sidebar)
    const templateName = pageData?.slug === 'home' ? 'template2' : 'template1';

    // Get the template component
    const TemplateComponent = templateMap[templateName];

    if (!TemplateComponent) {
        console.warn(`Template "${templateName}" not found. Defaulting to Template1.`);
        return <Template1 pageData={pageData} />;
    }

    return <TemplateComponent pageData={pageData} />;
}
