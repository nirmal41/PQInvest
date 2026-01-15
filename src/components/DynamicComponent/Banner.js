import Image from "next/image";

// components/Hero.js
export default function Banner({ data }) {
    console.log(data, 'Banner data from Strapi');

    // Get Strapi base URL from environment or use default
    const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://127.0.0.1:2555";
    // Construct full image URL
    const imageUrl = data?.bannerImg?.[0]?.url ? `${STRAPI_URL}${data.bannerImg[0].url}` : '/career-1200x346.png';

    console.log(imageUrl, 'Banner image URL');
    return (
        <div className="relative w-full h-[346px]">
            <Image src={imageUrl} alt="Banner" fill className="object-cover" unoptimized />
            <div className="absolute inset-0 flex flex-col justify-center px-12 md:px-24">
                <h1 className="text-white font-bold leading-tight uppercase" style={{ fontSize: '40px' }}>
                    {data?.heading}
                </h1>
                <div className="w-16 h-[6px] bg-white mb-4"></div>
            </div>
        </div>
    );
}