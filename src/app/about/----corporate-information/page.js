

"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CorporateInformation() {
    const pathname = usePathname();

    const menuItems = [
        { name: "The Company", href: "/about/the-company" },
        { name: "Vision & Mission", href: "/about/vision-mission" },
        { name: "Corporate Information", href: "/about/corporate-information" },
        { name: "Directors", href: "/about/directors" },
        { name: "Management Team", href: "/about/management-team" },
        { name: "Sponsors", href: "/about/sponsors" },
    ];

    const infoData = [
        { label: "Name of Company", value: "Pak-Qatar Investment (Private) Limited" },
        { label: "Company Registration Number", value: "0101270" },
        { label: "Company National Tax Number", value: "7302534" },
        { label: "Status of Company", value: "Private Limited" },
        { label: "Address of Registered Office", value: "First Floor, Business Arcade, Block-6, P.E.C.H.S, Shahrah-e-Faisal, Karachi." },
        { label: "Phone & Fax numbers – Registered Office", value: "PABX: (+92 21) 34311747-56 Fax: (+92 21) 34386451" },
        { label: "Email Address", value: "info@pqinvest.com.pk" },
        { label: "Chief Executive Officer", value: "Muhammad Kamran Saleem" },
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
                    Home &gt; About Us &gt; Corporate Information
                </div>

                {/* --- Main Content Section --- */}
                <div className="bg-[#F7F7F7] w-full py-12 relative overflow-hidden">
                    <div className="absolute left-0 top-10 opacity-60 z-0 pointer-events-none">
                        <Image src="/content-watermark-left1.png" alt="vector" width={200} height={300} priority />
                    </div>
                    <div className="absolute right-0 bottom-10 opacity-60 z-0 pointer-events-none scale-x-[-1]">
                        <Image src="/content-watermark-left1.png" alt="vector" width={200} height={300} priority />
                    </div>
                    <div className="max-w-7xl mx-auto relative px-4 z-10">
                        <div className="bg-white shadow-2xl border border-gray-100 flex flex-col md:flex-row p-8 md:p-12 gap-8">

                            {/* LEFT COLUMN: Table Content */}
                            <div className="flex-grow md:w-2/3">
                                <div className="mb-8 inline-block">
                                    <h2 className="text-4xl font-bold text-black leading-[0.7]">
                                        Corporate Information
                                    </h2>
                                    <div className="w-12 h-1.5 bg-black mt-1"></div>
                                </div>

                                <div className="overflow-x-auto border border-gray-200">
                                    <table className="w-full text-left border-collapse">
                                        <tbody>
                                            {infoData.map((item, index) => (
                                                <tr key={index} className="border-b border-gray-200 last:border-none">
                                                    <td className="p-4 text-[14px] font-semibold text-[#8b0037] bg-gray-50 w-1/3 border-r border-gray-200">
                                                        {item.label}
                                                    </td>
                                                    <td className="p-4 text-[14px] text-gray-700">
                                                        {item.value}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* RIGHT COLUMN: Sidebar Menu */}
                            <div className="md:w-1/3">
                                <div className="border border-gray-200 sticky top-24">
                                    <div className="bg-[#8b0037] text-white p-4 font-bold text-lg uppercase">
                                        About Us
                                    </div>
                                    <ul className="flex flex-col bg-white">
                                        {menuItems.map((item, index) => (
                                            <li key={index} className="border-b border-gray-100 last:border-none">
                                                <Link
                                                    href={item.href}
                                                    className={`flex items-center px-4 py-3 text-[14px] font-semibold transition-all ${pathname === item.href
                                                        ? "text-[#8b0037] bg-gray-50"
                                                        : "text-gray-700 hover:text-[#8b0037] hover:bg-gray-50"
                                                        }`}
                                                >
                                                    <span className={`mr-2 transition-transform ${pathname === item.href ? "rotate-0 text-[#8b0037]" : ""}`}>
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