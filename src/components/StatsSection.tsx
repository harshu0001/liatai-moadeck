"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./StatsSection.module.css";

/* ── Neon stock-chart line ───────────────────────────────────── */
function NeonChart() {
  const pathRef = useRef<SVGPathElement>(null);
  const [length, setLength] = useState(0);

  const W = 1440;
  const H = 500;

  // Sharp angular stock-chart points — trending strongly upward
  const points: [number, number][] = [
    [0,          H * 0.88],
    [W * 0.08,   H * 0.82],
    [W * 0.13,   H * 0.86],
    [W * 0.20,   H * 0.72],
    [W * 0.25,   H * 0.76],
    [W * 0.33,   H * 0.60],
    [W * 0.38,   H * 0.65],
    [W * 0.46,   H * 0.48],
    [W * 0.51,   H * 0.53],
    [W * 0.58,   H * 0.38],
    [W * 0.63,   H * 0.43],
    [W * 0.70,   H * 0.28],
    [W * 0.75,   H * 0.33],
    [W * 0.82,   H * 0.18],
    [W * 0.87,   H * 0.22],
    [W * 0.93,   H * 0.10],
    [W,          H * 0.08],
  ];

  // Straight polyline path (L = lineto)
  const linePath =
    `M ${points[0][0]},${points[0][1]}` +
    points.slice(1).map(([x, y]) => ` L ${x},${y}`).join("");

  const areaPath =
    linePath + ` L ${W},${H} L 0,${H} Z`;

  // Arrow tip: angle of the last segment
  const last  = points[points.length - 1];
  const prev  = points[points.length - 2];
  const angle = Math.atan2(last[1] - prev[1], last[0] - prev[0]) * (180 / Math.PI);

  useEffect(() => {
    if (pathRef.current) setLength(pathRef.current.getTotalLength());
  }, []);

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="none"
      className={styles.chartSvg}
      aria-hidden
    >
      <defs>
        {/* Purple neon glow filter */}
        <filter id="neonGlow" x="-25%" y="-25%" width="150%" height="150%">
          <feGaussianBlur stdDeviation="3"  result="blur1" />
          <feGaussianBlur stdDeviation="8"  result="blur2" />
          <feGaussianBlur stdDeviation="18" result="blur3" />
          <feMerge>
            <feMergeNode in="blur3" />
            <feMergeNode in="blur2" />
            <feMergeNode in="blur1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Area gradient */}
        <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#a855f7" stopOpacity="0.32" />
          <stop offset="65%"  stopColor="#7c3aed" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#4c1d95" stopOpacity="0.00" />
        </linearGradient>
      </defs>

      {/* Area fill — fades in after line finishes drawing */}
      <path
        d={areaPath}
        fill="url(#areaGrad)"
        opacity={length > 0 ? 1 : 0}
        style={{ transition: "opacity 0.5s ease 2.8s" }}
      />

      {/* Invisible path — used only to measure length */}
      {length === 0 && (
        <path
          ref={pathRef}
          d={linePath}
          fill="none"
          stroke="transparent"
          strokeWidth="3"
        />
      )}

      {/* Animated line — draws left to right */}
      {length > 0 && (
        <motion.path
          d={linePath}
          fill="none"
          stroke="#c084fc"
          strokeWidth="3"
          strokeLinejoin="round"
          strokeLinecap="butt"
          filter="url(#neonGlow)"
          strokeDasharray={length}
          initial={{ strokeDashoffset: length }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 2.6, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        />
      )}

      {/* Arrowhead — appears at tip after line finishes */}
      {length > 0 && (
        <motion.g
          transform={`translate(${last[0]}, ${last[1]}) rotate(${angle})`}
          filter="url(#neonGlow)"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35, ease: "backOut", delay: 2.8 }}
          style={{ transformOrigin: `${last[0]}px ${last[1]}px` }}
        >
          {/* Arrow triangle pointing right along the line direction */}
          <polygon
            points="0,-7 18,0 0,7"
            fill="#c084fc"
            stroke="#e9d5ff"
            strokeWidth="1"
          />
        </motion.g>
      )}
    </svg>
  );
}



const stats = [
  { label: "Annual Visitors", value: "40M+", subtext: "Roughly the third-largest city in MN" },
  { label: "Total Size", value: "5.6M", subtext: "Square feet of retail & entertainment" },
  { label: "Retail Outlets", value: "520+", subtext: "Including first-to-market flagships" },
  { label: "Sales Tax", value: "0%", subtext: "No tax on clothing & shoes in MN" },
];

export default function StatsSection() {
  return (
    <section id="intro" className={styles.statsContainer}>

      {/* Neon stock-chart background */}
      <NeonChart />

      <div className={styles.imageWrapper}>
        <Image
          src="/images/scale.jpg"
          alt="Mall of America Exterior"
          fill
          className={styles.bgImage}
        />
        <div className={styles.overlay} />
      </div>

      <div className={styles.content}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className={styles.eyebrow}>The Numbers Behind the Legend</span>
          <h2 className={styles.title}>AMERICAN SCALE</h2>

        </motion.div>

        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.label}
              className={styles.statCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
              <div className={styles.statSubtext}>{stat.subtext}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
