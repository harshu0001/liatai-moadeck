"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";
import styles from "./LeasingModal.module.css";
import { useEffect } from "react";

// Mock data for the deep dive sub-modules based on category
const categoryData: Record<string, any> = {
  "Inline Retail": {
    pitch: "Position your brand among global flagships. Inline retail at Mall of America benefits from a meticulously designed loop layout that ensures every storefront receives high-visibility foot traffic. Benefit from 0% clothing tax and a massive 40M+ annual visitor base.",
    stats: [
      { label: "Total Retail Area", value: "2.8M sqft" },
      { label: "Avg Dwell Time", value: "2.5 Hours" },
      { label: "Tourism Spend", value: "2.5x Local" },
    ],
  },
  "Food & Beverage": {
    pitch: "Food is a lifestyle draw. From our massive culinary food halls to fine dining establishments, MOA is a dining destination. Guests here spend the entire day, meaning multiple meals and snacking opportunities are guaranteed.",
    stats: [
      { label: "Dining Concepts", value: "60+" },
      { label: "Peak Meal Traffic", value: "35k/day" },
      { label: "Avg F&B Spend", value: "$45/person" },
    ],
  },
  "Entertainment": {
    pitch: "Co-locate with the nation's largest indoor theme park. Entertainment concepts thrive here because Mall of America is fundamentally an experience engine. Your venue will serve as a primary anchor driving repeat regional visits.",
    stats: [
      { label: "Entertainment Footprint", value: "1.2M sqft" },
      { label: "Family Demographics", value: "65%" },
      { label: "Repeat Visitors", value: "72%" },
    ],
  },
  "Specialty & Kiosks": {
    pitch: "High-traffic common area placements offer the ultimate brand exposure. Perfect for emerging brands, tech showcases, and seasonal pop-ups. Capitalize on massive central intersections and escalator landings.",
    stats: [
      { label: "Daily Footfall", value: "110k+" },
      { label: "Impression Rate", value: "98%" },
      { label: "Flexible Terms", value: "3-12 Mos" },
    ],
  }
};

interface LeasingModalProps {
  isOpen: boolean;
  onClose: () => void;
  category: { title: string; desc: string } | null;
}

export default function LeasingModal({ isOpen, onClose, category }: LeasingModalProps) {
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

  if (!isOpen || !category) return null;

  const data = categoryData[category.title] || categoryData["Inline Retail"];

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

        {/* Left Column: Visual & Header */}
        <div className={styles.leftCol}>
          <Image 
            src="/images/blueprint_bg.png" 
            alt="Blueprint Background" 
            fill 
            sizes="(max-width: 768px) 100vw, 50vw"
            className={styles.blueprintBg}
          />
          <div className={styles.blueprintOverlay} />
          
          <div className={styles.leftContent}>
            <span className={styles.moduleEyebrow}>Leasing Path deep-dive</span>
            <h2 className={styles.categoryTitle}>{category.title}</h2>
            <p className={styles.categoryDesc}>{category.desc}</p>
          </div>
        </div>

        {/* Right Column: Data & CTA */}
        <div className={styles.rightCol}>
          <h3 className={styles.sectionTitle}>Category Analytics</h3>
          
          <div className={styles.statsGrid}>
            {data.stats.map((stat: any, i: number) => (
              <div key={i} className={styles.statBlock}>
                <span className={styles.statVal}>{stat.value}</span>
                <span className={styles.statLbl}>{stat.label}</span>
              </div>
            ))}
          </div>

          <h3 className={styles.sectionTitle}>Strategic Positioning</h3>
          <p className={styles.pitchText}>{data.pitch}</p>

          <button className={styles.ctaBtn} onClick={onClose}>
            Inquire About Space
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
