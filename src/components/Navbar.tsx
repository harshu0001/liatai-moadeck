"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Menu, X, ChevronLeft, ChevronRight, LayoutGrid,
  Landmark, ShoppingBag, Utensils, Sparkles, Calendar, PlayCircle
} from "lucide-react";
import { useState } from "react";
import styles from "./Navbar.module.css";
import { useDeck } from "./DeckContext";



// Slide index reference (must match page.tsx slides array order):
// 0: video, 1: intro, 2: icon-about, 3: icon-history, 4: icon-today,
// 5: stats, 6: retail, 7: dining, 8: entertainment, 9: ent-nick, 10: ent-other, 11: events, 12: leasing

const navItems = [
  {
    name: "Cinematic",
    icon: PlayCircle,
    slideIndex: 0,
  },
  {
    name: "The Icon",
    icon: Landmark,
    slideIndex: 1,
    children: [
      { name: "About",   slideIndex: 2 },
      { name: "History", slideIndex: 3 },
      { name: "Today",   slideIndex: 4 },
    ],
  },
  { name: "Why This Property", icon: LayoutGrid, slideIndex: 5 },
  { name: "Scale",             icon: LayoutGrid, slideIndex: 6 },
  { name: "Retail Excellence", icon: ShoppingBag, slideIndex: 7 },
  { name: "Fine Dining",       icon: Utensils,   slideIndex: 8 },
  { 
    name: "Entertainment",     
    icon: Sparkles,   
    slideIndex: 9,
    children: [
      { name: "Theme Park", slideIndex: 10 },
      { name: "Other Attractions", slideIndex: 11 },
    ]
  },
  { name: "Events & Platform", icon: Calendar,   slideIndex: 12 },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { currentSlide, totalSlides, nextSlide, prevSlide, goToSlide } = useDeck();


  // Which top-level item is active?
  const activeTopLevel = navItems.find(item => {
    if (item.slideIndex === currentSlide) return true;
    if (item.children) return item.children.some(c => c.slideIndex === currentSlide);
    return false;
  });

  const progressPct = totalSlides > 1
    ? Math.round((currentSlide / (totalSlides - 1)) * 100)
    : 0;

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.leftControls}>
          <button className={styles.iconBtn} onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>

          <div className={styles.divider} />

          <button
            className={styles.iconBtn}
            onClick={prevSlide}
            disabled={currentSlide === 0}
            aria-label="Previous Slide"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            className={styles.iconBtn}
            onClick={nextSlide}
            aria-label="Next Slide"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        <div className={styles.centerLogo}>
          <span className="gold-gradient">MALL OF AMERICA</span>
        </div>

        <div className={styles.rightControls}>
          <button className={styles.iconBtn} aria-label="View All Slides">
            <LayoutGrid size={18} />
          </button>
          <button
            className={styles.ctaButton}
            onClick={() => { goToSlide(13); }}
          >
            Leasing
          </button>

        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.menuOverlay}
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 280 }}
          >
            <div className={styles.menuContent}>
              {/* Header */}
              <div className={styles.menuHeader}>
                <span className={styles.headerLabel}>Navigation</span>
              </div>

              {/* Nav items */}
              <ul className={styles.navList}>
                {navItems.map((item, i) => {
                  const Icon = item.icon;
                  const isParentActive = activeTopLevel?.name === item.name;
                  const isDirectlyActive = item.slideIndex === currentSlide;

                  return (
                    <motion.li
                      key={item.name}
                      initial={{ x: -24, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.055, type: "spring", damping: 22, stiffness: 260 }}
                    >
                      {/* Top-level item */}
                      <button
                        onClick={() => {
                          goToSlide(item.slideIndex);
                          setIsOpen(false);
                        }}
                        className={`${styles.navLink} ${isDirectlyActive ? styles.active : ""} ${isParentActive && !isDirectlyActive ? styles.parentActive : ""}`}
                      >
                        <span className={styles.navLinkInner}>
                          <span className={styles.navIndex}>{String(i + 1).padStart(2, "0")}</span>
                          <Icon size={13} className={styles.navIcon} />
                          <span className={styles.navName}>{item.name}</span>
                        </span>
                      </button>

                      {/* Sub-items (children) */}
                      {item.children && (
                        <ul className={styles.subList}>
                          {item.children.map((child) => (
                            <li key={child.name}>
                              <button
                                onClick={() => {
                                  goToSlide(child.slideIndex);
                                  setIsOpen(false);
                                }}
                                className={`${styles.subLink} ${child.slideIndex === currentSlide ? styles.subActive : ""}`}
                              >
                                <span className={styles.subDot} />
                                {child.name}
                              </button>
                            </li>
                          ))}
                        </ul>
                      )}
                    </motion.li>
                  );
                })}
              </ul>

              {/* Footer */}
              <div className={styles.menuFooter}>
                <div className={styles.footerInfo}>
                  <p>Experience Center</p>
                  <p className={styles.footerDim}>Bloomington, MN</p>
                </div>

                <div className={styles.progressBar}>
                  <div
                    className={styles.progressFill}
                    style={{ width: `${progressPct}%` }}
                  />
                </div>
                <div className={styles.progressLabel}>
                  <span>Progress</span>
                  <span>{progressPct}%</span>
                </div>
              </div>
            </div>

            {/* Click-outside to close */}
            <div className={styles.clickOutside} onClick={() => setIsOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

