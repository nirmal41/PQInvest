import Link from "next/link";
import { notFound } from "next/navigation";
import { getPageBySlug } from "../../lib/strapi";
import Footer from "@/components/Footers/Footer";
import DynamicHeaderRenderer from "@/components/DynamicHeaderRenderer";
import TemplateRenderer from "@/components/TemplateRenderer";
import React from "react";

export default async function Page({ params }) {
    const { slug } = await params;
    const pageData = await getPageBySlug(slug);

    if (!pageData) {
        console.log("Page not found for slug:", slug);
        return (
            <div className="p-10 text-red-600">
                <h1 className="text-2xl font-bold">404 - Page Not Found</h1>
                <p>Could not find a page in Strapi with slug: <strong>{slug.join("/")}</strong></p>
                <p className="mt-4 text-gray-600 text-sm">Target API URL: {process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://127.0.0.1:2555"}/api/web-pages?filters[slug][$eq]={slug.join("/")}</p>
            </div>
        );
    }


    return (
        <React.Fragment>
            <DynamicHeaderRenderer data={pageData.header} />
            <main className="overflow-x-hidden">
                <TemplateRenderer pageData={pageData} />
            </main>
            <Footer />
        </React.Fragment>
    );
}
