"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "./IconSection.module.css";

/* ── Count-up hook ─────────────────────────────────────────────────────── */
function useCountUp(target: number, duration = 2200, decimals = 0, delay = 600) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let raf: number;
    const timeout = setTimeout(() => {
      const startTime = performance.now();

      const tick = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Ease-out cubic — fast at first, decelerates to final value
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(parseFloat((target * eased).toFixed(decimals)));

        if (progress < 1) raf = requestAnimationFrame(tick);
      };

      raf = requestAnimationFrame(tick);
    }, delay);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(raf);
    };
  }, [target, duration, decimals, delay]);

  return value;
}

/* ── Component ─────────────────────────────────────────────────────────── */
export default function IconAbout() {
  const sqFt   = useCountUp(5.6,  2400, 1, 700);   // 0.0 → 5.6
  const temp   = useCountUp(70,   2000, 0, 700);    // 0   → 70
  const plants = useCountUp(30,   2200, 0, 700);    // 0   → 30

  return (
    <div className={styles.container}>
      {/* Full-bleed background video */}
      <video
        className={styles.bgVideo}
        src="/video/vidabout.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      {/* Dark scrim */}
      <div className={styles.videoOverlay} />

      <div className={styles.bgPattern} />
      <div className={styles.accentBarLeft} />
      <div className={styles.accentBarRight} />

      {/* ── Two-column split layout ── */}
      <div className={styles.splitLayout}>

        {/* LEFT — big heading */}
        <motion.div
          className={`${styles.leftCol} ${styles.glass}`}
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
        >
          <div className={styles.breadcrumb}>
            <span className={styles.breadcrumbSection}>The Icon</span>
            <span className={styles.breadcrumbSep}>›</span>
            <span className={styles.breadcrumbPage}>About</span>
          </div>

          <span className={styles.eyebrow}>What It Is</span>
          <h2 className={styles.heading}>
            A{" "}
            <span style={{
              color: "#ffffff",
              filter:
                "drop-shadow(0 0 6px #00c6ff) drop-shadow(0 0 18px #00c6ffaa) drop-shadow(0 0 40px #00e67666)",
            }}>World</span>
            <br />Unto{" "}
            <span style={{
              color: "#ffffff",
              filter:
                "drop-shadow(0 0 6px #d4af37) drop-shadow(0 0 18px #d4af37bb) drop-shadow(0 0 40px #f9f29566)",
            }}>Itself</span>
          </h2>
          <div className={styles.divider} />
        </motion.div>

        {/* RIGHT — body text + stats */}
        <motion.div
          className={`${styles.rightCol} ${styles.glass}`}
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.85, ease: "easeOut", delay: 0.15 }}
        >
          <p className={styles.body}>
            Mall of America is more than a shopping destination — it is a landmark.
            Located in Bloomington, Minnesota, just minutes from downtown Minneapolis
            and adjacent to MSP International Airport, it is one of the most recognized
            commercial addresses on the planet.
            <br /><br />
            Spanning 5.6 million square feet, the Mall maintains a year-round indoor
            temperature of 70°F entirely through passive solar energy — no central heating
            required. It houses over 30,000 live plants, 300 trees, and its own ZIP code.
            It is not just a mall. It is a city within a city.
          </p>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statValue}>{sqFt}M</span>
              <span className={styles.statLabel}>Sq Ft</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statValue}>{temp}°F</span>
              <span className={styles.statLabel}>Year-Round</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statValue}>{plants}K+</span>
              <span className={styles.statLabel}>Live Plants</span>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
