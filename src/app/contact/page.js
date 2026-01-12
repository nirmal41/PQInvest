"use client";

import Image from "next/image";
import Link from "next/link";

export default function ContactUsPage() {
    return (
        <div className="flex flex-col min-h-screen font-sans bg-white">
            <main className="flex-grow">
                {/* --- Banner Section --- */}
                <div className="relative w-full h-[346px]">
                    <Image src="/branchlocator-2-1200x346.png" alt="Banner" fill className="object-cover" />
                    <div className="absolute inset-0 flex flex-col justify-center px-12 md:px-24">
                        <div className="w-16 h-[6px] bg-white mb-4"></div>
                        <h1 className="text-white font-bold leading-tight uppercase" style={{ fontSize: '40px' }}>
                            Contact<br />Us
                        </h1>
                    </div>
                </div>

            
                 {/* Breadcrumbs */}
                <div className="bg-white py-2 px-12 md:px-24 text-[11px] text-gray-500 font-bold border-b">
                    HOME &gt; CONTACT US
                </div>

                {/* --- Main Content Section --- */}
                <div className="bg-[#F7F7F7] w-full py-12 relative overflow-hidden">
                    {/* Background Vectors */}
                    <div className="absolute left-0 top-10 opacity-60 z-0 pointer-events-none">
                        <Image src="/content-watermark-left1.png" alt="vector" width={200} height={300} priority />
                    </div>

                    <div className="max-w-7xl mx-auto relative px-4 z-10">
                        {/* WHITE BOX */}
                        <div className="bg-white shadow-2xl border border-gray-100 pr-0 relative overflow-hidden">

                            <div className="custom-services-scroll h-[800px] overflow-y-auto scroll-smooth">

                                <div className="pt-12 pl-6 md:pl-10 pr-8 md:pr-12 pb-12">

                                    {/* HEADING WITH MINIMAL SPACE TO UNDERLINE */}
                                    <div className="mb-10 inline-block">
                                        <h2 className="text-4xl font-bold text-black leading-[0.7]">
                                            Contact Us
                                        </h2>
                                        <div className="w-12 h-1.5 bg-black mt-1"></div>
                                    </div>

                                    {/* CONTACT DETAILS */}
                                    <div className="mb-12">
                                        <h3 className="text-[22px] font-bold text-black mb-4">
                                            Pak-Qatar Investment (Private) Limited
                                        </h3>
                                        <div className="text-[16px] text-gray-800 space-y-2 leading-relaxed">
                                            <p><strong>Phone:</strong> (+92-21) 34311747-56</p>
                                            <p><strong>E-mail:</strong> <a href="mailto:info@pqinvest.com" className="text-[#8b0037] hover:underline">info@pqinvest.com</a></p>
                                            <p><strong>Address:</strong> First Floor, Business Arcade, Block-6, P.E.C.H.S, Shahrah-e-Faisal, Karachi.</p>
                                        </div>
                                    </div>

                                    {/* FULL WIDTH MAP */}
                                    <div className="w-full h-[500px] border border-gray-200 shadow-sm rounded-sm overflow-hidden">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.554316531988!2d67.0673356!3d24.8604719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33eeb6d735071%3A0xa6482e92c2394a48!2sBusiness%20Arcade!5e0!3m2!1sen!2s!4v1700000000000"
                                            width="100%"
                                            height="100%"
                                            style={{ border: 0 }}
                                            allowFullScreen=""
                                            loading="lazy"
                                        ></iframe>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* SCROLLBAR STYLING */}
            <style jsx global>{`
                .custom-services-scroll::-webkit-scrollbar {
                  width: 8px;
                }
                .custom-services-scroll::-webkit-scrollbar-track {
                  background: #f1f1f1;
                }
                .custom-services-scroll::-webkit-scrollbar-thumb {
                  background: #ccc;
                }
                .custom-services-scroll::-webkit-scrollbar-thumb:hover {
                  background: #8b0037;
                }
            `}</style>
        </div>
    );
}