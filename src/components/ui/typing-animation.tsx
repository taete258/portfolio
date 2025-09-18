"use client";

import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

interface TypingAnimationProps {
  text: string;
  className?: string;
}

const TypingAnimation = ({ text, className }: TypingAnimationProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.04 * i },
    }),
  };

  const letterVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.h2
      className={cn("font-bold text-4xl md:text-5xl", className)}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {text.split("").map((letter, index) => (
        <motion.span key={index} variants={letterVariants as Variants}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.h2>
  );
};

export default React.memo(TypingAnimation);
