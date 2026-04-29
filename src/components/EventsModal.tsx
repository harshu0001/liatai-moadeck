"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";
import styles from "./EventsModal.module.css";
import { useEffect } from "react";

interface EventsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EventsModal({ isOpen, onClose }: EventsModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <motion.div 
      className={styles.overlay}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <motion.div 
        className={styles.modalContent}
        initial={{ y: 50, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 20, opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.5, type: "spring", damping: 25 }}
      >
        <button className={styles.closeBtn} onClick={onClose}>
          <X size={20} />
        </button>

        {/* Top/Hero Section */}
        <div className={styles.heroSection}>
          <Image 
            src="/images/event_gallery.png" 
            alt="Event Rotunda" 
            fill 
            sizes="100vw"
            className={styles.heroImg}
          />
          <div className={styles.heroOverlay} />
          
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>Global Platform</span>
            <h2 className={styles.title}>Event Hosting</h2>
          </div>
        </div>

        {/* Bottom/Info Section */}
        <div className={styles.infoSection}>
          <div className={styles.leftInfo}>
            <h3 className={styles.sectionTitle}>The Rotunda Capabilities</h3>
            <p className={styles.desc}>
              The Huntington Bank Rotunda is a premier, multi-level event space situated in the heart of Mall of America. Engineered to host world-class productions, it provides massive vertical scale, dynamic sightlines from three elevated balconies, and high-capacity infrastructure capable of supporting heavy rigging and touring-grade A/V.
            </p>

            <div className={styles.specsGrid}>
              <div className={styles.specItem}>
                <span className={styles.specVal}>4,000+</span>
                <span className={styles.specLbl}>Max Capacity</span>
              </div>
              <div className={styles.specItem}>
                <span className={styles.specVal}>75ft</span>
                <span className={styles.specLbl}>Ceiling Clearance</span>
              </div>
              <div className={styles.specItem}>
                <span className={styles.specVal}>360°</span>
                <span className={styles.specLbl}>Viewing Angles</span>
              </div>
              <div className={styles.specItem}>
                <span className={styles.specVal}>Built-in</span>
                <span className={styles.specLbl}>Rigging Grid</span>
              </div>
            </div>
          </div>

          <div className={styles.rightInfo}>
            <h3 className={styles.sectionTitle}>Past Activations</h3>
            <ul className={styles.eventTypes}>
              <li>Global Brand Launches (Nike, Pepsi)</li>
              <li>Live Concerts & Performances</li>
              <li>Celebrity Book Signings</li>
              <li>Esports Tournaments</li>
              <li>Charity Galas & Telethons</li>
            </ul>

            <button className={styles.ctaBtn} onClick={onClose}>
              Inquire About Booking
            </button>
          </div>
        </div>

      </motion.div>
    </motion.div>
  );
}
