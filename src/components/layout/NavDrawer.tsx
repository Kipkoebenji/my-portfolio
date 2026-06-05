"use client";

import { useState, useEffect } from "react";
import styles from "./NavDrawer.module.css";

const navItems = ["Home", "Work", "About", "Contact"];
const socials = ["Awwwards", "Instagram", "Twitter", "LinkedIn"];

export default function NavDrawer() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Top-left logo — only when not scrolled */}
      <div className={`${styles.logo} ${scrolled ? styles.logoHidden : ""}`}>
        © Code by You
      </div>

      {/* Top-right nav links — visible on desktop, hidden on mobile */}
      <nav
        className={`${styles.topNav} ${scrolled ? styles.topNavHidden : ""}`}
      >
        {["Work", "About", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className={styles.topNavLink}
          >
            {item}
          </a>
        ))}
      </nav>

      {/* Floating menu button */}
      <button
        className={`${styles.menuBtn} ${open ? styles.menuBtnOpen : ""}`}
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <line
              x1="2"
              y1="2"
              x2="14"
              y2="14"
              stroke="white"
              strokeWidth="1.5"
            />
            <line
              x1="14"
              y1="2"
              x2="2"
              y2="14"
              stroke="white"
              strokeWidth="1.5"
            />
          </svg>
        ) : (
          <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
            <line
              x1="0"
              y1="1"
              x2="18"
              y2="1"
              stroke="white"
              strokeWidth="1.5"
            />
            <line
              x1="0"
              y1="11"
              x2="18"
              y2="11"
              stroke="white"
              strokeWidth="1.5"
            />
          </svg>
        )}
      </button>

      {/* Drawer overlay */}
      <div
        className={`${styles.overlay} ${open ? styles.overlayVisible : ""}`}
        onClick={() => setOpen(false)}
      />

      {/* Drawer panel */}
      <div className={`${styles.drawer} ${open ? styles.drawerOpen : ""}`}>
        <div className={styles.drawerInner}>
          <p className={styles.drawerLabel}>NAVIGATION</p>
          <hr className={styles.drawerDivider} />
          <nav className={styles.drawerNav}>
            {navItems.map((item, i) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={styles.drawerNavItem}
                onClick={() => setOpen(false)}
                style={{ transitionDelay: open ? `${i * 60}ms` : "0ms" }}
              >
                {i === 0 && <span className={styles.bullet}>•</span>}
                {item}
              </a>
            ))}
          </nav>
          <div className={styles.drawerSocials}>
            <p className={styles.drawerLabel}>SOCIALS</p>
            <div className={styles.socialLinks}>
              {socials.map((s) => (
                <a key={s} href="#" className={styles.socialLink}>
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
