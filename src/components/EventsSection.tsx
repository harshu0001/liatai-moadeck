"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import styles from "./ContentSection.module.css";
import EventsModal from "./EventsModal";

export default function EventsSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      <div className={styles.content}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className={styles.centeredContent}
        >
          <span className={styles.eyebrow}>Global Stage</span>
          <h2 className={styles.title}>
            VIBRANT <br/>
            <span className={styles.neonGold}>EXPERIENCES</span>
          </h2>
          <p className={styles.description}>
            With over 300 events annually, Mall of America is a premier platform for 
            celebrity appearances, concerts, and community celebrations. From 
            international fashion shows to cultural festivals, the stage is always set.
          </p>
          <div className={styles.features}>
            <div className={styles.cardFeature}>
              <span className={styles.featureValue}>300+</span>
              <span className={styles.featureLabel}>Annual Events</span>
            </div>
            <div className={styles.cardFeature}>
              <span className={styles.featureValue}>1.3B+</span>
              <span className={styles.featureLabel}>Total Visitors</span>
            </div>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsModalOpen(true)}
            className={styles.ctaButton}
          >
            Explore Hosting Capabilities
          </motion.button>
        </motion.div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <EventsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        )}
      </AnimatePresence>
    </section>
  );
}
