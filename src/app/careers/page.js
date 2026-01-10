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
            {/* --- HEADER --- */}


            {/* --- MAIN CONTENT --- */}
            <main className="flex-grow">
                {/* Banner Section */}
                <div className="relative w-full h-[346px]">
                    <Image src="/career-1200x346.png" alt="Banner" fill className="object-cover" />
                    <div className="absolute inset-0 flex flex-col justify-center px-12 md:px-24">
                        <div className="w-16 h-[6px] bg-white mb-4"></div>
                        <h1 className="text-white font-bold leading-tight uppercase" style={{ fontSize: '40px' }}>
                            Our<br />CAREERS
                        </h1>
                    </div>
                </div>

                {/* Breadcrumbs */}
                <div className="bg-white py-2 px-12 md:px-24 text-[11px] text-gray-500 font-bold border-b">
                    HOME &gt; OUR SERVICES
                </div>


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
                        <div className="bg-white shadow-2xl min-h-[600px] border border-gray-100 pr-0 pb-12 relative overflow-hidden">

                            {/* HEADING WITH SHORT UNDERLINE */}
                            <div className="mb-12 inline-block p-4 pt-8">
                                <h2 className="text-4xl font-bold text-black leading-none">
                                    Careers
                                </h2>
                                <div className="w-12 h-1.5 bg-black mt-3"></div>
                                <p className="text-[15px] leading-relaxed mb-6 pt-2  text-gray-700">
                                    Interested candidates may send their resumes at careers@pqinvest.com.pk                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>


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