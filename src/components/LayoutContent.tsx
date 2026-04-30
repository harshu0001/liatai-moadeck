"use client";

import Image from "next/image";
import Navbar from "./Navbar";
import { useDeck } from "./DeckContext";

export function LayoutContent({ children }: { children: React.ReactNode }) {
  const { hasStarted } = useDeck();

  return (
    <>
      <div className="cinematic-vignette" />
      
      {/* Only render Navbar and Logo if the deck has started */}
      {hasStarted && (
        <>
          <Navbar />
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
        </>
      )}
      
      {children}
    </>
  );
}
