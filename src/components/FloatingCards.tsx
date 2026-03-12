"use client";

import { motion } from "framer-motion";

const cards = [
  { text: "> OPEN_TO_WORK", rotation: -6, x: -300, y: 60, delay: 0 },
  { text: "> HUSTLE.exe", rotation: 4, x: 260, y: 40, delay: 0.5 },
  { text: "> GRINDING_DAILY", rotation: -10, x: -280, y: 180, delay: 1.0 },
  { text: "> DISRUPTING_SPACE", rotation: 8, x: 240, y: 160, delay: 0.3 },
  { text: "> THOUGHT_LEADER", rotation: -4, x: -220, y: 300, delay: 1.5 },
  { text: "> WEB3_NATIVE.sol", rotation: 6, x: 200, y: 280, delay: 0.8 },
  { text: "> $WORK_HARDER_SER", rotation: -12, x: 270, y: 340, delay: 1.2 },
  { text: "> 500_CONNECTIONS", rotation: 5, x: -260, y: 360, delay: 0.6 },
];

export default function FloatingCards() {
  return (
    <div
      className="hide-mobile"
      style={{
        position: "absolute",
        top: 0,
        left: "50%",
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      {cards.map((card, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: [0, 0.6, 0.4, 0.7, 0.5],
            scale: 1,
            y: [0, -12, 0],
          }}
          transition={{
            opacity: {
              duration: 3 + i * 0.7,
              repeat: Infinity,
              ease: "linear",
              delay: card.delay,
            },
            scale: { duration: 0.6, delay: card.delay },
            y: {
              duration: 5 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: card.delay,
            },
          }}
          style={{
            position: "absolute",
            left: `calc(50% + ${card.x}px)`,
            top: `${card.y}px`,
            transform: `rotate(${card.rotation}deg)`,
            background: "#ffffff",
            border: "1px solid #000000",
            borderRadius: "0",
            padding: "8px 12px",
            fontSize: "9px",
            fontFamily: "var(--font-pixel)",
            fontWeight: 400,
            color: "#000000",
            whiteSpace: "nowrap",
            boxShadow: "2px 2px 0px #cccccc",
          }}
        >
          {card.text}
        </motion.div>
      ))}
    </div>
  );
}
