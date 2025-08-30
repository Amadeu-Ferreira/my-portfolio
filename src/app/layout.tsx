import type { Metadata } from "next";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
    title: "Amadeu Ferreira",
    description: "Portfólio de Amadeu Ferreira, desenvolvedor web focado em aplicações modernas com React, Next.js e Node.js.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt">
            <body className="flex min-h-screen flex-col">
                <main className="flex-1 w-full">{children}</main>
                <Footer />
            </body>
        </html>
    );
}