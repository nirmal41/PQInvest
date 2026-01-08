"use client";

import Image from "next/image";
import Link from "next/link";

export default function ServicesPage() {
  const servicesData = [
    {
      title: "Investment Management",
      description: "We have a qualified team of professionals who keep close eye on investment opportunities including listed and unlisted securities, distressed companies, private equity, shari'ah compliant fixed income market, real estate commercial and retail projects to maximize shareholders'/investors' wealth by taking diversified approach and proper risk management.",
      subText: "Pak-Qatar Investment (Private) Limited (PQIL) also provides financing to Small & Medium Enterprises (SME) in Pakistan to help in improving this untapped sector by providing capital through Islamic mode of financing or through equity financing.",
      image: "/management3.jpg"
    },
    {
      title: "Advisory",
      description: "The most important cause of business stagnation or failure is the lack of planning by many business owners or management teams. Whether planning a start-up business, seeking new or additional capital, searching for new markets or key employees or desiring a greater share of the market for existing products and services, a solid up-to-date business plan is essential to ensure a successful effort.",
      subText: "We facilitate our shareholders/investors in taking decisions through our expert advisory services.",
      image: "/consult3.jpg"
    },
    {
      title: "Real Estate",
      description: "Our real estate experts combine financial management and performance management to help you maximize the value of your real estate holdings. We provide comprehensive solutions for property investment and development.",
      subText: "Our real estate experts combine financial management and performance management.",
      image: "/real-estate3.jpg"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen font-sans bg-white">
      {/* --- HEADER SECTION (YOUR ORIGINAL CODE) --- */}
      <header className="w-full relative z-50">
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
        <div className="w-full h-[4px] bg-[#b89733]"></div>
        <nav className="flex justify-between items-center py-4 px-6 md:px-24 bg-white shadow-sm">
          <Link href="/">
            <Image src="/logo.png" alt="Logo" width={250} height={60} className="h-12 md:h-16 w-auto object-contain" priority />
          </Link>
          <ul className="hidden lg:flex gap-8 text-[#8b0037] text-[14px] font-semibold uppercase">
            <li className="hover:underline underline-offset-8 decoration-4 cursor-pointer"><Link href="/">HOME</Link></li>
            <li className="group relative cursor-pointer">
              ABOUT US ▾
              <div className="absolute top-full left-[-100px] hidden group-hover:block bg-white shadow-xl p-8 min-w-[500px] mt-2 border-t-4 border-[#8b0037] z-[100]">
                <h3 className="text-xl font-bold mb-4">ABOUT US</h3>
                <div className="grid grid-cols-2 gap-4 text-sm underline decoration-gray-400 underline-offset-4">
                  <div className="flex flex-col gap-2 text-[#8b0037]">
                    <Link href="#" className="hover:text-black">The Company</Link>
                    <Link href="#" className="hover:text-black">Vision & Mission</Link>
                    <Link href="#" className="hover:text-black">Corporate Information</Link>
                    <Link href="#" className="hover:text-black">Directors</Link>
                  </div>
                  <div className="flex flex-col gap-2 text-[#8b0037]">
                    <Link href="#" className="hover:text-black">Management Team</Link>
                    <Link href="#" className="hover:text-black">Our Sponsors</Link>
                  </div>
                </div>
              </div>
            </li>
            <li className="underline underline-offset-8 decoration-4"><Link href="/services">OUR SERVICES</Link></li>
            <li className="cursor-pointer">CAREERS</li>
            <li className="cursor-pointer">CONTACT US</li>
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

        {/* --- SCROLLABLE SERVICES SECTION --- */}
        <div className="max-w-7xl mx-auto px-6 md:px-24 py-16">
          <h2 className="text-4xl font-bold text-black border-b-4 border-black inline-block mb-12">
            Our Services
          </h2>

          {/* Yeh section ab top to bottom scroll hoga */}
          <div className="custom-services-scroll h-[700px] overflow-y-auto pr-10">
            <div className="flex flex-col gap-20">
              {servicesData.map((item, index) => (
                <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                  {/* Left Side: Text */}
                  <div className="text-[#8b0037]">
                    <h3 className="text-3xl font-bold mb-6">{item.title}</h3>
                    <p className="text-[15px] leading-relaxed mb-6 text-gray-700">
                      {item.description}
                    </p>
                    {item.subText && (
                      <p className="text-[15px] font-semibold italic border-l-4 border-[#b89733] pl-4">
                        {item.subText}
                      </p>
                    )}
                  </div>

                  {/* Right Side: Image */}
                  <div className="relative w-full aspect-[4/3] shadow-lg border-4 border-white">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* --- FOOTER SECTION (YOUR ORIGINAL CODE) --- */}
      <footer className="bg-[#8b0037] text-white pt-12 pb-6 px-6 md:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/20 pb-12">
          <div>
            <h4 className="font-bold border-b border-white/30 pb-2 mb-4 uppercase text-sm">Quick Links</h4>
            <ul className="text-[13px] flex flex-col gap-2">
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">About Us</li>
              <li className="underline cursor-pointer">Our Services</li>
              <li className="cursor-pointer">Careers</li>
              <li className="cursor-pointer">Contact Us</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold border-b border-white/30 pb-2 mb-4 uppercase text-sm">Contact Us</h4>
            <p className="text-[12px] leading-relaxed">
              Pak-Qatar Investment (Private) Limited<br />
              First Floor, Business Arcade, Block-6,<br />
              P.E.C.H.S, Shahrah-e-Faisal, Karachi.<br />
              PABX: (+92 21) 34311747-56
            </p>
          </div>
          <div>
            <h4 className="font-bold border-b border-white/30 pb-2 mb-4 uppercase text-sm">Group Companies</h4>
            <ul className="text-[12px] flex flex-col gap-2">
              <li className="cursor-pointer">Pak-Qatar Family Takaful</li>
              <li className="cursor-pointer">Pak-Qatar General Takaful</li>
              <li className="cursor-pointer">Pak-Qatar Asset Management Company Limited</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <div className="bg-white p-2 rounded w-40"><Image src="/jamapunji.jpg" alt="Jama Punji" width={180} height={50} /></div>
            <div className="bg-white p-2 rounded w-40"><Image src="/secp_new.jpg" alt="SECP" width={180} height={50} /></div>
          </div>
        </div>
        <div className="text-center pt-6 text-[11px] opacity-80 uppercase tracking-wider">
          Last Updated: 22 November, 2025 | Copyright © 2025 Pak-Qatar Investment. Managed by: Sidat Technologies & Digital
        </div>
      </footer>

      {/* --- STYLING FOR THE INNER SCROLLBAR --- */}
      <style jsx global>{`
        /* Scrollbar Track (Back line) */
        .custom-services-scroll::-webkit-scrollbar {
          width: 8px;
        }
        .custom-services-scroll::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        /* Scrollbar Handle (Jo move karta hai) */
        .custom-services-scroll::-webkit-scrollbar-thumb {
          background: #8b0037;
          border-radius: 10px;
        }
        .custom-services-scroll::-webkit-scrollbar-thumb:hover {
          background: #b89733;
        }
        /* For Firefox */
        .custom-services-scroll {
          scrollbar-width: thin;
          scrollbar-color: #8b0037 #f1f1f1;
        }
      `}</style>
    </div>
  );
}