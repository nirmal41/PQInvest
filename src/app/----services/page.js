"use client";

import Image from "next/image";
import Link from "next/link";

export default function ServicesPage() {
    const servicesData = [
        {
            title: "Investment Management",
            description: "We have a qualified team of professionals who keep close eye on investment opportunities including, but not limited to, investment in listed and unlisted securities, distressed companies, private equity, shari'ah compliant fixed income market, real estate commercial and retail projects to maximize shareholders'/investors' wealth by taking diversified approach and proper risk management.",
            subText: "Pak-Qatar Investment (Private) Limited (PQIL) also provides financing to Small & Medium Enterprises (SME) in Pakistan to help in improving this untapped sector by providing capital through Islamic mode of financing or through equity financing.",
            image: "/management3.jpg"
        },
        {
            title: "Advisory",
            description: "The most important cause of business stagnation or failure is the lack of planning by many business owners or management teams. Whether planning a start-up business, seeking new or additional capital, searching for new markets or key employees or desiring a greater share of the market for existing products and services, a solid up-to-date business plan is essential to ensure a successful effort.",
            subText: "We facilitate our shareholders/investors in taking decisions in new businesses by helping them...",
            image: "/consult3.jpg"
        },
        {
            title: "Real Estate",
            description: "Our real estate experts combine financial management and performance management to help you maximize the value of your real estate holdings. We provide comprehensive solutions for property investment and development.",
            subText: "As the real estate market becomes more complex and global, the question is: how can you build a solid basis for successful decision-making? Our answer: with a partner who offers you all the services needed from one single source. In every phase of the real estate and property cycle we, at PQIL, are committed to offer you the best services, helping to achieve the investment objectives.",
            image: "/real-estate3.jpg"
        }
    ];

    return (
        <div className="flex flex-col min-h-screen font-sans bg-white">

            {/* --- MAIN CONTENT --- */}
            <main className="flex-grow">
                {/* Banner Section */}
                <div className="relative w-full h-[346px]">
                    <Image src="/AboutUS-1200x346.png" alt="Banner" fill className="object-cover" />
                    <div className="absolute inset-0 flex flex-col justify-center px-12 md:px-24">
                        <div className="w-16 h-[6px] bg-white mb-4"></div>
                        <h1 className="text-white font-bold leading-tight uppercase" style={{ fontSize: '40px' }}>
                            Our<br />SERVICES
                        </h1>
                    </div>
                </div>

                {/* Breadcrumbs */}
                <div className="bg-white py-2 px-12 md:px-24 text-[11px] text-gray-500 font-bold border-b">
                    HOME &gt; OUR SERVICES
                </div>

                {/* --- SCROLLABLE SECTION --- */}
                {/* --- SCROLLABLE SECTION --- */}
                {/* --- SCROLLABLE SECTION --- */}
                <div className="bg-[#F7F7F7] w-full py-12 relative overflow-hidden">

                    {/* Background Vectors */}
                    <div className="absolute left-0 top-10 opacity-60 z-0 pointer-events-none">
                        <Image src="/content-watermark-left1.png" alt="vector" width={200} height={300} priority />
                    </div>
                    <div className="absolute right-0 bottom-10 opacity-60 z-0 pointer-events-none scale-x-[-1]">
                        <Image src="/content-watermark-left1.png" alt="vector" width={200} height={300} priority />
                    </div>

                    <div className="max-w-7xl mx-auto relative px-4 z-10">

                        {/* WHITE CENTER BOX: pr-0 taake scrollbar edge par aaye */}
                        <div className="bg-white shadow-2xl border border-gray-100 pr-0 pb-12 relative overflow-hidden">

                            {/* SCROLLABLE AREA: H-800px aur overflow-y-auto top se start ho raha hai */}
                            <div className="custom-services-scroll h-[800px] overflow-y-auto scroll-smooth">

                                {/* Internal Padding Wrapper: Content ko andar space dene ke liye */}
                                <div className="pt-12 pl-6 md:pl-10 pr-6 md:pr-10">

                                    {/* HEADING WITH SHORT UNDERLINE */}
                                    <div className="mb-12 inline-block">
                                        <h2 className="text-4xl font-bold text-black leading-none">
                                            Our Services
                                        </h2>
                                        <div className="w-12 h-1.5 bg-black mt-3"></div>
                                    </div>

                                    {/* Services Content Grid */}
                                    <div className="flex flex-col gap-20">
                                        {servicesData.map((item, index) => (
                                            <div key={index} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                                                <div className="lg:col-span-7 text-[#8b0037]">
                                                    <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                                                    <p className="text-[15px] leading-relaxed mb-6 text-gray-700">
                                                        {item.description}
                                                    </p>
                                                    {item.subText && (
                                                        <p className="text-[14px] leading-relaxed font-medium">
                                                            {item.subText}
                                                        </p>
                                                    )}
                                                </div>

                                                <div className="lg:col-span-5">
                                                    <div className="relative w-full aspect-[4/3] shadow-md border-4 border-white">
                                                        <Image
                                                            src={item.image}
                                                            alt={item.title}
                                                            fill
                                                            className="object-cover"
                                                        />
                                                    </div>
                                                </div>

                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* --- FOOTER --- */}
            <footer className="bg-[#8b0037] text-white pt-12 pb-6 px-6 md:px-24">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/20 pb-12">
                    <div>
                        <h4 className="font-bold border-b border-white/30 pb-2 mb-4 uppercase text-sm">Quick Links</h4>
                        <ul className="text-[13px] flex flex-col gap-2">
                            <li>Home</li><li>About Us</li><li className="underline">Our Services</li><li>Careers</li><li>Contact Us</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold border-b border-white/30 pb-2 mb-4 uppercase text-sm">Contact Us</h4>
                        <p className="text-[12px] leading-relaxed">
                            Pak-Qatar Investment (Private) Limited<br />
                            First Floor, Business Arcade, Block-6,<br />
                            P.E.C.H.S, Shahrah-e-Faisal, Karachi.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold border-b border-white/30 pb-2 mb-4 uppercase text-sm">Group Companies</h4>
                        <ul className="text-[12px] flex flex-col gap-2 opacity-80">
                            <li>Pak-Qatar Family Takaful</li>
                            <li>Pak-Qatar General Takaful</li>
                            <li>Pak-Qatar Asset Management</li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="bg-white p-2 rounded w-40"><Image src="/jamapunji.jpg" alt="Jama Punji" width={180} height={50} /></div>
                        <div className="bg-white p-2 rounded w-40"><Image src="/secp_new.jpg" alt="SECP" width={180} height={50} /></div>
                    </div>
                </div>
                <div className="text-center pt-6 text-[11px] opacity-80 uppercase">
                    Copyright © 2025 Pak-Qatar Investment. Managed by: Sidat Technologies & Digital
                </div>
            </footer>

            <style jsx global>{`
                .custom-services-scroll::-webkit-scrollbar {
                  width: 6px;
                }
                .custom-services-scroll::-webkit-scrollbar-track {
                  background: #f1f1f1;
                }
                .custom-services-scroll::-webkit-scrollbar-thumb {
                  background: #ccc;
                  border-radius: 10px;
                }
                .custom-services-scroll::-webkit-scrollbar-thumb:hover {
                  background: #8b0037;
                }
            `}</style>
        </div>
    );
}