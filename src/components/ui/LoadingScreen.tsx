"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const greetings = [
    "Hello",
    "Hola",
    "Bonjour",
    "Ciao",
    "Hallo",
    "Ola",
    "Hej",
    "Hei",
    "Ahoj",
    "Merhaba",
    "Salam",
    "Namaste",
    "Konnichiwa",
    "Annyeong",
    "Ni Hao",
  ];
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [greetingIndex, setGreetingIndex] = useState(0);

  useEffect(() => {
    const greetingTimer = setInterval(() => {
      setGreetingIndex((prev) => (prev + 1) % greetings.length);
    }, 300);
    const fadeTimer = setTimeout(() => setFadeOut(true), 2500);
    const removeTimer = setTimeout(() => setVisible(false), 3200);

    return () => {
      clearInterval(greetingTimer);
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, [greetings.length]);

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0a0a0a",
        transition: "opacity 0.7s ease, clip-path 0.9s ease",
        pointerEvents: fadeOut ? "none" : "all",
        clipPath: fadeOut
          ? "ellipse(120% 70% at 50% 0%)"
          : "ellipse(160% 140% at 50% 0%)",
        WebkitClipPath: fadeOut
          ? "ellipse(120% 70% at 50% 0%)"
          : "ellipse(160% 140% at 50% 0%)",
      }}
    >
      <p style={{ color: "#fff", fontSize: "1.5rem", letterSpacing: "0.2em" }}>
        {greetings[greetingIndex]}
      </p>
    </div>
  );
}
