"use client";

import { motion, Variants, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Building2, Utensils, Sparkles, Star, MapPin, Phone, Mail } from "lucide-react";
import { useState } from "react";
import styles from "./LeasingSection.module.css";
import LeasingModal from "./LeasingModal";

const opportunities = [
  {
    icon: Building2,
    title: "Inline Retail",
    desc: "Premium storefronts across four levels with 40M+ annual guests and unmatched brand visibility in the heart of the Midwest.",
  },
  {
    icon: Utensils,
    title: "Food & Beverage",
    desc: "Join 60+ dining concepts from fast casual to fine dining. MOA's food culture drives guests into full-day experiences.",
  },
  {
    icon: Sparkles,
    title: "Entertainment",
    desc: "Co-locate with Nickelodeon Universe® and SEA LIFE Aquarium. Unique concepts thrive alongside the nation's largest indoor theme park.",
  },
  {
    icon: Star,
    title: "Specialty & Kiosks",
    desc: "High-traffic common area placements and seasonal pop-ups ideal for emerging brands seeking maximum exposure.",
  },
];

const whyItems = [
  "Located 1 mile from MSP International Airport — accessible to global visitors",
  "Minnesota has 0% sales tax on clothing and footwear",
  "300+ annual events drive consistent, repeat foot traffic year-round",
  "Year-round 70°F indoor climate — a destination regardless of season",
  "Own ZIP code, on-site hotel partners, and dedicated police force",
];

const highlights = [
  { value: "40M+", label: "Annual Visitors" },
  { value: "520+", label: "Retail Outlets" },
  { value: "0%",   label: "Clothing Sales Tax" },
  { value: "5.6M", label: "Sq Ft" },
];

const container: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.09 } } };
const fadeUp: Variants = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } } };

export default function LeasingSection() {
  const [selectedCategory, setSelectedCategory] = useState<{title: string, desc: string} | null>(null);

  return (
    <section className={styles.page}>

      {/* Background Image & Grid texture */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Image
          src="/images/leasing_bg.png"
          alt="Leasing Background"
          fill
          style={{ objectFit: "cover", opacity: 0.3 }}
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
          animate="show"
        >
          <motion.span variants={fadeUp} className={styles.eyebrow}>
            Opportunity Awaits
          </motion.span>

          <motion.h1 variants={fadeUp} className={styles.heading}>
            Leasing &<br />
            <span className={styles.headingGold}>Development</span>
          </motion.h1>

          <motion.div variants={fadeUp} className={styles.divider} />

          <motion.p variants={fadeUp} className={styles.intro}>
            Securing space at Mall of America means placing your brand in front of
            40 million annual guests — shoppers, tourists, and families from across
            the globe. One address. Infinite reach.
          </motion.p>

          {/* Stats strip */}
          <motion.div variants={fadeUp} className={styles.statsRow}>
            {highlights.map((h) => (
              <div key={h.label} className={styles.statItem}>
                <span className={styles.statVal}>{h.value}</span>
                <span className={styles.statLbl}>{h.label}</span>
              </div>
            ))}
          </motion.div>

          {/* Contact */}
          <motion.div variants={fadeUp} className={styles.contactBlock}>
            <a href="mailto:leasing@mallofamerica.com" className={styles.contactRow}>
              <Mail size={13} /> <span>leasing@mallofamerica.com</span>
            </a>
            <a href="tel:+19528838100" className={styles.contactRow}>
              <Phone size={13} /> <span>+1 (952) 883-8100</span>
            </a>
            <div className={styles.contactRow}>
              <MapPin size={13} /> <span>60 E Broadway, Bloomington, MN 55425</span>
            </div>
          </motion.div>

          <motion.a
            variants={fadeUp}
            href="https://www.mallofamerica.com/leasing-development"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaBtn}
          >
            Visit Official Page ↗
          </motion.a>
        </motion.div>

        {/* ── RIGHT col ── */}
        <motion.div
          className={styles.right}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >

          {/* Opportunity cards */}
          <p className={styles.colLabel}>Leasing Opportunities</p>
          <div className={styles.oppsGrid}>
            {opportunities.map((opp, i) => {
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
                  onClick={() => setSelectedCategory(opp)}
                  style={{ cursor: "pointer" }}
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

          {/* Why list */}
          <p className={styles.colLabel} style={{ marginTop: "0.8rem" }}>Why Mall of America?</p>
          <ul className={styles.whyList}>
            {whyItems.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + i * 0.08, duration: 0.45, ease: "easeOut" }}
              >
                {item}
              </motion.li>
            ))}
          </ul>

        </motion.div>
      </div>

      <AnimatePresence>
        {selectedCategory && (
          <LeasingModal 
            isOpen={!!selectedCategory} 
            category={selectedCategory} 
            onClose={() => setSelectedCategory(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
}
