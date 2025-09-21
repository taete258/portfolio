"use client";

import { motion } from "framer-motion";
import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface Props extends HTMLAttributes<HTMLDivElement> {
  text: string;
  className?: string;
  direction?: "left" | "right" | "up" | "down";
  duration?: number;
  locale?: string;
}

const TextSlideAnimation = ({
  text,
  className,
  direction = "left",
  duration = 1.5,
  locale,
}: Props) => {
  const containerVariants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
      y: direction === "up" ? -50 : direction === "down" ? 50 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: duration,
      },
    },
  };

  // Thai-specific styling
  const isThaiText = locale === "th" || /[\u0E00-\u0E7F]/.test(text);
  const thaiStyles = isThaiText ? "font-thai leading-relaxed break-words" : "";

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={cn("text-xl font-bold", thaiStyles, className)}
      style={
        isThaiText
          ? {
              fontFamily: '"Noto Sans Thai", "Sarabun", "Kanit", sans-serif',
              lineHeight: "1.6",
              wordBreak: "break-word",
              overflowWrap: "break-word",
            }
          : undefined
      }
    >
      {text}
    </motion.div>
  );
};

export default TextSlideAnimation;
