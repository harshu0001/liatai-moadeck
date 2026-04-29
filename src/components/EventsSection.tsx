"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./ContentSection.module.css";

export default function EventsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.imageWrapper}>
        <Image
          src="/images/events_platform_bg.png"
          alt="Events & Platform"
          fill
          className={styles.bgImage}
        />
        <div className={styles.overlay} />
      </div>
      <div className={styles.content} style={{ width: "100%", maxWidth: "100%", margin: 0, display: "flex", justifyContent: "center" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", maxWidth: "800px" }}
        >
          <span className={styles.eyebrow}>Global Stage</span>
          <h2 className={styles.title}>
            VIBRANT <br/>
            <span style={{ color: "#ffffff", textShadow: "0 0 10px #facc15, 0 0 20px #facc15, 0 0 40px #facc15" }}>EXPERIENCES</span>
          </h2>
          <p className={styles.description} style={{ fontWeight: "bold", color: "#ffffff" }}>
            With over 300 events annually, Mall of America is a premier platform for 
            celebrity appearances, concerts, and community celebrations. From 
            international fashion shows to cultural festivals, the stage is always set.
          </p>
          <div className={styles.features} style={{ display: "flex", gap: "2rem", justifyContent: "center", marginTop: "2rem", width: "100%" }}>
            <div className={styles.feature} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "16px", padding: "2rem", backdropFilter: "blur(12px)", flex: "1 1 0", minWidth: "200px" }}>
              <span className={styles.featureValue}>300+</span>
              <span className={styles.featureLabel}>Annual Events</span>
            </div>
            <div className={styles.feature} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "16px", padding: "2rem", backdropFilter: "blur(12px)", flex: "1 1 0", minWidth: "200px" }}>
              <span className={styles.featureValue}>1.3B+</span>
              <span className={styles.featureLabel}>Total Visitors</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
