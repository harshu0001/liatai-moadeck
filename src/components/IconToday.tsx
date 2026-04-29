"use client";

import { motion } from "framer-motion";
import styles from "./IconSection.module.css";
import todayStyles from "./IconToday.module.css";

export default function IconToday() {
  return (
    <div className={styles.container}>

      {/* ── Full-bleed background video ── */}
      <video
        className={styles.bgVideo}
        src="/video/presentday.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Light scrim */}
      <div className={todayStyles.overlay} />

      <div className={styles.bgPattern} />
      <div className={styles.accentBarLeft} />
      <div className={styles.accentBarRight} />

      {/* ── Split layout — text LEFT, heading RIGHT ── */}
      <div className={styles.splitLayout}>

        {/* LEFT — body text + stats */}
        <motion.div
          className={styles.rightCol}
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.85, ease: "easeOut", delay: 0.15 }}
          style={{ borderLeft: "none", borderRight: "2px solid rgba(212,175,55,0.25)", paddingLeft: "2.5rem", paddingRight: "3rem" }}
        >
          <p className={styles.body} style={{ fontWeight: 600 }}>
            Today, Mall of America is not just alive — it is thriving. It generates
            over $3 billion annually for the State of Minnesota, hosts more than 300
            events each year, and continues to attract tens of millions of visitors from
            across the globe.
            <br /><br />
            With 520+ world-class retailers, 60+ dining options, the nation&apos;s largest
            indoor theme park, and a 1.3-million-gallon aquarium, the Mall remains
            the singular destination of its kind — a living ecosystem of commerce,
            entertainment, and experience, redefining what a mall can be.
          </p>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statValue}>$3B+</span>
              <span className={styles.statLabel}>Annual Impact</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statValue}>300+</span>
              <span className={styles.statLabel}>Events / Year</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statValue}>40M+</span>
              <span className={styles.statLabel}>Annual Visitors</span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT — heading */}
        <motion.div
          className={styles.leftCol}
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          style={{ alignItems: "flex-end", textAlign: "right" }}
        >
          {/* Breadcrumb pill — right aligned */}
          <div style={{
            display: "inline-flex",
            alignSelf: "flex-end",
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
              <span className={styles.breadcrumbPage}>Today</span>
            </div>
          </div>

          <span className={styles.eyebrow} style={{ textAlign: "right" }}>Present Day</span>

          <h2
            className={styles.heading}
            style={{
              color: "#ffffff",
              textShadow: "0 2px 16px rgba(0,0,0,0.7), 0 4px 32px rgba(0,0,0,0.5)",
              textAlign: "right",
            }}
          >
            More Than<br />
            <span style={{
              color: "#ffffff",
              filter:
                "drop-shadow(0 0 6px #00c6ff) drop-shadow(0 0 18px #00c6ffaa) drop-shadow(0 0 40px #00e67666)",
            }}>Ever Before</span>
          </h2>

          <div className={todayStyles.dividerRight} />
        </motion.div>

      </div>
    </div>
  );
}
