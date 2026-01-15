"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function VisionMission() {
    const pathname = usePathname();
    const [activeTab, setActiveTab] = useState("vision");

    const menuItems = [
        { name: "The Company", href: "/about/the-company" },
        { name: "Vision & Mission", href: "/about/vision-mission" },
        { name: "Corporate Information", href: "/about/corporate-information" },
        { name: "Directors", href: "/about/directors" },
        { name: "Management Team", href: "/about/management-team" },
        { name: "Sponsors", href: "/about/sponsors" },
    ];

    const content = {
        vision: {
            title: "Vision",
            subtitle: "Statement",
            text: "To be the leading investment and advisory firm committed for the promotion of equitable opportunities for all our stakeholders."
        },
        mission: {
            title: "Mission",
            subtitle: "Statement",
            text: "To provide innovative financial solutions while adhering to the highest standards of Shari'ah compliance and professional excellence."
        }
    };

    return (
        <div className="flex flex-col min-h-screen font-sans bg-white">
            <main className="flex-grow">
                {/* --- Banner Section (Height Kam Kar Di) --- */}
                <div className="relative w-full h-[280px]">
                    <Image src="/career-1200x346.png" alt="Banner" fill className="object-cover" />
                    <div className="absolute inset-0 flex flex-col justify-center px-12 md:px-24">
                        <div className="w-16 h-[6px] bg-white mb-2"></div>
                        <h1 className="text-white font-bold leading-tight uppercase text-[36px]">
                            About Us
                        </h1>
                    </div>
                </div>

                {/* --- Breadcrumbs --- */}
                <div className="bg-white py-1.5 px-12 md:px-24 text-[10px] text-gray-500 font-bold border-b uppercase">
                    Home &gt; About Us &gt; Vision & Mission
                </div>

                <div className="bg-[#F7F7F7] w-full py-6">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="bg-white shadow-xl border border-gray-100 p-6 md:p-8 flex flex-col md:flex-row gap-6">

                            {/* LEFT AREA */}
                            <div className="flex-grow md:w-2/3">
                                <div className="mb-4 inline-block">
                                    <h2 className="text-3xl font-bold text-black leading-[0.7]">Vision & Mission</h2>
                                    <div className="w-10 h-1 bg-black mt-1"></div>
                                </div>

                                {/* IMAGE (Height reduced for compactness) */}
                                <div className="relative w-full h-[320px] mb-6 overflow-hidden shadow-sm rounded-sm">
                                    <Image
                                        src="/vision-mision.jpg"
                                        alt="Vision Mission"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* CONTENT SECTION (Tight Spacing) */}
                                <div className="flex gap-10">
                                    {/* Tabs & Title */}
                                    <div className="flex flex-col gap-2">
                                        <div className="flex gap-1 bg-gray-100 p-1 w-fit rounded-sm">
                                            {["vision", "mission"].map((tab) => (
                                                <button
                                                    key={tab}
                                                    onClick={() => setActiveTab(tab)}
                                                    className="relative px-5 py-1.5 text-[10px] font-bold uppercase z-10 tracking-widest"
                                                    style={{ color: activeTab === tab ? "white" : "#666" }}
                                                >
                                                    {activeTab === tab && (
                                                        <motion.div
                                                            layoutId="tabBG"
                                                            className="absolute inset-0 bg-[#8b0037] z-[-1] rounded-sm"
                                                            transition={{ type: "spring", stiffness: 400, damping: 35 }}
                                                        />
                                                    )}
                                                    {tab}
                                                </button>
                                            ))}
                                        </div>
                                        <h3 className="text-3xl font-bold text-black leading-tight italic">
                                            {content[activeTab].title} <br />
                                            <span className="font-light text-gray-400 not-italic text-2xl">{content[activeTab].subtitle}</span>
                                        </h3>
                                    </div>

                                    {/* Text Box (Reduced Padding) */}
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={activeTab}
                                            initial={{ opacity: 0, x: 10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -10 }}
                                            transition={{ duration: 0.2 }}
                                            className="bg-gray-50 p-5 border-l-4 border-[#8b0037] relative"
                                        >
                                            <span className="absolute -top-2 -left-1 text-4xl text-[#8b0037] opacity-20 font-serif">“</span>
                                            <p className="text-[14px] text-gray-700 leading-snug italic">
                                                {content[activeTab].text}
                                            </p>
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            </div>

                            {/* RIGHT SIDEBAR (Compact Menu) */}
                            <div className="md:w-1/3">
                                <div className="border border-gray-200">
                                    <div className="bg-[#8b0037] text-white p-3 font-bold text-md uppercase">About Us</div>
                                    <ul className="flex flex-col bg-white text-[13px]">
                                        {menuItems.map((item, index) => (
                                            <li key={index} className="border-b border-gray-100 last:border-none">
                                                <Link href={item.href} className={`flex items-center px-4 py-2.5 font-semibold transition-all ${pathname === item.href ? "text-[#8b0037] bg-gray-50" : "text-gray-700 hover:text-[#8b0037] hover:bg-gray-50"}`}>
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