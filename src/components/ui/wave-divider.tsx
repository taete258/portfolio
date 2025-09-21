"use client";

import { motion } from "framer-motion";
import React from "react";

interface WaveDividerProps {
  nextSectionColor: string;
}

const WaveDivider = ({ nextSectionColor }: WaveDividerProps) => {
  return (
    <div className="absolute bottom-0 left-0 w-full h-16 overfl ow-hidden z-10">
      <svg
        className="w-full h-full"
        viewBox="0 0 1200 100"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0,50 Q300,10 600,50 T1200,50 L1200,100 L0,100 Z"
          fill={nextSectionColor}
          animate={{
            d: [
              "M0,50 Q300,10 600,50 T1200,50 L1200,100 L0,100 Z",
              "M0,40 Q300,80 600,40 T1200,40 L1200,100 L0,100 Z",
              "M0,50 Q300,10 600,50 T1200,50 L1200,100 L0,100 Z",
            ],
          }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
      </svg>
    </div>
  );
};

export default React.memo(WaveDivider);
