import type { Metadata } from "next";
import { Cormorant_Garamond, Inter_Tight, Geist } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/LenisProvider";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

const cormorant = Cormorant_Garamond({
    variable: "--font-serif",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    display: "swap",
});

const interTight = Inter_Tight({
    variable: "--font-sans",
    subsets: ["latin"],
    weight: ["400", "500", "600"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "GlydAI - AI for Realtors",
    description: "GlydAI is a fully managed AI service that helps real estate agents generate leads, nurture relationships, and close more deals.",
    icons: {
        icon: "/favicon.png",
    },
    openGraph: {
        title: "GlydAI - AI for Realtors",
        description: "GlydAI is a fully managed AI service that helps real estate agents generate leads, nurture relationships, and close more deals.",
        url: "https://glydai.com",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={cn(
                "antialiased",
                cormorant.variable,
                interTight.variable,
                geist.variable,
                "font-sans"
            )}
        >
            <body>
                <LenisProvider>{children}</LenisProvider>
            </body>
        </html>
    );
}