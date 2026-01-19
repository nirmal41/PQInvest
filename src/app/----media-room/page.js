"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function MediaRoom() {
    const [openIndex, setOpenIndex] = useState(0); // Pehla news item open rahega

    const newsItems = [
        {
            title: "Solar Powered Project Financed by PQIL",
            content: "Pak-Qatar Investment (Private) Limited has financed a project for alternate source of energy which has the capacity of 251.2 kWp rooftop."
        }
    ];

    return (
        <div className="flex flex-col min-h-screen font-sans bg-white">
            <main className="flex-grow">
                {/* --- Banner Section --- */}
                <div className="relative w-full h-[300px]">
                    <Image 
                        src="/haris-1200x481.png" 
                        alt="Media Room Banner" 
                        fill 
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 flex flex-col justify-center px-12 md:px-24">
                        <div className="w-12 h-[5px] bg-white mb-3"></div>
                        <h1 className="text-white font-bold leading-tight uppercase text-[36px]">
                            Media<br />Room
                        </h1>
                    </div>
                </div>

                {/* --- Breadcrumbs --- */}
                <div className="bg-white py-2 px-12 md:px-24 text-[10px] text-gray-500 font-bold border-b uppercase">
                    Home &gt; Media Room
                </div>

                {/* --- Main Content Section --- */}
                <div className="bg-[#F7F7F7] w-full py-8 relative overflow-hidden">
                    {/* Background Watermark Vectors */}
                    <div className="absolute left-0 top-10 opacity-30 pointer-events-none">
                        <Image src="/content-watermark-left1.png" alt="vector" width={150} height={200} />
                    </div>

                    <div className="max-w-7xl mx-auto relative px-4 z-10">
                        <div className="bg-white shadow-xl border border-gray-100 p-6 md:p-10">
                            
                            {/* Heading */}
                            <div className="mb-6 inline-block">
                                <h2 className="text-3xl font-bold text-black leading-[0.7]">Media Room</h2>
                                <div className="w-10 h-1 bg-black mt-1"></div>
                            </div>

                            {/* Accordion Style News Items */}
                            <div className="flex flex-col gap-3">
                                {newsItems.map((item, index) => (
                                    <div key={index} className="border border-gray-200 rounded-sm overflow-hidden">
                                        {/* Accordion Header */}
                                        <button 
                                            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                                            className={`w-full flex justify-between items-center p-3 text-left transition-all ${
                                                openIndex === index ? "bg-[#8b0037] text-white" : "bg-white text-[#8b0037] hover:bg-gray-50"
                                            }`}
                                        >
                                            <span className="text-[16px] font-bold uppercase tracking-tight">
                                                {item.title}
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
                                                    <div className="p-5 text-[#8b0037] text-[14px] leading-relaxed border-t border-gray-100 bg-[#fcfcfc]">
                                                        {item.content}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}