"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TheCompany() {
    const pathname = usePathname();

    // Menu items matches your folder structure for navigation
    const menuItems = [
        { name: "The Company", href: "/about/the-company" },
        { name: "Vision & Mission", href: "/about/vision-mission" },
        { name: "Corporate Information", href: "/about/corporate-information" },
        { name: "Directors", href: "/about/directors" },
        { name: "Management Team", href: "/about/management-team" },
        { name: "Sponsors", href: "/about/sponsors" },
    ];

    return (
        <div className="flex flex-col min-h-screen font-sans bg-white">
            <main className="flex-grow">
                {/* --- Banner Section --- */}
                <div className="relative w-full h-[346px]">
                    <Image src="/career-1200x346.png" alt="Banner" fill className="object-cover" />
                    <div className="absolute inset-0 flex flex-col justify-center px-12 md:px-24">
                        <div className="w-16 h-[6px] bg-white mb-4"></div>
                        <h1 className="text-white font-bold leading-tight uppercase" style={{ fontSize: '40px' }}>
                            About<br />Us
                        </h1>
                    </div>
                </div>

                {/* --- Breadcrumbs --- */}
                <div className="bg-white py-2 px-12 md:px-24 text-[11px] text-gray-500 font-bold border-b uppercase">
                    Home &gt; About Us &gt; The Company
                </div>

                {/* --- Main Content Section --- */}
                <div className="bg-[#F7F7F7] w-full py-12 relative overflow-hidden">
                    {/* Background Watermark Vectors (Left and Right) */}
                    <div className="absolute left-0 top-10 opacity-40 z-0 pointer-events-none">
                        <Image src="/content-watermark-left1.png" alt="vector" width={180} height={250} priority />
                    </div>
                    <div className="absolute right-0 bottom-10 opacity-40 z-0 pointer-events-none rotate-180">
                        <Image src="/content-watermark-left1.png" alt="vector" width={180} height={250} priority />
                    </div>

                    <div className="max-w-7xl mx-auto relative px-4 z-10">
                        {/* Main Container Box */}
                        <div className="bg-white shadow-2xl border border-gray-100 flex flex-col md:flex-row p-8 md:p-14 gap-12">

                            {/* LEFT COLUMN: Main Text Content */}
                            <div className="flex-grow md:w-2/3">
                                {/* Heading with Tight Underline */}
                                <div className="mb-8 inline-block">
                                    <h2 className="text-4xl font-bold text-black leading-[0.7]">
                                        The Company
                                    </h2>
                                    <div className="w-12 h-1.5 bg-black mt-1"></div>
                                </div>

                                {/* Content Body with Maroon Text Color */}
                                <div className="text-[15px] text-[#8b0037] space-y-6 leading-relaxed text-justify">
                                    <p>
                                        Pak-Qatar Investment (Private) Limited (PQIL) specializes in providing independent assessments and exclusive investment recommendations to its clients. The company is based on offering objective perspective, personalized planning, and sophisticated investment advise to individuals and corporate investors.
                                    </p>
                                    <p>
                                        PQIL investment strategies are designed to create value within opportunities and maximize returns for its investors. The Company seeks opportunities that provide its partners with the highest probability of earning optimum returns.
                                    </p>
                                    <p>
                                        Pak-Qatar Investment (Private) Limited (PQIL) is one of the key sponsor of Pak-Qatar Group. Formed in 2017, PQIL currently holds private equities, Musharaka and Modarba Mode financing and aims to expand its horizons by investing in various profitable and progressive avenues.
                                    </p>
                                    <p>
                                        PQIL is committed in providing its stakeholders with dedicated and transparent services that they can always trust and count on.
                                    </p>
                                </div>
                            </div>

                            {/* RIGHT COLUMN: Sidebar Navigation */}
                            <div className="md:w-1/3">
                                <div className="border border-gray-200">
                                    <div className="bg-[#8b0037] text-white p-4 font-bold text-lg uppercase">
                                        About Us
                                    </div>
                                    <ul className="flex flex-col bg-white">
                                        {menuItems.map((item, index) => (
                                            <li key={index} className="border-b border-gray-100 last:border-none">
                                                <Link
                                                    href={item.href}
                                                    className={`flex items-center px-4 py-3 text-[14px] font-semibold transition-all duration-200 ${pathname === item.href
                                                        ? "text-[#8b0037] bg-gray-50"
                                                        : "text-gray-700 hover:text-[#8b0037] hover:bg-gray-50"
                                                        }`}
                                                >
                                                    <span className={`mr-2 transition-colors ${pathname === item.href ? "text-[#8b0037]" : "text-gray-400"}`}>
                                                        &gt;
                                                    </span>
                                                    {item.name}
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