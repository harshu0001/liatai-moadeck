import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { DeckProvider } from "@/components/DeckContext";


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
          <div className="cinematic-vignette" />
          <Navbar />
          {children}

          {/* Global mall logo watermark — bottom right on every slide */}
          <Image
            src="/images/malllogo.png"
            alt="Mall of America"
            width={120}
            height={60}
            style={{
              position: "fixed",
              bottom: "24px",
              right: "28px",
              zIndex: 999,
              objectFit: "contain",
              opacity: 0.85,
              filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.5))",
              pointerEvents: "none",
              userSelect: "none",
            }}
            priority
          />
        </DeckProvider>
      </body>
    </html>
  );
}
