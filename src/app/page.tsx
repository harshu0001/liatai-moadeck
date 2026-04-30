"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useDeck } from "@/components/DeckContext";
import CinematicIntro from "@/components/CinematicIntro";
import IntroVideo from "@/components/IntroVideo";
import StatsSection from "@/components/StatsSection";
import RetailSection from "@/components/RetailSection";
import DiningSection from "@/components/DiningSection";
import EntertainmentSection from "@/components/EntertainmentSection";
import EventsSection from "@/components/EventsSection";
import IconAbout from "@/components/IconAbout";
import IconHistory from "@/components/IconHistory";
import IconToday from "@/components/IconToday";
import WhyPropertySection from "@/components/WhyPropertySection";
import LeasingSection from "@/components/LeasingSection";
import EntNickelodeon from "@/components/EntNickelodeon";
import EntOther from "@/components/EntOther";
import styles from "./page.module.css";


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
  const { currentSlide, setTotalSlides } = useDeck();
  const [hasStarted, setHasStarted] = useState(false);

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
          className={styles.backgroundVideo}
        >
          <source src="/video/vidlanding.mp4" type="video/mp4" />
        </video>
        <div className={styles.videoOverlay} />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={styles.startContent}
        >
          <span className={styles.eyebrow}>THE EXPERIENCE BEGINS</span>
          <h1 className={styles.startTitle}>MALL OF AMERICA</h1>
        </motion.div>

        <motion.button 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className={styles.enterBtn}
          onClick={() => setHasStarted(true)}
        >
          ENTER THE DECK
        </motion.button>
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
