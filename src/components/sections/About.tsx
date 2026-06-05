import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.left}>
        <p className={styles.tagline}>
          Helping brands to stand out in the digital era. Together we will set
          the new status quo. No nonsense, always on the cutting edge.
        </p>
      </div>
      <div className={styles.right}>
        <p className={styles.subtext}>
          The combination of my passion for design, code & interaction positions
          me in a unique place in the web design world.
        </p>
        <a href="#about" className={styles.circleBtn}>
          About me
        </a>
      </div>
    </section>
  );
}
