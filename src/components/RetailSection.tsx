"use client";

import { motion } from "framer-motion";
import styles from "./ContentSection.module.css";

export default function RetailSection() {
  return (
    <section className={styles.section}>
      <div className={styles.imageWrapper}>
        <video
          src="/video/retail.mp4"
          autoPlay
          muted
          loop
          playsInline
          className={styles.bgImage}
        />
        <div className={styles.overlay} />
      </div>
      <div className={styles.content} style={{ maxWidth: "1200px", width: "100%" }}>
        <div className={styles.splitContainer}>
          
          {/* Left: Text & Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            style={{ flex: "1 1 400px", paddingTop: "1rem" }}
          >
            <p className={styles.description}>
              With over 520 world-class stores, Mall of America is a global shopping destination. 
              From luxury flagships like Chanel and Gucci to first-to-market brands, 
              we offer an unparalleled retail mix in a tax-free environment for clothing and shoes.
            </p>
            <div className={styles.features}>
              <div className={styles.feature}>
                <span className={styles.featureValue}>520+</span>
                <span className={styles.featureLabel}>Retailers</span>
              </div>
              <div className={styles.feature}>
                <span className={styles.featureValue}>0%</span>
                <span className={styles.featureLabel}>Tax on Clothing</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Heading */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            style={{ flex: "1 1 400px", textAlign: "right" }}
          >
            <span className={styles.eyebrow}>Curated Luxury</span>
            <h2 className={styles.title} style={{ marginBottom: 0 }}>
              RETAIL <br/>
              <span className={styles.neonGold}>EXCELLENCE</span>
            </h2>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
