import Image from "next/image";
import styles from "./Content.module.css";

export default function Content({ data }) {
    console.log('Content data from Strapi:', data);

    return (
        <div className="flex-grow">
            <div
                className="rich-text-content text-[15px] space-y-6 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: data?.contentDetails || '' }}
            />
        </div>
    );
}