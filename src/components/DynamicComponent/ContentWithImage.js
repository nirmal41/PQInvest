import Image from 'next/image';
import React from 'react';

export default function ContentWithImage({ data }) {
    // The data structure based on schema:
    // data.contentWithImage2 = [ { Text: "...", Image: { ... } }, ... ]

    if (!data?.contentWithImage2) return null;

    const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:2555";

    return (
        <div className="flex flex-col gap-12">
            {data.contentWithImage2.map((item, index) => {
                const imageUrl = item.Image?.url
                    ? (item.Image.url.startsWith('/') ? `${STRAPI_URL}${item.Image.url}` : item.Image.url)
                    : null;

                return (
                    <div key={index} className={`flex flex-col md:flex-row gap-8 items-start ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                        {/* Image Section */}
                        {imageUrl && (
                            <div className="w-full md:w-1/2 relative h-[300px] md:h-[350px] shrink-0">
                                <Image
                                    src={imageUrl}
                                    alt="Content Image"
                                    fill
                                    className="object-cover rounded-md shadow-md"
                                    unoptimized // Strapi images often need this if domains aren't fully configured
                                />
                            </div>
                        )}

                        {/* Text Section */}
                        <div className="w-full md:w-1/2">
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
