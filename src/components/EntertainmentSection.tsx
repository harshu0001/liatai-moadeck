"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./ContentSection.module.css";

export default function EntertainmentSection() {
  return (
    <section className={styles.section}>
      <div className={styles.imageWrapper}>
        <Image
          src="/images/entertainment.png"
          alt="Entertainment & Attractions"
          fill
          className={styles.bgImage}
        />
        <div className={styles.overlay} />
      </div>
      <div className={styles.content}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <span className={styles.eyebrow}>Endless Thrills</span>
          <h2 className={styles.title}>
            IMMERSIVE <br/>
            <span style={{ color: "#ffffff", textShadow: "0 0 10px #facc15, 0 0 20px #facc15, 0 0 40px #facc15" }}>ATTRACTIONS</span>
          </h2>
          <p className={styles.description} style={{ fontWeight: "bold" }}>
            Home to Nickelodeon Universe®, the nation's largest indoor theme park, 
            and the SEA LIFE® Minnesota Aquarium. Experience 7 acres of rides, 
            a 1.3-million-gallon aquarium, and interactive adventures for all ages.
          </p>
          <div className={styles.features}>
            <div className={styles.feature}>
              <span className={styles.featureValue}>7</span>
              <span className={styles.featureLabel}>Acre Theme Park</span>
            </div>
            <div className={styles.feature}>
              <span className={styles.featureValue}>1.3M</span>
              <span className={styles.featureLabel}>Gallon Aquarium</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
