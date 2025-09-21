"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { Button } from "./button";

interface ScrollToTopProps {
  threshold?: number;
  className?: string;
  position?: "bottom-right" | "bottom-left" | "bottom-center";
}

export const ScrollToTop = ({
  threshold = 300,
  className = "",
  position = "bottom-right",
}: ScrollToTopProps) => {
  const [isVisible, setIsVisible] = useState(false);

  // Show/hide button based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > threshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Add scroll event listener with throttling for better performance
    let timeoutId: NodeJS.Timeout;
    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(toggleVisibility, 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, [threshold]);

  // Smooth scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Position classes based on prop
  const getPositionClasses = () => {
    switch (position) {
      case "bottom-left":
        return "bottom-8 left-8";
      case "bottom-center":
        return "bottom-8 left-1/2 transform -translate-x-1/2";
      case "bottom-right":
      default:
        return "bottom-8 right-8";
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          className={`fixed ${getPositionClasses()} z-50 ${className}`}
        >
          <Button
            onClick={scrollToTop}
            size="icon"
            variant="outline"
            className="h-12 w-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-foreground/40 backdrop-blur-sm border-none  hover:scale-105 group"
            aria-label="Scroll to top"
          >
            <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <ChevronUp className="transition-colors" size={24} />
            </motion.div>
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
