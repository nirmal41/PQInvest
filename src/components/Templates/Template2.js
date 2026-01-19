import React from "react";
import DynamicComponentRenderer from "../DynamicComponentRenderer";
import Banner from "../DynamicComponent/Banner";

/**
 * Template2 - Full Width Layout
 * Used for: Home page and landing pages
 * Features: No container wrapper, full-width components, no sidebar
 */
export default function Template2({ pageData }) {
    return (
        <>
            {/* Full-width content */}
            <div className="w-full">
                {pageData.Content1?.map((component, index) => (
                    <DynamicComponentRenderer
                        key={`${component.__component}-${index}`}
                        component={component}
                        index={index}
                        tableOfContent={null}
                        pageSlug={pageData.slug}
                        isLast={index === pageData.Content1.length - 1}
                    />
                ))}
            </div>
        </>
    );
}
