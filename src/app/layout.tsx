import type { Metadata } from "next";
import { Open_Sans, Orbitron, Playfair_Display, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Navbar/ResponsiveNav";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });


const font = Open_Sans({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ["latin"]
});
const orbitron = Orbitron({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-orbitron' })
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-playfair' })
const ibm = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-ibm' })
export const metadata: Metadata = {
  title: "Augment",
  description: "Business School",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"  className={`${orbitron.variable} ${playfair.variable} ${ibm.variable}`}>

      <body
        className={`${font.className}  antialiased`}
      >
        <ResponsiveNav />
        {children}
      </body>
    </html>
  );
}
