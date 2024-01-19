import HeaderSection from "./components/HeaderSection";
import FooterSection from "./components/FooterSection";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Håkon Harnes",
  description: "Personal portfolio for Håkon Harnes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-900`}>
        <div className="flex flex-col h-screen max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-white">
          <HeaderSection />
          <main className="flex-grow">{children}</main>
          <FooterSection />
        </div>
      </body>
    </html>
  );
}
