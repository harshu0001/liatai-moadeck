"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./CinematicIntro.module.css";

export default function CinematicIntro() {
  return (
    <section className={styles.introContainer}>
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className={styles.imageWrapper}
      >
        <Image
          src="/images/page2.jpg"
          alt="Mall of America Interior"
          fill
          priority
          className={styles.bgImage}
        />
        <div className={styles.overlay} />
      </motion.div>

      <div className={styles.content}>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
          style={{ position: "relative" }}
        >
          <span className={styles.tag}>The North Star of Retail</span>
          <h2 className={styles.heading} style={{ color: "#ffffff", textShadow: "0 0 10px #facc15, 0 0 20px #facc15, 0 0 40px #facc15, 0 0 80px #facc15" }}>THE ICON</h2>
          <p className={styles.subtitle}>
            A destination unlike any other. Mall of America is a landmark of commerce,
            culture, and community — spanning 5.6 million square feet in the heart of Minnesota.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
