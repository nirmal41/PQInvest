import Image from "next/image";
import Link from "next/link";
export default function Header() {
    return (
        <header className="w-full font-sans relative z-50">
            {/* Top Maroon Bar */}
            <div className="bg-[#8b0037] text-white text-[15px] py-2 px-6 md:px-8 flex justify-between items-center leading-[25px]">
                <div className="flex items-center gap-2">
                    <Image
                        src="/phone.png"
                        alt="Phone"
                        width={16}
                        height={16}
                        className="object-contain"
                    />
                    <span>(+92-21) 34311747-56</span>
                </div>

                <div className="flex gap-8 items-center">
                    <div className="flex items-center gap-2 cursor-pointer hover:opacity-80">
                        <Image
                            src="/media_icon.png"
                            alt="Media Room"
                            width={18}
                            height={18}
                            className="object-contain"
                        />
                        Media Room
                    </div>

                    <div className="flex items-center gap-2 cursor-pointer hover:opacity-80">
                        <Image
                            src="/enquiry-form.png"
                            alt="Inquiry Form"
                            width={18}
                            height={18}
                            className="object-contain"
                        />
                        Inquiry Form
                    </div>

                    <div className="flex items-center gap-2 cursor-pointer hover:opacity-80">
                        <Image
                            src="/language.png"
                            alt="Language"
                            width={18}
                            height={18}
                            className="object-contain"
                        />
                        <div className="flex items-center gap-1">
                            Language <span className="text-[12px]">▾</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Gold Divider Line */}
            <div className="w-full h-[5px] bg-[#b89733]"></div>

            {/* Main Navigation */}
            <nav className="flex justify-between items-center py-4 px-6 md:px-8 bg-white relative">
                {/* Logo Section */}
                <div className="flex items-center">
                    <Image
                        src="/logo.png"
                        alt="Pak-Qatar Logo"
                        width={343}
                        height={86}
                        className="h-14 md:h-20 w-auto object-contain"
                        priority
                    />
                </div>

                {/* Navigation Links */}
                <ul className="hidden lg:flex gap-10">
                    <li className="group relative cursor-pointer py-2 text-[#8b0037] text-[15px] font-[400] uppercase">
                        <Link href="/">HOME</Link>
                        <span className="absolute bottom-[-5px] left-0 w-0 h-[4px] bg-[#8b0037] transition-all duration-300 group-hover:w-full"></span>
                    </li>

                    {/* ABOUT US WITH DROPDOWN */}
                    <li className="group relative cursor-pointer py-2 text-[#8b0037] text-[15px] font-[400]">
                        <div className="flex items-center gap-1">
                            ABOUT US <span className="text-[12px]">▾</span>
                        </div>
                        <span className="absolute bottom-[-5px] left-0 w-0 h-[4px] bg-[#8b0037] transition-all duration-300 group-hover:w-full"></span>

                        {/* Dropdown Menu Box */}
                        <div className="absolute top-[100%] left-[-100px] hidden group-hover:block bg-white shadow-[0_15px_35px_rgba(0,0,0,0.1)] min-w-[550px] p-8 mt-[2px] z-[100] border-t-0">
                            {/* Heading Font Size Chota Kiya (text-xl) and Margin Bottom Kam Kiya (mb-4) */}
                            <h3 className="text-[#8b0037] text-[20px] font-bold mb-4 ">
                                ABOUT US
                            </h3>

                            <div className="grid grid-cols-2 gap-x-16 gap-y-2">
                                {/* Left Column - Default Underline and Less Spacing (gap-2) */}
                                <div className="flex flex-col gap-2">
                                    <a href="#" className="text-[#333] text-[14px] underline decoration-1 underline-offset-4 hover:text-black w-fit">The Company</a>
                                    <a href="#" className="text-[#333] text-[14px] underline decoration-1 underline-offset-4 hover:text-black w-fit">Vision & Mission</a>
                                    <a href="#" className="text-[#333] text-[14px] underline decoration-1 underline-offset-4 hover:text-black w-fit">Corporate Information</a>
                                    <a href="#" className="text-[#333] text-[14px] underline decoration-1 underline-offset-4 hover:text-black w-fit">Directors</a>
                                </div>

                                {/* Right Column */}
                                <div className="flex flex-col gap-2">
                                    <a href="#" className="text-[#333] text-[16px] underline decoration-1 underline-offset-4 hover:text-black w-fit">Management Team</a>
                                    <a href="#" className="text-[#333] text-[16px] underline decoration-1 underline-offset-4 hover:text-black w-fit">Our Sponsors</a>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="group relative cursor-pointer py-2 text-[#8b0037] text-[15px] font-[400] uppercase">
                        <Link href="/services">OUR SERVICES</Link>
                        <span className="absolute bottom-[-5px] left-0 w-0 h-[4px] bg-[#8b0037] transition-all duration-300 group-hover:w-full"></span>
                    </li>
                    <li className="group relative cursor-pointer py-2 text-[#8b0037] text-[15px] font-[400] uppercase">
                        <Link href="/careers"> CAREERS</Link>
                        <span className="absolute bottom-[-5px] left-0 w-0 h-[4px] bg-[#8b0037] transition-all duration-300 group-hover:w-full"></span>
                    </li>
                    <li className="group relative cursor-pointer py-2 text-[#8b0037] text-[15px] font-[400] uppercase">
                        <Link href="/contact">CONTACT US</Link>
                        
                        <span className="absolute bottom-[-5px] left-0 w-0 h-[4px] bg-[#8b0037] transition-all duration-300 group-hover:w-full"></span>
                    </li>
                </ul>


                {/* Mobile Menu Icon */}
                <div className="lg:hidden text-[#8b0037] text-2xl cursor-pointer">☰</div>
            </nav>
        </header>
    );
}