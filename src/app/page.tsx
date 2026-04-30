"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useDeck } from "@/components/DeckContext";
import dynamic from "next/dynamic";
import styles from "./page.module.css";

const IntroVideo = dynamic(() => import("@/components/IntroVideo"), { ssr: false, loading: () => <div className={styles.placeholderSlide} /> });
const CinematicIntro = dynamic(() => import("@/components/CinematicIntro"), { ssr: false, loading: () => <div className={styles.placeholderSlide} /> });
const IconAbout = dynamic(() => import("@/components/IconAbout"), { ssr: false, loading: () => <div className={styles.placeholderSlide} /> });

// Dynamic imports for subsequent slides to keep initial bundle size manageable
const StatsSection = dynamic(() => import("@/components/StatsSection"), { ssr: false, loading: () => <div className={styles.placeholderSlide} /> });
const RetailSection = dynamic(() => import("@/components/RetailSection"), { ssr: false, loading: () => <div className={styles.placeholderSlide} /> });
const DiningSection = dynamic(() => import("@/components/DiningSection"), { ssr: false, loading: () => <div className={styles.placeholderSlide} /> });
const EntertainmentSection = dynamic(() => import("@/components/EntertainmentSection"), { ssr: false, loading: () => <div className={styles.placeholderSlide} /> });
const EventsSection = dynamic(() => import("@/components/EventsSection"), { ssr: false, loading: () => <div className={styles.placeholderSlide} /> });
const IconHistory = dynamic(() => import("@/components/IconHistory"), { ssr: false, loading: () => <div className={styles.placeholderSlide} /> });
const IconToday = dynamic(() => import("@/components/IconToday"), { ssr: false, loading: () => <div className={styles.placeholderSlide} /> });
const WhyPropertySection = dynamic(() => import("@/components/WhyPropertySection"), { ssr: false, loading: () => <div className={styles.placeholderSlide} /> });
const LeasingSection = dynamic(() => import("@/components/LeasingSection"), { ssr: false, loading: () => <div className={styles.placeholderSlide} /> });
const EntNickelodeon = dynamic(() => import("@/components/EntNickelodeon"), { ssr: false, loading: () => <div className={styles.placeholderSlide} /> });
const EntOther = dynamic(() => import("@/components/EntOther"), { ssr: false, loading: () => <div className={styles.placeholderSlide} /> });

const slides = [
  { id: "video",         component: IntroVideo },
  { id: "intro",         component: CinematicIntro },
  { id: "icon-about",    component: IconAbout },
  { id: "icon-history",  component: IconHistory },
  { id: "icon-today",    component: IconToday },
  { id: "why-property",  component: WhyPropertySection },
  { id: "stats",         component: StatsSection },
  { id: "retail",        component: RetailSection },
  { id: "dining",        component: DiningSection },
  { id: "entertainment", component: EntertainmentSection },
  { id: "ent-nickelodeon",component: EntNickelodeon },
  { id: "ent-other",     component: EntOther },
  { id: "events",        component: EventsSection },
  { id: "leasing",       component: LeasingSection },
];


export default function Home() {
  const { currentSlide, setTotalSlides, hasStarted, startDeck } = useDeck();

  useEffect(() => {
    setTotalSlides(slides.length);
  }, [setTotalSlides]);

  if (!hasStarted) {
    return (
      <div className={styles.startScreen}>
        <video 
          autoPlay 
          muted 
          playsInline 
          preload="metadata"
          className={styles.backgroundVideo}
        >
          <source src="/video/vidlanding.mp4" type="video/mp4" />
        </video>
        <div className={styles.videoOverlay} />

        <div className={`${styles.startContent} ${styles.animateSlideUp}`}>
          <span className={styles.eyebrow}>THE EXPERIENCE BEGINS</span>
          <h1 className={styles.startTitle}>MALL OF AMERICA</h1>
        </div>

        <button 
          className={`${styles.enterBtn} ${styles.animateFadeInSlow}`}
          onClick={startDeck}
        >
          ENTER THE DECK
        </button>
      </div>
    );
  }

  return (
    <main className={styles.deckContainer}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{ type: "spring", damping: 30, stiffness: 200 }}
          className={styles.slideWrapper}
        >
          {(() => {
            const slide = slides[currentSlide];
            const SlideComponent = slide.component;
            return <SlideComponent />;
          })()}
        </motion.div>
      </AnimatePresence>
    </main>
  );
}
