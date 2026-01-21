import Image from "next/image";
import Link from "next/link";

export default function Header({ data }) {
    console.log(data, 'headerData')
    
    return (
        <header className="w-full font-sans relative z-50 ">
            {/* Top Maroon Bar */}
            <div className="bg-[#8b0037] text-white text-[15px] py-2 px-6 md:px-8  leading-[25px] ">
                <div className="max-w-7xl flex justify-between items-center mx-auto">
                    
                    {/* Left Side: Phone Numbers & Links */}
                    <div className="flex items-center gap-4">
                        {data?.LinkLeftSide?.map((item, index) => {
                            // isHidden Check
                            if (item?.isHidden === true || item?.isHidden === "TRUE") {
                                return null;
                            }

                            const isPhone = item?.Title?.toLowerCase().includes('phone') || item?.link?.startsWith('+');
                            const hrefValue = isPhone ? `tel:${item?.link}` : item?.link;

                            return (
                                <div key={index} className="flex items-center gap-2">
                                    <Image
                                        src="/phone.png"
                                        alt="Phone"
                                        width={16}
                                        height={16}
                                        className="object-contain"
                                    />
                                    <Link 
                                        href={hrefValue || '#'}
                                        target={(item?.isExternal === true || item?.isExternal === "TRUE") ? "_blank" : "_self"}
                                        rel="noopener noreferrer"
                                        className="hover:underline cursor-pointer"
                                    >
                                        {item?.link}
                                    </Link>
                                </div>
                            );
                        })}
                    </div>

                    {/* Right Side Links (Media Room etc.) */}
                    <div className="flex gap-8 items-center">
                        {data?.LinkRightSide?.map((item, index) => {
                            // 1. isHidden Check: Agar CMS mein TRUE hai to show nahi hoga
                            if (item?.isHidden === true || item?.isHidden === "TRUE") {
                                return null;
                            }

                            return (
                                <Link 
                                    key={index} 
                                    href={`/${item?.link}` || '#'}
                                    // 2. isExternal Check: Naye tab mein khulne ke liye
                                    target={(item?.isExternal === true || item?.isExternal === "TRUE") ? "_blank" : "_self"}
                                    rel="noopener noreferrer"
                                >
                                    <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
                                        <Image
                                            src="/media_icon.png"
                                            alt="Media Room"
                                            width={18}
                                            height={18}
                                            className="object-contain"
                                        />
                                        {item?.Title}
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Gold Divider Line */}
            <div className="w-full h-[5px] bg-[#b89733]"></div>

            {/* Main Navigation (Full code retained) */}
            <nav className="flex justify-between items-center py-4 bg-white relative max-w-7xl mx-auto px-6 md:px-8">
                <div className="flex items-center">
                    <Link href="/">
                        <Image
                            src="/logo.png"
                            alt="Pak-Qatar Logo"
                            width={343}
                            height={86}
                            className="h-14 md:h-20 w-auto object-contain"
                            priority
                        />
                    </Link>
                </div>

                <ul className="hidden lg:flex gap-10">
                    {data?.web_menu?.Menu?.map((item, index) => {
                        const hasDropdown = item?.Menu && item.Menu.length > 0;

                        if (hasDropdown) {
                            const midPoint = Math.ceil(item.Menu.length / 2);
                            const firstColumn = item.Menu.slice(0, midPoint);
                            const secondColumn = item.Menu.slice(midPoint);

                            return (
                                <li key={index} className="group relative cursor-pointer py-2 text-[#8b0037] text-[15px] font-[400]">
                                    <div className="flex items-center gap-1">
                                        {item?.TItle} <span className="text-[12px]">▾</span>
                                    </div>
                                    <span className="absolute bottom-[-5px] left-0 w-0 h-[4px] bg-[#8b0037] transition-all duration-300 group-hover:w-full"></span>

                                    <div className="absolute top-[100%] left-[-100px] hidden group-hover:block bg-white shadow-[0_15px_35px_rgba(0,0,0,0.1)] min-w-[550px] p-8 mt-[2px] z-[100] border-t-0">
                                        <h3 className="text-[#8b0037] text-[20px] font-bold mb-4 uppercase">
                                            {item?.TItle}
                                        </h3>
                                        <div className="grid grid-cols-2 gap-x-16 gap-y-2">
                                            <div className="flex flex-col gap-2">
                                                {firstColumn.map((subItem, subIndex) => (
                                                    <Link
                                                        key={subIndex}
                                                        href={`/${item?.Link}/${subItem?.Link}` || '#'}
                                                        className="text-[#333] text-[14px] underline decoration-1 underline-offset-4 hover:text-black w-fit"
                                                    >
                                                        {subItem?.Title}
                                                    </Link>
                                                ))}
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                {secondColumn.map((subItem, subIndex) => (
                                                    <Link
                                                        key={subIndex}
                                                        href={`/${item?.Link}/${subItem?.Link}` || '#'}
                                                        className="text-[#333] text-[14px] underline decoration-1 underline-offset-4 hover:text-black w-fit"
                                                    >
                                                        {subItem?.Title}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            );
                        } else {
                            return (
                                <li key={index} className="group relative cursor-pointer py-2 text-[#8b0037] text-[15px] font-[400]">
                                    <Link href={`/${item?.Link}` || '#'}>{item?.TItle}</Link>
                                    <span className="absolute bottom-[-5px] left-0 w-0 h-[4px] bg-[#8b0037] transition-all duration-300 group-hover:w-full"></span>
                                </li>
                            );
                        }
                    })}
                </ul>

                <div className="lg:hidden text-[#8b0037] text-2xl cursor-pointer">☰</div>
            </nav>
        </header>
    );
}