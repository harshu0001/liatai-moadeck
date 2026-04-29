"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { MapPin, Globe, Maximize, Users } from "lucide-react";
import styles from "./LeasingSection.module.css";

const dataPoints = [
  {
    icon: MapPin,
    title: "Prime Location & Access",
    desc: "Located just 1 mile from MSP International Airport and perfectly situated at the intersection of major interstates, providing effortless local and global accessibility.",
  },
  {
    icon: Maximize,
    title: "Unmatched Scale",
    desc: "Spanning 5.6 million square feet with over 520 retail stores and 60+ dining options. The property is a self-contained ecosystem that drives all-day engagement.",
  },
  {
    icon: Users,
    title: "Visitor Demographics",
    desc: "Attracting a highly affluent and diverse audience. 40% of guests are tourists from outside a 150-mile radius, bringing significant extended-stay spending power.",
  },
  {
    icon: Globe,
    title: "Regional Reach",
    desc: "A dominant force in the Midwest market and beyond. Drawing 40 million annual visitors—more than the combined populations of North Dakota, South Dakota, Iowa, and Canada.",
  },
];

const stats = [
  { value: "40M", label: "Annual Visitors" },
  { value: "40%",   label: "Tourist Traffic" },
  { value: "5.6M", label: "Square Feet" },
  { value: "1 Mile", label: "From MSP Airport" },
];

const container: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.09 } } };
const fadeUp: Variants = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } } };

export default function WhyPropertySection() {
  return (
    <section className={styles.page}>

      {/* Background Image & Grid texture */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Image
          src="/images/why_property_bg.png"
          alt="Why This Property Background"
          fill
          style={{ objectFit: "cover", opacity: 0.35 }}
        />
      </div>
      <div className={styles.bgGrid} />
      <div className={styles.accentBar} />

      <div className={styles.inner}>

        {/* ── LEFT col ── */}
        <motion.div
          className={styles.left}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.span variants={fadeUp} className={styles.eyebrow}>
            Strategic Advantage
          </motion.span>

          <motion.h1 variants={fadeUp} className={styles.heading}>
            Why This<br />
            <span className={styles.headingGold}>Property</span>
          </motion.h1>

          <motion.div variants={fadeUp} className={styles.divider} />

          <motion.p variants={fadeUp} className={styles.intro}>
            Mall of America isn't just a shopping center; it's a global destination with an unparalleled gravitational pull. By blending massive scale with strategic location and tax advantages, it guarantees unparalleled exposure.
          </motion.p>

          {/* Stats strip */}
          <motion.div variants={fadeUp} className={styles.statsRow}>
            {stats.map((h) => (
              <div key={h.label} className={styles.statItem}>
                <span className={styles.statVal}>{h.value}</span>
                <span className={styles.statLbl}>{h.label}</span>
              </div>
            ))}
          </motion.div>
          
        </motion.div>

        {/* ── RIGHT col ── */}
        <motion.div
          className={styles.right}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >

          {/* Opportunity cards */}
          <p className={styles.colLabel}>Key Metrics</p>
          <div className={styles.oppsGrid}>
            {dataPoints.map((opp, i) => {
              const Icon = opp.icon;
              
              let initialAnim = {};
              if (i === 0) initialAnim = { opacity: 0, y: -60, x: 0 }; // Top
              else if (i === 1) initialAnim = { opacity: 0, x: 60, y: 0 };  // Right
              else if (i === 2) initialAnim = { opacity: 0, y: 60, x: 0 };  // Bottom
              else if (i === 3) initialAnim = { opacity: 0, x: -60, y: 0 }; // Left

              return (
                <motion.div
                  key={opp.title}
                  className={styles.oppCard}
                  initial={initialAnim}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.35 + i * 0.15, duration: 0.7, ease: "easeOut" }}
                >
                  <div className={styles.oppIcon}><Icon size={16} /></div>
                  <h3 className={styles.oppTitle}>{opp.title}</h3>
                  <p className={styles.oppDesc}>{opp.desc}</p>
                </motion.div>
              );
            })}
          </div>

        </motion.div>
      </div>
    </section>
  );
}
