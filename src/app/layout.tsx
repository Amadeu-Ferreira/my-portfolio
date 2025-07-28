import type { Metadata } from "next";
import "./globals.css";

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
            <body className="max-w-4xl mx-auto">
                {children}
            </body>
        </html>
    );
}
