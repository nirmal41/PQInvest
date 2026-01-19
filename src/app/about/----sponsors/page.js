"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Sponsors() {
    const pathname = usePathname();
    const [openIndex, setOpenIndex] = useState(0);

    const menuItems = [
        { name: "The Company", href: "/about/the-company" },
        { name: "Vision & Mission", href: "/about/vision-mission" },
        { name: "Corporate Information", href: "/about/corporate-information" },
        { name: "Directors", href: "/about/directors" },
        { name: "Management Team", href: "/about/management-team" },
        { name: "Sponsors", href: "/about/sponsors" },
    ];

    const sponsors = [
        {
            name: "Sharq Holding Company LLC",
            content: [
                "Sharq Holding Company LLC (the Company) is a Limited Liability Company located in Doha, Qatar, registered/licensed with Qatar Financial Centre (QFC Number: 00862). The Company came into existence in 2020, has an issued share capital of QAR 100 and an authorized share capital of QAR 100,000.",
                "Sharq Holding via its investment in PQIL seeks to provide its investors with long-term capital appreciation. Its main objective includes establishing PQIL as a viable and sustainable financial institution in Pakistan offering profitable investment opportunities through co-investments, joint ventures, and other partnership arrangements."
            ]
        }
    ];

    return (
        <div className="flex flex-col min-h-screen font-sans bg-white">
            <main className="flex-grow">
                {/* --- Banner Section --- */}
                <div className="relative w-full h-[280px]">
                    <Image
                        src="/AboutUS-1200x346.png"
                        alt="Sponsors Banner"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 flex flex-col justify-center px-12 md:px-24">
                        <div className="w-12 h-[5px] bg-white mb-2"></div>
                        <h1 className="text-white font-bold leading-tight uppercase text-[36px]">
                            About Us
                        </h1>
                    </div>
                </div>

                {/* --- Breadcrumbs --- */}
                <div className="bg-white py-1.5 px-12 md:px-24 text-[10px] text-gray-500 font-bold border-b uppercase">
                    Home &gt; About Us &gt; Sponsors
                </div>

                {/* --- Content Section (BG Color Applied Here) --- */}
                <div className="bg-[#F7F7F7] w-full py-6 relative overflow-hidden">

                    {/* --- BACKGROUND VECTORS --- */}
                    {/* Left Vector */}
                    <div className="absolute left-0 top-10 opacity-30 pointer-events-none">
                        <Image src="/content-watermark-left1.png" alt="vector" width={160} height={200} />
                    </div>
                    {/* Right Vector */}
                    <div className="absolute right-0 bottom-10 opacity-30 pointer-events-none rotate-180">
                        <Image src="/content-watermark-left1.png" alt="vector" width={160} height={200} />
                    </div>

                    <div className="max-w-7xl mx-auto px-4 relative z-10">
                        <div className="bg-white shadow-xl border border-gray-100 p-6 md:p-8 flex flex-col md:flex-row gap-6">

                            {/* LEFT CONTENT */}
                            <div className="flex-grow md:w-2/3">
                                <div className="mb-4 inline-block">
                                    <h2 className="text-3xl font-bold text-black leading-[0.7]">Sponsors</h2>
                                    <div className="w-10 h-1 bg-black mt-1"></div>
                                </div>

                                <div className="flex flex-col gap-3">
                                    {sponsors.map((item, index) => (
                                        <div key={index} className="border border-gray-200 rounded-sm overflow-hidden shadow-sm">
                                            {/* Accordion Header */}
                                            <button
                                                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                                                className={`w-full flex justify-between items-center p-3 text-left transition-all ${openIndex === index ? "bg-[#8b0037] text-white" : "bg-white text-[#8b0037] hover:bg-gray-50"
                                                    }`}
                                            >
                                                <span className="text-[16px] font-bold tracking-tight uppercase">
                                                    {item.name}
                                                </span>
                                                <span className="text-2xl font-light">
                                                    {openIndex === index ? "−" : "+"}
                                                </span>
                                            </button>

                                            {/* Animated Body */}
                                            <AnimatePresence>
                                                {openIndex === index && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.3 }}
                                                    >
                                                        <div className="p-6 text-[#8b0037] text-[14px] leading-relaxed text-justify space-y-4 border-t border-gray-100 bg-[#fcfcfc]">
                                                            {item.content.map((para, pIdx) => (
                                                                <p key={pIdx}>{para}</p>
                                                            ))}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* RIGHT SIDEBAR */}
                            <div className="md:w-1/3">
                                <div className="border border-gray-200 sticky top-5 z-20">
                                    <div className="bg-[#8b0037] text-white p-3 font-bold text-md uppercase">About Us</div>
                                    <ul className="flex flex-col bg-white">
                                        {menuItems.map((item, index) => (
                                            <li key={index} className="border-b border-gray-100 last:border-none">
                                                <Link
                                                    href={item.href}
                                                    className={`flex items-center px-4 py-2.5 text-[13px] font-semibold transition-all ${pathname === item.href ? "text-[#8b0037] bg-gray-50" : "text-gray-700 hover:text-[#8b0037] hover:bg-gray-50"
                                                        }`}
                                                >
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