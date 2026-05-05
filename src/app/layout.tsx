import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GTB College - Professional & Technical Education",
  description: "Guru Teg Bahadur College, Bilaspur - Providing quality technical and professional education.",
  icons: {
    icon: "/logo-inverse.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable} antialiased`}>
      <body className="min-h-screen flex flex-col font-sans bg-white">
        <Navbar />
        <div className="flex-1 pt-[120px]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
