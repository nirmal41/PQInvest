import Header from './Headers/Header';
// import Header2 from './Headers/Header2';
// Import more header variants as you create them

/**
 * Maps Strapi header documentIds to React Header components
 */
const headerMap = {
    'p0h90el3wpopzdnk36uee753': Header,  // Main Header
    // 'abc232': Header2,  // Add more headers as needed
};

/**
 * Dynamically renders the correct Header based on documentId
 */
export default function DynamicHeaderRenderer({ data }) {
    if (!data || !data.documentId) {
        console.warn('Header data missing or no documentId:', data);
        return <Header data={data} />; // Fallback to default Header
    }

    const HeaderComponent = headerMap[data.documentId];

    if (!HeaderComponent) {
        console.warn(`No Header component found for documentId: ${data.documentId}, using default`);
        return <Header data={data} />; // Fallback to default Header
    }

    return <HeaderComponent data={data} />;
}
