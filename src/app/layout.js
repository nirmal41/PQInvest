// src/app/layout.js
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { fetchGoogleTag } from "@/lib/strapi";



// Font configuration
const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Pak-Qatar Investment",
  description: "Together We Prosper",
};

export default async function RootLayout({ children }) {
  const googleTagData = await fetchGoogleTag();

  return (
    <html lang="en" className={openSans.className}>
      <body className="antialiased">
        {/* Inject Google Tag Manager script at the start of body */}
        {googleTagData?.GManager && (
          <div dangerouslySetInnerHTML={{ __html: googleTagData.GManager }} />
        )}
        {/* Inject Google Analytics script */}
        {googleTagData?.Gtag && (
          <div dangerouslySetInnerHTML={{ __html: googleTagData.Gtag }} />
        )}
        {children}
      </body>
    </html>
  );
}