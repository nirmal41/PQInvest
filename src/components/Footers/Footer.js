import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-[#800032] text-white py-10 px-6 md:px-24 font-sans">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-[14px]">

                {/* QUICK LINKS */}
                <div>
                    <h3 className="text-[#b89733] font-bold border-b border-white/20 mb-4 pb-1 tracking-wider text-[15px]">
                        QUICK LINKS
                    </h3>
                    <ul className="space-y-2 font-light">
                        <li className="cursor-pointer hover:underline decoration-1 underline-offset-4">Home</li>
                        <li className="cursor-pointer hover:underline decoration-1 underline-offset-4">About Us</li>
                        <li className="cursor-pointer hover:underline decoration-1 underline-offset-4">Our Services</li>
                        <li className="cursor-pointer hover:underline decoration-1 underline-offset-4">Careers</li>
                        <li className="cursor-pointer hover:underline decoration-1 underline-offset-4">Contact Us</li>
                    </ul>
                </div>

                {/* CONTACT US */}
                <div>
                    <h3 className="text-[#b89733] font-bold border-b border-white/20 mb-4 pb-1 tracking-wider text-[15px]">
                        CONTACT US
                    </h3>
                    <div className="space-y-1 font-light leading-snug">
                        <p>Pak-Qatar Investment (Private) Limited</p>
                        <p>First Floor, Business Arcade, Block-6,</p>
                        <p>P.E.C.H.S, Shahrah-e-Faisal, Karachi.</p>
                        <p className="pt-2">PABX: (+92-21) 34311747-56</p>
                        <p>Fax: (+92 21) 34386451</p>
                    </div>
                </div>

                {/* GROUP COMPANIES */}
                <div>
                    <h3 className="text-[#b89733] font-bold border-b border-white/20 mb-4 pb-1 tracking-wider text-[15px]">
                        GROUP COMPANIES
                    </h3>
                    <ul className="space-y-2 font-light">
                        <li className="cursor-pointer hover:underline decoration-1 underline-offset-4">Pak-Qatar Family Takaful</li>
                        <li className="cursor-pointer hover:underline decoration-1 underline-offset-4">Pak-Qatar General Takaful</li>
                        <li className="cursor-pointer hover:underline decoration-1 underline-offset-4 leading-tight">Pak-Qatar Asset Management Company Limited</li>
                    </ul>
                </div>

                {/* Certifications/Logos Section */}
                <div className="flex flex-col gap-3">
                    <div className="bg-white p-1 rounded overflow-hidden flex items-center justify-center">
                        <img
                            src="/jamapunji.jpg"
                            alt="Jamapunji"
                            className="w-full h-auto object-contain max-h-[70px]"
                        />
                    </div>
                    <div className="bg-white p-1 rounded overflow-hidden flex items-center justify-center">
                        <img
                            src="/secp_new.jpg"
                            alt="SECP"
                            className="w-full h-auto object-contain max-h-[90px]"
                        />
                    </div>
                </div>
            </div>

            {/* Bottom Copyright Line */}
            <div className="max-w-7xl mx-auto mt-12 pt-4 border-t border-white/20 text-center text-[12px] font-light tracking-wide opacity-90">
                Last Updated: 22 November, 2025 | Copyright © 2025 Pak-Qatar Investment. Managed by: Sidat Technologies & Digital | Front Page
            </div>
        </footer>
    );
}