"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function ManagementTeam() {
    const pathname = usePathname();
    const [openIndex, setOpenIndex] = useState(0); // Pehla member default open

    const menuItems = [
        { name: "The Company", href: "/about/the-company" },
        { name: "Vision & Mission", href: "/about/vision-mission" },
        { name: "Corporate Information", href: "/about/corporate-information" },
        { name: "Directors", href: "/about/directors" },
        { name: "Management Team", href: "/about/management-team" },
        { name: "Sponsors", href: "/about/sponsors" },
    ];

    const team = [
        {
            name: "Mr. Muhammad Kamran Saleem",
            designation: "Chief Executive Officer",
            bio: [
                "Mr. Kamran Saleem is the Chief Executive Officer for Pak-Qatar Investment. Mr. Kamran Saleem is also engaged as an Executive Director & Company Secretary in Pak Qatar Takaful Group and serves on the board of Pak-Qatar Family & General Takaful, Pak-Qatar Asset Management Company Limited, MPQ Developers, Sharq Trading & Merchandising Ltd, Pak Elektron, and Crescent Steel & Allied Products.",
                "Mr. Kamran is a Certified Director from the Pakistan Institute of Corporate Governance, a Fellow member of the Institute of Chartered of Pakistan (ICAP); Institute of Cost & Management Accountants of Pakistan (ICMAP), Institute of Corporate Secretaries of Pakistan; while an Associate Member of the Institute of Chartered Accountants in England & Wales.",
                "Mr. Kamran is also a Member of Sindh High Court Bar Association, Sindh Bar Council, Karachi Bar Association, Karachi Press Club, and Karachi Chamber of Commerce & Industry. The Federation of Pakistan Chamber of Commerce and Industry (FPCCI) has appointed Mr. Kamran as Chairman of the Standing Committee on Takaful & Window Takaful with consecutive re-appointments as chairman for this prestigious forum as a known Takaful Leader.",
                "Mr. Kamran Saleem is a seasoned professional with over 25 years of experience in accountancy, auditing, corporate governance, compliance, and legal frameworks."
            ]
        },
        {
            name: "Mr. Muhammad Furqan Manzar (ACCA)",
            designation: "Chief Financial Officer",
            bio: ["Profile details for the Chief Financial Officer will be displayed here."]
        }
    ];

    return (
        <div className="flex flex-col min-h-screen font-sans bg-white">
            <main className="flex-grow">
                {/* Compact Banner */}
                <div className="relative w-full h-[280px]">
                    <Image src="/career-1200x346.png" alt="Banner" fill className="object-cover" />
                    <div className="absolute inset-0 flex flex-col justify-center px-12 md:px-24">
                        <div className="w-12 h-[5px] bg-white mb-3"></div>
                        <h1 className="text-white font-bold leading-tight uppercase text-[36px]">
                            About<br />Us
                        </h1>
                    </div>
                </div>

                {/* Breadcrumbs */}
                <div className="bg-white py-2 px-12 md:px-24 text-[10px] text-gray-500 font-bold border-b uppercase">
                    Home &gt; About Us &gt; Management Team
                </div>

                <div className="bg-[#F7F7F7] w-full py-8">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="bg-white shadow-xl border border-gray-100 p-6 md:p-10 flex flex-col md:flex-row gap-8">

                            {/* LEFT CONTENT: Management Accordion */}
                            <div className="flex-grow md:w-2/3">
                                <div className="mb-6 inline-block">
                                    <h2 className="text-3xl font-bold text-black leading-[0.7]">Management Team</h2>
                                    <div className="w-10 h-1 bg-black mt-1"></div>
                                </div>

                                <div className="flex flex-col gap-3">
                                    {team.map((member, index) => (
                                        <div key={index} className="border border-gray-200 rounded-sm overflow-hidden">
                                            {/* Accordion Header */}
                                            <button
                                                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                                                className={`w-full flex justify-between items-center p-3 text-left transition-all ${openIndex === index ? "bg-[#8b0037] text-white" : "bg-white text-[#8b0037] hover:bg-gray-50"
                                                    }`}
                                            >
                                                <span className="text-[16px] font-bold">
                                                    {member.name} - <span className={openIndex === index ? "text-white/90 font-medium" : "text-gray-600 font-medium"}>{member.designation}</span>
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
                                                            {member.bio.map((para, pIdx) => (
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
                                <div className="border border-gray-200 sticky top-5">
                                    <div className="bg-[#8b0037] text-white p-3 font-bold text-md uppercase">About Us</div>
                                    <ul className="flex flex-col bg-white">
                                        {menuItems.map((item, index) => (
                                            <li key={index} className="border-b border-gray-100 last:border-none">
                                                <Link
                                                    href={item.href}
                                                    className={`flex items-center px-4 py-2.5 text-[13px] font-semibold ${pathname === item.href ? "text-[#8b0037] bg-gray-50" : "text-gray-700 hover:text-[#8b0037] hover:bg-gray-50"
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