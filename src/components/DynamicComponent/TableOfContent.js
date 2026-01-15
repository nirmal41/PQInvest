'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TableOfContent({ data }) {
    console.log('TableOfContent data from Strapi:', data);
    const pathname = usePathname();

    // Use menu items from Strapi data
    const menuItems = data?.TableOfContent || [];

    return (
        <div className="md:w-2/3">
            <div className="border border-gray-200">
                <div className="bg-[#8b0037] text-white p-4 font-bold text-lg uppercase">
                    About Us
                </div>
                <ul className="flex flex-col bg-white">
                    {menuItems.map((item, index) => (
                        <li key={index} className="border-b border-gray-100 last:border-none">
                            <Link
                                href={item?.link || '#'}
                                className={`flex items-center px-4 py-3 text-[14px] font-semibold transition-all duration-200 ${pathname === item?.link
                                    ? "text-[#8b0037] bg-gray-50"
                                    : "text-gray-700 hover:text-[#8b0037] hover:bg-gray-50"
                                    }`}
                            >
                                <span className={`mr-2 transition-colors ${pathname === item?.link ? "text-[#8b0037]" : "text-gray-400"}`}>
                                    &gt;
                                </span>
                                {item?.Title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}