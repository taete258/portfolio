"use client";

import { motion } from "framer-motion";

interface SectionDividerProps {
  nextSectionBg?: string;
}

export default function SectionDivider({
  nextSectionBg = "bg-background",
}: SectionDividerProps) {
  // Map Tailwind classes to manually calculated blended colors
  const getBackgroundColor = (bgClass: string) => {
    switch (bgClass) {
      case "bg-accent/20":
        // Manually calculated: accent (160 70% 45%) at 20% opacity over background (180 10% 10%)
        // Result: A darker teal-green
        return "#1f2d2a";
      case "bg-primary/40":
        // Manually calculated: primary (181 80% 45%) at 40% opacity over background (180 10% 10%)
        // Result: A darker cyan-teal
        return "#1a3d3a";
      case "bg-background":
      default:
        // Pure background color
        return "hsl(180 10% 10%)";
    }
  };

  const fillColor = getBackgroundColor(nextSectionBg);

  return (
    <div className="absolute bottom-0 left-0 w-full h-20 overflow-hidden z-10">
      <svg
        className="w-full h-full"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        {/* First wave layer */}
        <motion.path
          d="M0,60 C150,100 350,0 600,60 C750,100 950,0 1200,60 L1200,120 L0,120 Z"
          fill={fillColor}
          animate={{
            d: [
              "M0,60 C150,100 350,0 600,60 C750,100 950,0 1200,60 L1200,120 L0,120 Z",
              "M0,40 C150,80 350,20 600,40 C750,80 950,20 1200,40 L1200,120 L0,120 Z",
              "M0,60 C150,100 350,0 600,60 C750,100 950,0 1200,60 L1200,120 L0,120 Z",
            ],
          }}
          transition={{
            duration: 6,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />

        {/* Second wave layer for depth */}
        <motion.path
          d="M0,80 C200,120 400,40 600,80 C800,120 1000,40 1200,80 L1200,120 L0,120 Z"
          fill={fillColor}
          fillOpacity="0.9"
          animate={{
            d: [
              "M0,80 C200,120 400,40 600,80 C800,120 1000,40 1200,80 L1200,120 L0,120 Z",
              "M0,70 C200,110 400,30 600,70 C800,110 1000,30 1200,70 L1200,120 L0,120 Z",
              "M0,90 C200,130 400,50 600,90 C800,130 1000,50 1200,90 L1200,120 L0,120 Z",
              "M0,80 C200,120 400,40 600,80 C800,120 1000,40 1200,80 L1200,120 L0,120 Z",
            ],
          }}
          transition={{
            duration: 8,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
      </svg>
    </div>
  );
}
