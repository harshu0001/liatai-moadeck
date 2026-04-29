"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { Utensils, Wine, Fish, Coffee } from "lucide-react";
import styles from "./DiningSection.module.css";

const restaurants = [
  {
    name: "Cedar + Stone, Urban Table",
    type: "Farm to Table",
    icon: Utensils,
    desc: "Led by celebrated chefs, offering refined, locally sourced dishes inspired by Minnesota's natural roots.",
  },
  {
    name: "CRAVE American Kitchen",
    type: "American & Sushi",
    icon: Fish,
    desc: "A vibrant, energetic atmosphere featuring fresh sushi, premium steaks, and an award-winning wine list.",
  },
  {
    name: "Twin City Grill",
    type: "Classic American",
    icon: Wine,
    desc: "An elegant, nostalgic setting serving prime steaks, fresh seafood, and classic comfort food with a sophisticated touch.",
  },
  {
    name: "FireLake Grill House",
    type: "Woodfire Cooking",
    icon: Coffee,
    desc: "Incorporating the rich, robust flavors of the heartland with wood-smoked meats and locally crafted spirits.",
  },
];

const container: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const fadeUp: Variants = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } } };

export default function DiningSection() {
  return (
    <section className={styles.section}>
      <div className={styles.imageWrapper}>
        <Image
          src="/images/dining.png"
          alt="Fine Dining"
          fill
          className={styles.bgImage}
        />
        <div className={styles.overlay} />
      </div>

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
            Culinary Diversity
          </motion.span>

          <motion.h2 variants={fadeUp} className={`${styles.title} ${styles.neonTurquoise}`} style={{ color: "#ffffff" }}>
            WORLD-CLASS <br />
            DINING
          </motion.h2>

          <motion.div variants={fadeUp} className={styles.divider} />

          <motion.p variants={fadeUp} className={styles.description}>
            Satisfy every craving with more than 60 different dining options. 
            From elegant full-service restaurants with curated wine lists to vibrant bars 
            and unique experiential eateries, Mall of America offers a culinary journey 
            that perfectly complements the premium shopping experience.
          </motion.p>

          <motion.div variants={fadeUp} className={styles.statsRow}>
            <div className={styles.statItem}>
              <span className={styles.statVal}>60+</span>
              <span className={styles.statLbl}>Dining Concepts</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statVal}>15+</span>
              <span className={styles.statLbl}>Full-Service</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statVal}>4+</span>
              <span className={styles.statLbl}>Premium Bars</span>
            </div>
          </motion.div>
        </motion.div>

        {/* ── RIGHT col (Cards) ── */}
        <div className={styles.right}>
          {restaurants.map((rest, i) => {
            const Icon = rest.icon;
            
            // 4 different directions based on index
            let initialAnim = {};
            if (i === 0) initialAnim = { opacity: 0, y: -60, x: 0 }; // Top
            else if (i === 1) initialAnim = { opacity: 0, x: 60, y: 0 };  // Right
            else if (i === 2) initialAnim = { opacity: 0, y: 60, x: 0 };  // Bottom
            else if (i === 3) initialAnim = { opacity: 0, x: -60, y: 0 }; // Left

            return (
              <motion.div
                key={rest.name}
                className={styles.cardWrapper}
                initial={initialAnim}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.15, ease: "easeOut" }}
              >
                <div className={styles.restaurantCard}>
                  <Icon size={22} className={styles.cardIcon} />
                  <span className={styles.cardType}>{rest.type}</span>
                  <h3 className={styles.cardTitle}>{rest.name}</h3>
                  <p className={styles.cardDesc}>{rest.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
