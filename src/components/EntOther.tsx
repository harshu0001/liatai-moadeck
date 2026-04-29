"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./ContentSection.module.css";

export default function EntOther() {
  return (
    <section className={styles.section}>
      <div className={styles.imageWrapper}>
        <Image
          src="/images/other_attractions_bg.png"
          alt="Other Attractions"
          fill
          className={styles.bgImage}
        />
        <div className={styles.overlay} />
      </div>
      <div className={styles.content} style={{ maxWidth: "1200px", width: "100%" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className={styles.splitContainer}
        >
          {/* Left: Text & Stats */}
          <div style={{ flex: "1 1 400px", paddingTop: "1rem" }}>
            <p className={styles.description} style={{ fontWeight: "bold", color: "#ffffff" }}>
              The adventure doesn't stop at the rides. Dive into the 1.3-million-gallon SEA LIFE® 
              Aquarium, soar across the country at FlyOver America, or spark creativity at the 
              Crayola Experience. MOA is a hub for interactive, immersive entertainment.
            </p>
            <div className={styles.features}>
              <div className={styles.feature}>
                <span className={styles.featureValue}>15+</span>
                <span className={styles.featureLabel}>Unique Attractions</span>
              </div>
              <div className={styles.feature}>
                <span className={styles.featureValue}>1.3M</span>
                <span className={styles.featureLabel}>Gallon Aquarium</span>
              </div>
            </div>
          </div>

          {/* Right: Heading */}
          <div style={{ flex: "1 1 400px", textAlign: "right" }}>
            <span className={styles.eyebrow}>Beyond the Park</span>
            <h2 className={styles.title} style={{ marginBottom: 0 }}>
              WORLD-CLASS <br />
              <span style={{ color: "#ffffff", textShadow: "0 0 5px #fff, 0 0 10px #0ea5e9, 0 0 20px #0ea5e9, 0 0 40px #0ea5e9, 0 0 80px #0ea5e9" }}>ATTRACTIONS</span>
            </h2>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
