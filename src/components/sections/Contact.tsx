"use client";

import { useEffect, useState } from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Africa/Nairobi",
          hour12: false,
        }) + " GMT+3",
      );
    };
    update();
    const t = setInterval(update, 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.upper}>
        <div className={styles.heading}>
          <div className={styles.avatar} />
          <h2 className={styles.title}>
            Let&apos;s work
            <br />
            together
          </h2>
        </div>

        <div className={styles.cta}>
          <span className={styles.arrowIcon}>↙</span>
          <a href="mailto:hello@yourname.com" className={styles.circleBtn}>
            Get in touch
          </a>
        </div>
      </div>

      <hr className={styles.divider} />

      <div className={styles.contactInfo}>
        <a href="mailto:hello@yourname.com" className={styles.contactPill}>
          hello@yourname.com
        </a>
        <a href="tel:+254700000000" className={styles.contactPill}>
          +254 700 000 000
        </a>
      </div>

      <div className={styles.footer}>
        <div className={styles.footerLeft}>
          <div className={styles.footerMeta}>
            <span className={styles.footerLabel}>VERSION</span>
            <span className={styles.footerValue}>2025 © Edition</span>
          </div>
          <div className={styles.footerMeta}>
            <span className={styles.footerLabel}>LOCAL TIME</span>
            <span className={styles.footerValue}>{time}</span>
          </div>
        </div>
        <div className={styles.footerSocials}>
          <span className={styles.footerLabel}>SOCIALS</span>
          <div className={styles.socialRow}>
            {["Awwwards", "Instagram", "Twitter", "LinkedIn"].map((s) => (
              <a key={s} href="#" className={styles.socialLink}>
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
