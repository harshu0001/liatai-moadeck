"use client";

import { motion } from "framer-motion";
import styles from "./ContentSection.module.css";

export default function EntNickelodeon() {
  return (
    <section className={styles.section}>
      <div className={styles.imageWrapper}>
        <video
          src="/video/themeuniv.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className={styles.bgImage}
        />
        <div className={styles.overlay} />
      </div>
      <div className={styles.content}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className={styles.splitContainer}
        >
          {/* Left: Heading */}
          <div className={styles.splitLeft}>
            <span className={styles.eyebrow}>The Centerpiece</span>
            <h2 className={styles.title}>
              <span className={styles.neonOrange}>NICKELODEON</span> <br />
              <span className={styles.neonPurple}>UNIVERSE®</span>
            </h2>
          </div>

          {/* Right: Text & Stats */}
          <div className={styles.splitRight}>
            <p className={styles.description}>
              The nation's largest indoor theme park sits at the very heart of Mall of America. 
              Featuring 27 rides and attractions, it offers everything from pulse-pounding roller 
              coasters to family-friendly experiences, all under a massive glass skylight.
            </p>
            <div className={styles.features}>
              <div className={styles.feature}>
                <span className={styles.featureValue}>27</span>
                <span className={styles.featureLabel}>Rides & Attractions</span>
              </div>
              <div className={styles.feature}>
                <span className={styles.featureValue}>7</span>
                <span className={styles.featureLabel}>Acres of Fun</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
