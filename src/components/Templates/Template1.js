import React from "react";
import DynamicComponentRenderer from "../DynamicComponentRenderer";
import TableOfContent from "../DynamicComponent/TableOfContent";
import Banner from "../DynamicComponent/Banner";
import Breadcrumbs from "../DynamicComponent/Breadcrumbs";

/**
 * Template1 - Content with Sidebar Layout
 * Used for: About Us, Services, and other content pages
 * Features: Max-width container, shadow/border, two-column layout
 */
export default function Template1({ pageData }) {
    return (
        <>
            {/* Banner (if not home page) */}
            {pageData.slug !== 'home' && (
                <Banner data={pageData.Banner} />
            )}

            {/* Main Content with Sidebar */}
            <div className="bg-[#F7F7F7] w-full pt-5 pb-12">
                <div className="max-w-7xl mx-auto px-4">
                    <Breadcrumbs data={pageData.BreadCrumbs} />

                    <div className="bg-white shadow-2xl border border-gray-100 p-8 md:p-14">

                        {/* Breadcrumbs */}

                        {/* Content & Sidebar Wrapper */}
                        <div className="flex flex-col md:flex-row gap-12">
                            {/* Left: Content1 components */}
                            <div className="flex-grow md:w-2/3">
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

                            {/* Right: Table of Contents Sidebar */}
                            {pageData.TableOfContent?.isHidden === false && (
                                <TableOfContent data={pageData.TableOfContent} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
