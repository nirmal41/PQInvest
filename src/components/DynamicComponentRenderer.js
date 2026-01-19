import Video from './DynamicComponent/Video';
import Banner from './DynamicComponent/Banner';
import Content from './DynamicComponent/Content';
import TableOfContent from './DynamicComponent/TableOfContent';
import React from 'react';
import Accordion from './DynamicComponent/Accordion';
import Tabs from './DynamicComponent/Tabs';
import ContentWithImage from './DynamicComponent/ContentWithImage';
import ContentHorizontalImage from './DynamicComponent/ContentHorizontalImage';

const componentMap = {
    'layout.video': Video,
    'layout.content': Content,
    'layout.accordion': Accordion,
    'layout.tabs': Tabs,
    'layout.content-with-image': ContentWithImage,
    'layout.content-horizontal-image': ContentHorizontalImage,
};

export default function DynamicComponentRenderer({ component, index, tableOfContent, pageSlug, isLast }) {
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

    // For other pages, render with wrapper and conditional margin
    return (
        <div className={`flex flex-grow gap-10 ${isLast ? '' : 'mb-10'}`}>
            <Component key={index} data={component} />
            {tableOfContent?.isHidden == false && <TableOfContent data={tableOfContent} />}
        </div>
    );
}
