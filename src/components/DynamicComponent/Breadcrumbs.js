import Link from 'next/link';
import React from 'react';

export default function Breadcrumbs({ data }) {
    if (!data || data.length === 0) return null;

    return (
        <div className="flex flex-wrap items-center text-sm md:text-base mb-5 uppercase tracking-wide font-medium">
            {data.map((item, index) => (
                <div key={index} className="flex items-center">
                    {/* Separator */}
                    {index > 0 && <span className="mx-2 text-gray-400 font-light">&gt;</span>}

                    {/* Link */}
                    <Link
                        href={item.link || '#'}
                        className={`text-[13px] transition-colors duration-200 ${index === data.length - 1
                            ? 'text-[#85a0ca] cursor-default' // Last item style (lighter blue/gray based on image, or maybe use brand color)
                            : 'text-[#002e5b] hover:text-[#8b0037]' // Previous items (Dark blue, hover maroon)
                            }`}
                    >
                        {item.Title}
                    </Link>
                </div>
            ))}
        </div>
    );
}
