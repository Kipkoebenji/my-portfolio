"use client";

import { useState, useRef } from "react";
import styles from "./Work.module.css";

const projects = [
  { title: "TWICE", category: "Interaction & Development", slug: "twice" },
  { title: "The Damai", category: "Brand & Web Design", slug: "the-damai" },
  { title: "FABRIC™", category: "Visual Identity", slug: "fabric" },
  {
    title: "Aanstekelijk",
    category: "Campaign & Motion",
    slug: "aanstekelijk",
  },
];

export default function Work() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <section
      className={styles.work}
      id="work"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
    >
      <p className={styles.sectionLabel}>RECENT WORK</p>
      <div className={styles.projectList}>
        {projects.map((project, i) => (
          <a
            key={project.slug}
            href={`/work/${project.slug}`}
            className={`${styles.projectRow} ${hoveredIndex === i ? styles.projectRowHovered : ""} ${hoveredIndex !== null && hoveredIndex !== i ? styles.projectRowDimmed : ""}`}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <h2 className={styles.projectTitle}>{project.title}</h2>
            <span className={styles.projectCategory}>{project.category}</span>
          </a>
        ))}
      </div>

      {/* More work pill */}
      <div className={styles.moreWork}>
        <a href="/work" className={styles.moreWorkBtn}>
          More work <sup>11</sup>
        </a>
      </div>

      {/* Hover preview — follows mouse */}
      {hoveredIndex !== null && (
        <div
          className={styles.previewCard}
          style={{
            left: mousePos.x + 40,
            top: mousePos.y - 100,
          }}
        >
          <div className={styles.previewInner} />
        </div>
      )}
    </section>
  );
}
