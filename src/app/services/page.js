import Image from "next/image";
import Link from "next/link";

export default function ServicesPage() {
    return (
        <div className="flex flex-col min-h-screen font-sans">
            {/* --- HEADER SECTION --- */}
            <header className="w-full relative z-50">
                {/* Top Maroon Bar */}
                <div className="bg-[#8b0037] text-white text-[13px] py-2 px-6 md:px-24 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <span>📞 (+92-21) 34311747-56</span>
                    </div>
                    <div className="flex gap-6 items-center">
                        <span className="cursor-pointer hover:opacity-80">📢 Media Room</span>
                        <span className="cursor-pointer hover:opacity-80">🔍 Inquiry Form</span>
                        <span className="cursor-pointer hover:opacity-80">🌐 Language ▾</span>
                    </div>
                </div>

                {/* Gold Divider */}
                <div className="w-full h-[4px] bg-[#b89733]"></div>

                {/* Main Nav */}
                <nav className="flex justify-between items-center py-4 px-6 md:px-24 bg-white shadow-sm">
                    <Link href="/">
                        <Image src="/logo.png" alt="Logo" width={250} height={60} className="h-12 md:h-16 w-auto object-contain" priority />
                    </Link>
                    <ul className="hidden lg:flex gap-8 text-[#8b0037] text-[14px] font-semibold uppercase">
                        <li className="hover:underline underline-offset-8 decoration-4"><Link href="/">HOME</Link></li>
                        <li className="group relative cursor-pointer">
                            ABOUT US ▾
                            {/* Dropdown Box */}
                            <div className="absolute top-full left-[-100px] hidden group-hover:block bg-white shadow-xl p-8 min-w-[500px] mt-2 border-t-4 border-[#8b0037]">
                                <h3 className="text-xl font-bold mb-4">ABOUT US</h3>
                                <div className="grid grid-cols-2 gap-4 text-sm underline decoration-gray-400 underline-offset-4">
                                    <div className="flex flex-col gap-2">
                                        <Link href="#" className="hover:text-black">The Company</Link>
                                        <Link href="#" className="hover:text-black">Vision & Mission</Link>
                                        <Link href="#" className="hover:text-black">Corporate Information</Link>
                                        <Link href="#" className="hover:text-black">Directors</Link>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <Link href="#" className="hover:text-black">Management Team</Link>
                                        <Link href="#" className="hover:text-black">Our Sponsors</Link>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="underline underline-offset-8 decoration-4"><Link href="/services">OUR SERVICES</Link></li>
                        <li>CAREERS</li>
                        <li>CONTACT US</li>
                    </ul>
                </nav>
            </header>

            {/* --- MAIN CONTENT --- */}
            <main className="flex-grow">
                {/* Hero Banner */}
                <div className="relative w-full h-[346px] bg-gray-200">
                    <Image src="/AboutUS-1200x346.png" alt="Banner" fill className="object-cover" />
                    <div className="absolute inset-0 flex flex-col justify-center px-12 md:px-24 bg-black/10">
                        <div className="w-16 h-[4px] bg-white mb-4"></div>
                        <h1 className="text-white text-5xl font-bold leading-tight uppercase">Our<br />SERVICES</h1>
                    </div>
                </div>

                {/* Breadcrumbs */}
                <div className="bg-[#f4f4f4] py-2 px-12 md:px-24 text-[11px] text-gray-500 font-bold border-b">
                    HOME &gt; OUR SERVICES
                </div>

                {/* Content Grid */}
                <div className="max-w-7xl mx-auto px-6 md:px-24 py-16 grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div className="text-[#8b0037] text-[15px] leading-relaxed">
                        <p className="mb-8">Pak-Qatar Investment (Private) Limited (PQIL) also provides financing to Small & Medium Enterprises (SME)...</p>
                        <h2 className="text-3xl font-bold mb-6">Advisory</h2>
                        <p className="mb-6">The most important cause of business stagnation or failure is the lack of planning...</p>
                        <p className="mb-6 font-semibold italic">We facilitate our shareholders/investors in taking decisions...</p>
                        <h2 className="text-3xl font-bold mb-6 mt-12">Real Estate</h2>
                        <p>Our real estate experts combine financial management and performance management...</p>
                    </div>

                    <div className="flex flex-col gap-8">
                        <div className="relative w-full aspect-video shadow-lg border-4 border-white"><Image src="/consult3.jpg" alt="1" fill className="object-cover" /></div>
                        <div className="relative w-full aspect-video shadow-lg border-4 border-white"><Image src="/management3.jpg" alt="2" fill className="object-cover" /></div>
                        <div className="relative w-full aspect-video shadow-lg border-4 border-white"><Image src="/real-estate3.jpg" alt="3" fill className="object-cover" /></div>
                    </div>
                </div>
            </main>

            {/* --- FOOTER SECTION --- */}
            <footer className="bg-[#8b0037] text-white pt-12 pb-6 px-6 md:px-24">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-maroon-400 pb-12">
                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold border-b border-white/30 pb-2 mb-4 uppercase text-sm">Quick Links</h4>
                        <ul className="text-[13px] flex flex-col gap-2">
                            <li>Home</li>
                            <li>About Us</li>
                            <li className="underline">Our Services</li>
                            <li>Careers</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    {/* Contact Us */}
                    <div>
                        <h4 className="font-bold border-b border-white/30 pb-2 mb-4 uppercase text-sm">Contact Us</h4>
                        <p className="text-[12px] leading-relaxed">
                            Pak-Qatar Investment (Private) Limited<br />
                            First Floor, Business Arcade, Block-6,<br />
                            P.E.C.H.S, Shahrah-e-Faisal, Karachi.<br />
                            PABX: (+92 21) 34311747-56
                        </p>
                    </div>
                    {/* Group Companies */}
                    <div>
                        <h4 className="font-bold border-b border-white/30 pb-2 mb-4 uppercase text-sm">Group Companies</h4>
                        <ul className="text-[12px] flex flex-col gap-2">
                            <li>Pak-Qatar Family Takaful</li>
                            <li>Pak-Qatar General Takaful</li>
                            <li>Pak-Qatar Asset Management Company Limited</li>
                        </ul>
                    </div>
                    {/* Logos */}
                    <div className="flex flex-col gap-4">
                        <div className="bg-white p-2 rounded"><Image src="/jamapunji.jpg" alt="Jama Punji" width={180} height={50} /></div>
                        <div className="bg-white p-2 rounded"><Image src="/secp_new.jpg" alt="SECP" width={180} height={50} /></div>
                    </div>
                </div>
                <div className="text-center pt-6 text-[11px] opacity-80 uppercase tracking-wider">
                    Last Updated: 22 November, 2025 | Copyright © 2025 Pak-Qatar Investment. Managed by: Sidat Technologies & Digital | Front Page
                </div>
            </footer>
        </div>
    );
}