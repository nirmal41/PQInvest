"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DirectorsPage() {
    const pathname = usePathname();
    const [openDirector, setOpenDirector] = useState(0); // Pehla director default open rahega

    const menuItems = [
        { name: "The Company", href: "/about/the-company" },
        { name: "Vision & Mission", href: "/about/vision-mission" },
        { name: "Corporate Information", href: "/about/corporate-information" },
        { name: "Directors", href: "/about/directors" },
        { name: "Management Team", href: "/about/management-team" },
        { name: "Sponsors", href: "/about/sponsors" },
    ];

    const directors = [
        {
            name: "Mr. Said Gul",
            bio: [
                "Mr. Said Gul, a prominent Pakistani businessman in the State of Qatar, is an Executive Director of Eurotec Projects Development for Oil & Gas (a Trading and Consultancy Enterprise). He has been a member of the board of directors for Pak-Qatar Family Takaful Limited and Pak-Qatar General Takaful Limited since its inception in 2007. He is also a Director of Pak-Qatar Asset Management Company Limited, Sharq Trading & Merchandising Limited, and MPQ Developers (Private) Limited.",
                "Earlier, he had been associated with Qatar Petrochemical Company as Head of General Services for a period of 17 years. Thereafter, he was Director Operations at Al-Muftah Projects & Industrial Services for 14 years.",
                "In addition to his contribution to the economies of both Qatar and Pakistan, he has also played a pioneering role in promoting friendship between the two countries and their business communities. Mr. Said Gul is in the board of Executive Members of the 'Pak-Qatar Business Forum' and among the founding leaders of 'Pakistan Welfare Forum' in Doha, Qatar."
            ]
        },
        {
            name: "Mr. Abdullah Gul",
            bio: ["Mr. Abdullah Gul has over 12 years of diverse business experience in International markets. He currently holds the positions as member of the Board of Directors in multiple organizations which include, Al Jazeera Travel, SOAS Investments Limited, Sharq Holding Company LLC, Pak-Qatar Investment (Pvt.) Limited and MPQ Developers (Private) Ltd.Mr. Abdullah Gul is an alumnus of the University of Cambridge in London. In addition, he has numerous certifications from globally renowned institutions."]
        }
    ];

    return (
        <div className="flex flex-col min-h-screen font-sans bg-white">
            <main className="flex-grow">
                {/* Banner Section */}
                <div className="relative w-full h-[346px]">
                    <Image src="/career-1200x346.png" alt="Banner" fill className="object-cover" />
                    <div className="absolute inset-0 flex flex-col justify-center px-12 md:px-24">
                        <div className="w-16 h-[6px] bg-white mb-4"></div>
                        <h1 className="text-white font-bold leading-tight uppercase" style={{ fontSize: '40px' }}>
                            About<br />Us
                        </h1>
                    </div>
                </div>

                {/* Breadcrumbs */}
                <div className="bg-white py-2 px-12 md:px-24 text-[11px] text-gray-500 font-bold border-b uppercase">
                    Home &gt; About Us &gt; Directors
                </div>

                <div className="bg-[#F7F7F7] w-full py-12 relative overflow-hidden">
                    {/* Watermark Vectors */}
                    <div className="absolute left-0 top-10 opacity-30 pointer-events-none">
                        <Image src="/content-watermark-left1.png" alt="vector" width={180} height={250} />
                    </div>

                    <div className="max-w-7xl mx-auto relative px-4 z-10">
                        <div className="bg-white shadow-2xl border border-gray-100 flex flex-col md:flex-row p-8 md:p-12 gap-8">

                            {/* MAIN CONTENT: Directors Accordion */}
                            <div className="flex-grow md:w-2/3">
                                <div className="mb-8 inline-block">
                                    <h2 className="text-4xl font-bold text-black leading-[0.7]">Directors</h2>
                                    <div className="w-12 h-1.5 bg-black mt-1"></div>
                                </div>

                                <div className="space-y-4">
                                    {directors.map((director, index) => (
                                        <div key={index} className="border border-gray-200 overflow-hidden">
                                            {/* Accordion Header */}
                                            <button
                                                onClick={() => setOpenDirector(openDirector === index ? -1 : index)}
                                                className={`w-full flex justify-between items-center p-4 text-left transition-colors ${openDirector === index ? "bg-[#8b0037] text-white" : "bg-white text-black hover:bg-gray-50"
                                                    }`}
                                            >
                                                <span className="text-[18px] font-bold">{director.name}</span>
                                                <span className="text-2xl font-light">
                                                    {openDirector === index ? "−" : "+"}
                                                </span>
                                            </button>

                                            {/* Accordion Body */}
                                            {openDirector === index && (
                                                <div className="p-6 bg-[#fdfdfd] text-[#8b0037] text-[15px] leading-relaxed text-justify space-y-4 border-t border-gray-200">
                                                    {director.bio.map((para, pIdx) => (
                                                        <p key={pIdx}>{para}</p>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* SIDEBAR */}
                            <div className="md:w-1/3">
                                <div className="border border-gray-200">
                                    <div className="bg-[#8b0037] text-white p-4 font-bold text-lg uppercase">About Us</div>
                                    <ul className="flex flex-col bg-white">
                                        {menuItems.map((item, index) => (
                                            <li key={index} className="border-b border-gray-100 last:border-none">
                                                <Link href={item.href} className={`flex items-center px-4 py-3 text-[14px] font-semibold transition-all ${pathname === item.href ? "text-[#8b0037] bg-gray-50" : "text-gray-700 hover:text-[#8b0037] hover:bg-gray-50"}`}>
                                                    <span className="mr-2 text-gray-400">&gt;</span>{item.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}