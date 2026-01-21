import Image from "next/image";

export default function Footer({ data }) {
    // 1. Data nikalna
    const rawContent = data?.footer;
    const { quickLinks, contactLinks, groupComapnies, FooterImages, BotFooter: cmsFooterText } = rawContent || {};

    console.log("Raw Content:", rawContent);
    // 2. Logic: Agar data Object hai (Strapi Blocks), to usay text mein badlein.
    // Agar text hai, to wahi dikhaein. Agar khali hai, to fallback text dikhaein.
    let finalBotFooter = "";

    if (Array.isArray(cmsFooterText)) {
        // Agar Strapi se 'Blocks' (Array) aa raha hai
        finalBotFooter = cmsFooterText.map(block => 
            block.children?.map(child => child.text).join('')
        ).join(' ');
    } else if (typeof cmsFooterText === "string") {
        // Agar simple text aa raha hai
        finalBotFooter = cmsFooterText;
    } else {
        // Backup text agar CMS se kuch na milay
        finalBotFooter = "Last Updated: 22 November, 2026 | Copyright © 2026 Pak-Qatar Investment. Managed by: Sidat Technologies & Digital | Front Page";
    }

    return (
        <footer className="bg-[#800032] text-white py-10 px-6 md:px-24 font-sans">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-[14px]">

                {/* QUICK LINKS */}
                <div>
                    <h3 className="text-[#b89733] font-bold border-b border-white/20 mb-4 pb-1 tracking-wider text-[15px]">
                        QUICK LINKS
                    </h3>
                    <ul className="space-y-2 font-light">
                        {quickLinks?.map((item) => (
                            <li key={item.id} className="cursor-pointer hover:underline">
                                <a href={item.link?.startsWith('http') ? item.link : `/${item.link}`}>
                                    {item.Title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* CONTACT US */}
                <div>
                    <h3 className="text-[#b89733] font-bold border-b border-white/20 mb-4 pb-1 tracking-wider text-[15px]">
                        CONTACT US
                    </h3>
                    <div className="space-y-1 font-light leading-snug">
                        {contactLinks?.map((item) => (
                            <p key={item.id} className={item.Title.includes("PABX") ? "pt-2" : ""}>
                                {item.Title} {item.link}
                            </p>
                        ))}
                    </div>
                </div>

                {/* GROUP COMPANIES */}
                <div>
                    <h3 className="text-[#b89733] font-bold border-b border-white/20 mb-4 pb-1 tracking-wider text-[15px]">
                        GROUP COMPANIES
                    </h3>
                    <ul className="space-y-2 font-light">
                        {groupComapnies?.map((item) => (
                            <li key={item.id} className="cursor-pointer hover:underline leading-tight">
                                <a href={item.link} target="_blank" rel="noopener noreferrer">
                                    {item.Title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Certifications/Logos */}
                <div className="flex flex-col gap-3">
                    {FooterImages?.map((img) => {
                        let href = "#";
                        if (img.name.toLowerCase().includes("jamapunji")) href = "https://jamapunji.pk/";
                        if (img.name.toLowerCase().includes("secp")) href = "https://www.secp.gov.pk/";
                        if (img.name.toLowerCase().includes("logo")) href = "/";

                        // Use the full URL if available, otherwise construct it
                        const imgSrc = img.url || img.formats?.thumbnail?.url;
                        // Determine if we need to prepend the full URL domain if it's a relative path (unlikely for S3 but good for local)
                        const finalSrc = imgSrc?.startsWith("http") ? imgSrc : (imgSrc ? `https://pqinvest-backend.sidattech.com${imgSrc}` : "");

                         // Only render if we have a valid source
                         if (!finalSrc) return null;

                        return (
                            <a key={img.id} href={href} target={href.startsWith("http") ? "_blank" : "_self"} rel={href.startsWith("http") ? "noopener noreferrer" : ""}>
                                <div className="bg-white p-1 rounded flex items-center justify-center">
                                    <img 
                                        src={finalSrc} 
                                        alt={img.name} 
                                        className="w-full h-auto object-contain max-h-[90px]" 
                                    />
                                </div>
                            </a>
                        );
                    })}
                </div>
            </div>

            {/* Bottom Copyright Line */}
            <div className="max-w-7xl mx-auto mt-12 pt-4 border-t border-white/20 text-center text-[12px] font-light tracking-wide opacity-90">
                {/* Ab ye error nahi de ga kyunke botFooterContent hamesha Text ho ga */}
                <div dangerouslySetInnerHTML={{ __html: finalBotFooter }} />
            </div>
        </footer>
    );
}