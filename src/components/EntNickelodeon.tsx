"use client";

import { motion } from "framer-motion";
import styles from "./ContentSection.module.css";

export default function EntNickelodeon() {
  return (
    <section className={styles.section}>
      <div className={styles.imageWrapper}>
        <video
          src="/video/nickeluniv.mp4#t=28"
          autoPlay
          muted
          loop
          playsInline
          className={styles.bgImage}
        />
      </div>
      <div className={styles.content} style={{ maxWidth: "1200px", width: "100%" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className={styles.splitContainer}
        >
          {/* Left: Heading */}
          <div style={{ flex: "1 1 400px" }}>
            <span className={styles.eyebrow}>The Centerpiece</span>
            <h2 className={styles.title} style={{ marginBottom: 0 }}>
              <span style={{ color: "#ffffff", textShadow: "0 0 5px #fff, 0 0 10px #f97316, 0 0 20px #f97316, 0 0 40px #f97316, 0 0 80px #f97316" }}>NICKELODEON</span> <br />
              <span style={{ color: "#a855f7", textShadow: "0 0 20px #a855f7" }}>UNIVERSE®</span>
            </h2>
          </div>

          {/* Right: Text & Stats */}
          <div style={{ flex: "1 1 400px", paddingTop: "1rem" }}>
            <p className={styles.description} style={{ fontWeight: "bold", color: "#ffffff" }}>
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
