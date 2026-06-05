"use client";

import { useEffect, useRef } from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  return (
    <section className={styles.hero} id="home">
      {/* Background photo */}
      <div className={styles.photoWrapper}>
        {/* Replace src with your actual photo */}
        <div className={styles.photoPlaceholder} />
      </div>

      {/* Located badge */}
      <div className={styles.locationBadge}>
        <span className={styles.locationText}>
          Located
          <br />
          in
          <br />
          Nairobi
        </span>
        <div className={styles.globeIcon}>
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="14" cy="14" r="11" stroke="white" strokeWidth="1.2" />
            <ellipse
              cx="14"
              cy="14"
              rx="5.5"
              ry="11"
              stroke="white"
              strokeWidth="1.2"
            />
            <line
              x1="3"
              y1="10"
              x2="25"
              y2="10"
              stroke="white"
              strokeWidth="1.2"
            />
            <line
              x1="3"
              y1="18"
              x2="25"
              y2="18"
              stroke="white"
              strokeWidth="1.2"
            />
          </svg>
        </div>
      </div>

      {/* Role text — top right */}
      <div className={styles.role}>
        <span className={styles.roleArrow}>↘</span>
        <p>Freelance</p>
        <p>Designer & Developer</p>
      </div>

      {/* Oversized scrolling name */}
      <div className={styles.marqueeContainer}>
        <div className={styles.marqueeTrack} ref={marqueeRef}>
          <span className={styles.marqueeName}>Nairobi — Your Name</span>
          <span className={styles.marqueeSpace}>&nbsp;&nbsp;&nbsp;</span>
          <span className={styles.marqueeNameDupe}>Nairobi — Your Name</span>
          <span className={styles.marqueeSpace}>&nbsp;&nbsp;&nbsp;</span>
        </div>
      </div>
    </section>
  );
}
