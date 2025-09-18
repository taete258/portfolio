"use client";

import { motion } from "framer-motion";
import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface Props extends HTMLAttributes<HTMLDivElement> {
  text: string;
  className?: string;
  direction?: "left" | "right" | "up" | "down";
  duration?: number;
}

const TextSlideAnimation = ({
  text,
  className,
  direction = "left",
  duration = 1.5,
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

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={cn("text-xl font-bold", className)}
    >
      {text}
    </motion.div>
  );
};

export default TextSlideAnimation;
