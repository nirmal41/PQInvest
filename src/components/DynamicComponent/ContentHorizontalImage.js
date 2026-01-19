import Image from 'next/image';
import React from 'react';

export default function ContentHorizontalImage({ data }) {
    // The data structure based on schema:
    // data.ContentHorizonalImage = [ { Text: "...", Image: { ... } }, ... ]

    if (!data?.ContentHorizonalImage) return null;

    const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:2555";

    return (
        <div className="flex flex-col gap-12">
            {data.ContentHorizonalImage.map((item, index) => {
                const imageUrl = item.Image?.url
                    ? (item.Image.url.startsWith('/') ? `${STRAPI_URL}${item.Image.url}` : item.Image.url)
                    : null;

                return (
                    <div key={index} className="flex gap-6">
                        {/* Image - Full Width / Horizontal */}
                        {imageUrl && (
                            <div className="w-full relative h-[300px] md:h-[400px]">
                                <Image
                                    src={imageUrl}
                                    alt="Content Image"
                                    fill
                                    className="object-cover rounded-md shadow-sm"
                                    unoptimized
                                />
                            </div>
                        )}

                        {/* Text Content */}
                        <div className="w-full">
                            <div
                                className="rich-text-content text-gray-700 leading-relaxed text-[15px] space-y-4"
                                dangerouslySetInnerHTML={{ __html: item.Text || '' }}
                            />
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
