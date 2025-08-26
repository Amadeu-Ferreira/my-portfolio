import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Amadeu Ferreira — Web Developer",
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
                <Header />
                <main className="py-4 flex-1 w-full max-w-7xl mx-auto">{children}</main>
                <Footer />
            </body>
        </html>
    );
}