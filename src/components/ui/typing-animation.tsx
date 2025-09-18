"use client";

import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import React, { useMemo } from "react";

interface TypingAnimationProps {
  text: string;
  className?: string;
  highlight?: boolean;
  highlightText?: string;
}

const TypingAnimation = ({
  text,
  className,
  highlight,
  highlightText,
}: TypingAnimationProps) => {
  const containerVariants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: (i = 1) => ({
        opacity: 1,
        transition: { staggerChildren: 0.08, delayChildren: 0.04 * i },
      }),
    }),
    []
  );

  const letterVariants = useMemo(
    () => ({
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
    }),
    []
  );
  const letters = useMemo(() => text.split(""), [text]);

  const highlightConfig = useMemo(() => {
    if (!highlight || !highlightText) {
      return null;
    }
    const startIndex = text.indexOf(highlightText);
    if (startIndex === -1) {
      return null;
    }
    return {
      start: startIndex,
      end: startIndex + highlightText.length,
    };
  }, [text, highlight, highlightText]);

  return (
    <motion.h2
      className={cn("font-bold text-4xl md:text-5xl", className)}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => {
        const isHighlighted =
          highlightConfig &&
          index >= highlightConfig.start &&
          index < highlightConfig.end;

        return (
          <motion.span
            key={index}
            variants={letterVariants as Variants}
            className={isHighlighted ? "text-primary gradient-text" : undefined}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        );
      })}
    </motion.h2>
  );
};

export default React.memo(TypingAnimation);
