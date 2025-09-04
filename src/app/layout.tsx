import type { Metadata } from "next";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
    title: "Amadeu Ferreira",
    description: "Sou desenvolvedor web especializado em React e Next.js.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt">
            <body className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {children}
                <Footer />
            </body>
        </html>
    );
}