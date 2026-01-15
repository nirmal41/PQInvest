'use client'
import { useState } from "react";

export default function Accordion({ data }) {
    const accordionItems = data?.Accordion || [];
    const [openDirector, setOpenDirector] = useState(0);
    return (
        <div className="flex-grow md:w-2/3">
            <div className="space-y-4">
                {accordionItems.map((director, index) => (
                    <div key={index} className="border border-gray-200 overflow-hidden">
                        <button
                            onClick={() => setOpenDirector(openDirector === index ? -1 : index)}
                            className={`w-full flex justify-between items-center p-4 text-left transition-colors ${openDirector === index ? "bg-[#8b0037] text-white" : "bg-white text-black hover:bg-gray-50"
                                }`}
                        >
                            <span className="text-[18px] font-bold">{director.Title}</span>
                            <span className="text-2xl font-light">
                                {openDirector === index ? "−" : "+"}
                            </span>
                        </button>

                        {openDirector === index && (
                            <div className="p-6 bg-[#fdfdfd] text-[#8b0037] text-[15px] leading-relaxed text-justify space-y-4 border-t border-gray-200">
                                {director.Content}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}