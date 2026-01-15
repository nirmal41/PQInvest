import Video from './DynamicComponent/Video';
import Banner from './DynamicComponent/Banner';
import Content from './DynamicComponent/Content';
import TableOfContent from './DynamicComponent/TableOfContent';
import React from 'react';
import Accordion from './DynamicComponent/Accordion';

const componentMap = {
    'layout.video': Video,
    'layout.content': Content,
    'layout.accordion': Accordion,
};

export default function DynamicComponentRenderer({ component, index, tableOfContent, pageSlug }) {
    if (!component || !component.__component) {
        console.warn('Component missing __component field:', component);
        return null;
    }

    const componentType = component.__component;
    const Component = componentMap[componentType];

    if (!Component) {
        console.warn(
            `No component mapped for type: ${componentType}. Available types:`,
            Object.keys(componentMap)
        );
        return (
            <div className="p-4 bg-yellow-100 border border-yellow-400 rounded">
                <p className="text-sm">
                    Component type <strong>{componentType}</strong> not found in mapping.
                </p>
            </div>
        );
    }

    // If it's the home page, render without wrapper
    if (pageSlug === 'home') {
        return (
            <>
                <Component key={index} data={component} />
            </>
        );
    }

    // For other pages, render with wrapper
    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            <div className="bg-white shadow-2xl border border-gray-100 flex flex-col md:flex-row p-8 md:p-14 gap-12">
                <div className='flex flex-grow md:w-1/3 gap-10'>
                    <Component key={index} data={component} />
                    {tableOfContent?.isHidden == false && <TableOfContent data={tableOfContent} />}
                </div>
            </div>
        </div>
    );
}
