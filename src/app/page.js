import { getPageBySlug } from "@/lib/strapi";
import Footer from "@/components/Footers/Footer";
import DynamicHeaderRenderer from "@/components/DynamicHeaderRenderer";
import DynamicComponentRenderer from "@/components/DynamicComponentRenderer";
import React from "react";
import Banner from "@/components/DynamicComponent/Banner";

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
        {pageData.slug != 'home' &&
          <Banner data={pageData.Banner} />
        }

        {/* Horizontal layout: Content + Sidebar */}
        <div className="w-full">
          <div className="">
            {pageData.Content1?.map((component, index) => (
              <DynamicComponentRenderer
                key={`${component.__component}-${index}`}
                component={component}
                index={index}
                tableOfContent={pageData.TableOfContent}
                pageSlug={pageData.slug}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </React.Fragment>
  );
}