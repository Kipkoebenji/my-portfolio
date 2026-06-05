import styles from "./WorkGrid.module.css";

// Placeholder items — replace with real images
const gridItems = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  bg: [
    "#e8eaf0",
    "#1e1e1c",
    "#f0ece4",
    "#1a1c2a",
    "#eef0e8",
    "#2a2018",
    "#f4f0ec",
    "#181c20",
  ][i % 8],
}));

export default function WorkGrid() {
  return (
    <section className={styles.grid}>
      {gridItems.map((item) => (
        <div
          key={item.id}
          className={styles.gridItem}
          style={{ background: item.bg }}
        />
      ))}
    </section>
  );
}
