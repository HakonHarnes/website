import FooterSection from "./components/FooterSection";
import HeaderSection from "./components/HeaderSection";

import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import "./globals.css";

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
		<html lang="en" className={GeistSans.className}>
			<body className="bg-slate-900">
				<div className="flex flex-col h-screen max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-white">
					<HeaderSection />
					<main className="flex-grow">{children}</main>
					<FooterSection />
				</div>
			</body>
		</html>
	);
}
