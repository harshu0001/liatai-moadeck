"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "./IconSection.module.css";
import histStyles from "./IconHistory.module.css";

/* ── Data ───────────────────────────────────────────────────── */
const BG_IMAGES = [
  "/images/history/history1.png",
  "/images/history/history2.jpg",
  "/images/history/history3.jpg",
];

const INTERVAL = 4000;

const LETTER_TEXT =
  `On August 11, 1992, Mall of America opened its doors on the former site of Metropolitan Stadium — the hallowed ground where Minnesota's greatest sporting memories were made. What rose in its place was something the world had never seen before.\n\nIn just over three decades, the Mall has welcomed more than 1.3 billion cumulative visitors — a number that surpasses the populations of entire countries. From a bold American vision born in the early 1980s to a globally recognized icon of commerce and culture, the story of Mall of America is one of relentless ambition and enduring legacy.`;

/* ── Typewriter hook ─────────────────────────────────────────── */
function useTypewriter(text: string, speed = 14, startDelay = 1700) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed("");
    setDone(false);
    let i = 0;
    let interval: ReturnType<typeof setInterval>;

    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, speed, startDelay]);

  return { displayed, done };
}

/* ── Component ───────────────────────────────────────────────── */
export default function IconHistory() {
  const [current, setCurrent] = useState(0);
  const { displayed, done } = useTypewriter(LETTER_TEXT);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % BG_IMAGES.length);
    }, INTERVAL);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.container}>

      {/* ── Background carousel ── */}
      <div className={histStyles.carousel}>
        <AnimatePresence>
          <motion.div
            key={current}
            className={histStyles.carouselSlide}
            style={{ backgroundImage: `url(${BG_IMAGES[current]})` }}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1.0 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </AnimatePresence>
      </div>

      {/* Overlay */}
      <div className={histStyles.overlay} />

      {/* Dot indicators */}
      <div className={histStyles.dots}>
        {BG_IMAGES.map((_, i) => (
          <button
            key={i}
            className={`${histStyles.dot} ${i === current ? histStyles.dotActive : ""}`}
            onClick={() => setCurrent(i)}
            aria-label={`Background ${i + 1}`}
          />
        ))}
      </div>

      <div className={styles.bgPattern} />
      <div className={styles.accentBarLeft} />
      <div className={styles.accentBarRight} />

      {/* ── Split layout ── */}
      <div className={styles.splitLayout}>

        {/* LEFT — heading */}
        <motion.div
          className={styles.leftCol}
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
        >
          {/* Breadcrumb pill */}
          <div style={{
            display: "inline-flex",
            alignSelf: "flex-start",
            background: "rgba(0, 0, 0, 0.45)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "999px",
            padding: "6px 16px",
            marginBottom: "1.5rem",
          }}>
            <div className={styles.breadcrumb} style={{ marginBottom: 0 }}>
              <span className={styles.breadcrumbSection}>The Icon</span>
              <span className={styles.breadcrumbSep}>›</span>
              <span className={styles.breadcrumbPage}>History</span>
            </div>
          </div>

          <span className={styles.eyebrow}>The Story</span>
          <h2
            className={styles.heading}
            style={{
              color: "#ffffff",
              textShadow: "0 2px 16px rgba(0,0,0,0.7), 0 4px 32px rgba(0,0,0,0.5)",
            }}
          >
            Built on<br />
            <span style={{
              color: "#ffffff",
              filter:
                "drop-shadow(0 0 6px #d4af37) drop-shadow(0 0 18px #d4af37bb) drop-shadow(0 0 40px #f9f29566)",
            }}>Legacy</span>
          </h2>
          <div className={styles.divider} />
        </motion.div>

        {/* RIGHT — letter + stats */}
        <motion.div
          className={styles.rightCol}
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.85, ease: "easeOut", delay: 0.15 }}
        >

          {/* ── Parchment letter ── */}
          <motion.div
            className={histStyles.letterWrap}
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            transition={{
              scaleY: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.55 },
              opacity: { duration: 0.3, delay: 0.55 },
            }}
            style={{ transformOrigin: "top center" }}
          >
            {/* Paper top crease line */}
            <div className={histStyles.creaseTop} />

            {/* Letter header */}
            <div className={histStyles.letterHeader}>
              <span className={histStyles.letterDate}>August 11, 1992</span>
              <span className={histStyles.letterSeal}>✦</span>
            </div>

            {/* Ruled lines behind text */}
            <div className={histStyles.ruledLines} />

            {/* Typewriter text */}
            <p className={histStyles.letterText}>
              {displayed.split("\n\n").map((para, pi) => (
                <span key={pi}>
                  {para}
                  {pi < displayed.split("\n\n").length - 1 && <><br /><br /></>}
                </span>
              ))}
              {/* Blinking cursor while typing */}
              {!done && <span className={histStyles.cursor} />}
            </p>
          </motion.div>

          {/* Stats */}
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statValue}>1992</span>
              <span className={styles.statLabel}>Year Opened</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statValue}>1.3B+</span>
              <span className={styles.statLabel}>Total Visitors</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statValue}>30+</span>
              <span className={styles.statLabel}>Years of Legacy</span>
            </div>
          </div>

        </motion.div>
      </div>
    </div>
  );
}
