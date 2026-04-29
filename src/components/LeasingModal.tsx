"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Phone, Mail, Building2, Utensils, Sparkles, Star } from "lucide-react";
import styles from "./LeasingModal.module.css";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const opportunities = [
  {
    icon: Building2,
    title: "Inline Retail",
    desc: "Premium storefronts across four levels of world-class retail, with 40M+ annual visitors and unmatched brand exposure in the heart of the Midwest.",
  },
  {
    icon: Utensils,
    title: "Food & Beverage",
    desc: "Join 60+ dining concepts from fast casual to fine dining. MOA's food hall, themed restaurants, and café spaces draw guests for entire-day experiences.",
  },
  {
    icon: Sparkles,
    title: "Entertainment",
    desc: "Home to Nickelodeon Universe®, SEA LIFE Aquarium, and more. Unique entertainment concepts thrive alongside the nation's largest indoor theme park.",
  },
  {
    icon: Star,
    title: "Specialty & Kiosks",
    desc: "High-traffic common area locations, seasonal pop-ups, and permanent kiosk placements. Ideal for emerging brands seeking maximum visibility.",
  },
];

const highlights = [
  { value: "40M+",  label: "Annual Visitors" },
  { value: "520+",  label: "Retail Outlets" },
  { value: "0%",    label: "Clothing Sales Tax (MN)" },
  { value: "5.6M",  label: "Sq Ft of Space" },
];

export default function LeasingModal({ isOpen, onClose }: Props) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.backdrop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
        >
          <motion.div
            className={styles.panel}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 280 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
              <X size={20} />
            </button>

            <div className={styles.inner}>

              {/* Header */}
              <div className={styles.header}>
                <span className={styles.eyebrow}>Mall of America®</span>
                <h2 className={styles.title}>Leasing &<br />Development</h2>
                <div className={styles.titleDivider} />
                <p className={styles.subtitle}>
                  One of the most visited retail destinations on earth. Securing space at Mall of
                  America means placing your brand in front of 40 million annual guests — shoppers,
                  tourists, and families from across the globe.
                </p>
              </div>

              {/* Key stats strip */}
              <div className={styles.statsRow}>
                {highlights.map((h) => (
                  <div key={h.label} className={styles.statItem}>
                    <span className={styles.statVal}>{h.value}</span>
                    <span className={styles.statLbl}>{h.label}</span>
                  </div>
                ))}
              </div>

              {/* Opportunity types */}
              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Leasing Opportunities</h3>
                <div className={styles.oppsGrid}>
                  {opportunities.map((opp) => {
                    const Icon = opp.icon;
                    return (
                      <div key={opp.title} className={styles.oppCard}>
                        <div className={styles.oppIcon}>
                          <Icon size={18} />
                        </div>
                        <h4 className={styles.oppTitle}>{opp.title}</h4>
                        <p className={styles.oppDesc}>{opp.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Why MOA */}
              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Why Mall of America?</h3>
                <ul className={styles.whyList}>
                  <li>Located 1 mile from MSP International Airport — accessible to international visitors</li>
                  <li>Minnesota has <strong>0% sales tax</strong> on clothing and footwear</li>
                  <li>Over <strong>300 events</strong> annually drive repeat foot traffic year-round</li>
                  <li>Consistent <strong>70°F</strong> indoor climate — a year-round destination regardless of season</li>
                  <li>Own ZIP code, own police force, and on-site hotel partners</li>
                </ul>
              </div>

              {/* Contact */}
              <div className={styles.contact}>
                <h3 className={styles.sectionTitle}>Get In Touch</h3>
                <div className={styles.contactGrid}>
                  <a href="mailto:leasing@mallofamerica.com" className={styles.contactItem}>
                    <Mail size={15} />
                    <span>leasing@mallofamerica.com</span>
                  </a>
                  <a href="tel:+19528836800" className={styles.contactItem}>
                    <Phone size={15} />
                    <span>+1 (952) 883-8800</span>
                  </a>
                  <div className={styles.contactItem}>
                    <MapPin size={15} />
                    <span>60 E Broadway, Bloomington, MN 55425</span>
                  </div>
                </div>

                <a
                  href="https://www.mallofamerica.com/leasing-development"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.ctaBtn}
                >
                  Visit Official Leasing Page ↗
                </a>
              </div>

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
