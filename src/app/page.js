import { getPageBySlug } from "@/lib/strapi";
import Footer from "@/components/Footers/Footer";
import DynamicHeaderRenderer from "@/components/DynamicHeaderRenderer";
import TemplateRenderer from "@/components/TemplateRenderer";
import React from "react";

// Generate dynamic metadata for SEO
export async function generateMetadata() {
  const pageData = await getPageBySlug(['home']);

  if (!pageData || !pageData.metaTag || !Array.isArray(pageData.metaTag)) {
    return {
      title: 'Pak-Qatar Family Takaful',
      description: 'Pak-Qatar Family Takaful - Trusted Islamic Insurance',
    };
  }

  // Parse metaTag array to extract metadata
  const metaTagMap = {};
  pageData.metaTag.forEach(tag => {
    metaTagMap[tag.title] = tag.Content;
  });

  return {
    title: metaTagMap['title'] || 'Pak-Qatar Family Takaful',
    description: metaTagMap['description'] || 'Pak-Qatar Family Takaful - Trusted Islamic Insurance',
    keywords: metaTagMap['keywords'] || '',
  };
}


export default async function HomePage() {
  // Fetch the page with slug "home" from Strapi
  const pageData = await getPageBySlug(['home']);

  if (!pageData) {
    console.log("Home page not found in Strapi");
    return (
      <div className="p-10 text-red-600">
        <h1 className="text-2xl font-bold">Home Page Not Found</h1>
        <p>Could not find a page in Strapi with slug: <strong>home</strong></p>
        <p className="mt-4 text-gray-600 text-sm">Please create a page with slug "home" in Strapi.</p>
      </div>
    );
  }

  return (
    <React.Fragment>
      <DynamicHeaderRenderer data={pageData.header} />
      <main className="overflow-x-hidden">
        <TemplateRenderer pageData={pageData} />
      </main>
      <Footer data={pageData} />
    </React.Fragment>
  );
}