import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
	title: "TFC Hackathon",
	description: "Find the best price for your treatments and medications.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="flex flex-col min-h-screen items-center bg-blaj font-Imprima">
				<Header />
				{children}
				<Analytics />
			</body>
		</html>
	);
}
