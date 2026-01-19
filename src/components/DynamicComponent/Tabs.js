"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Tabs({ data }) {
    console.log('Tabs data from Strapi:', data);

    // Get tabs from Strapi
    const tabs = data?.Tabs || [];
    const [activeTab, setActiveTab] = useState(0); // Use index instead of hardcoded key

    if (tabs.length === 0) {
        return <div className="text-gray-500">No tabs available</div>;
    }

    return (
        <div className="flex gap-10">
            {/* Tabs & Title */}
            <div className="flex flex-col  gap-2 relative pr-4  ">
                <div className="pr-5 border-r-4 border-[#8b0037]">

                    <div className="flex gap-1 bg-gray-100 p-1 w-fit rounded-sm">
                        {tabs.map((tab, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveTab(index)}
                                className="relative px-5 py-1.5 text-[10px] font-bold uppercase z-10 tracking-widest"
                                style={{ color: activeTab === index ? "white" : "#666" }}
                            >
                                {activeTab === index && (
                                    <motion.div
                                        layoutId="tabBG"
                                        className="absolute inset-0 bg-[#8b0037] z-[-1] rounded-sm"
                                        transition={{ type: "spring", stiffness: 400, damping: 35 }}
                                    />
                                )}
                                {tab?.Title}
                            </button>
                        ))}
                    </div>
                    <h3 className="text-3xl font-bold text-black leading-tight italic ">
                        {tabs[activeTab]?.Title}
                    </h3>
                </div>

                {/* <span className="absolute -top-2 -left-1 text-4xl text-[#8b0037] opacity-20 font-serif">"</span> */}
            </div>

            {/* Content Box */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.2 }}
                    className="bg-gray-50 relative flex-1"
                >

                    <div
                        className="rich-text-content text-[14px] text-gray-700 leading-snug"
                        dangerouslySetInnerHTML={{ __html: tabs[activeTab]?.Content || '' }}
                    />
                </motion.div>
            </AnimatePresence>
        </div>
    );
}