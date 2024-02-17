import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";

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
			<body className="flex flex-col min-h-screen items-center">
				<Header />
				{children}
			</body>
		</html>
	);
}
