import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { DeckProvider } from "@/components/DeckContext";


import { LayoutContent } from "@/components/LayoutContent";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Mall of America | Immersive Sales Experience",
  description: "A world-class interactive sales deck for the premier destination of retail, entertainment, and hospitality in the United States.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body suppressHydrationWarning>
        <DeckProvider>
          <LayoutContent>
            {children}
          </LayoutContent>
        </DeckProvider>
      </body>
    </html>
  );
}
