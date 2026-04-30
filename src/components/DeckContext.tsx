"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface DeckContextType {
  currentSlide: number;
  totalSlides: number;
  hasStarted: boolean;
  startDeck: () => void;
  nextSlide: () => void;
  prevSlide: () => void;
  goToSlide: (index: number) => void;
  setTotalSlides: (total: number) => void;
}

const DeckContext = createContext<DeckContextType | undefined>(undefined);

export function DeckProvider({ children }: { children: ReactNode }) {
  const [hasStarted, setHasStarted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);

  const startDeck = () => setHasStarted(true);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1 < totalSlides ? prev + 1 : 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const goToSlide = (index: number) => {
    if (index >= 0 && index < totalSlides) {
      setCurrentSlide(index);
    }
  };

  return (
    <DeckContext.Provider value={{ 
      hasStarted, 
      startDeck, 
      currentSlide, 
      totalSlides, 
      nextSlide, 
      prevSlide, 
      goToSlide, 
      setTotalSlides 
    }}>
      {children}
    </DeckContext.Provider>
  );
}

export function useDeck() {
  const context = useContext(DeckContext);
  if (context === undefined) {
    throw new Error("useDeck must be used within a DeckProvider");
  }
  return context;
}
