"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "motion/react";

export function ReadingProgress() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      // Show progress bar after scrolling past the hero section
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="h-full bg-gradient-to-r from-zacon-corporate to-zacon-accent origin-left"
        style={{ scaleX }}
      />
    </motion.div>
  );
}

// Reading time indicator that updates as you scroll
export function ReadingTimeIndicator({
  totalTime,
}: {
  totalTime: string;
}) {
  const [timeLeft, setTimeLeft] = useState(totalTime);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (progress: number) => {
      const totalMinutes = parseInt(totalTime) || 5;
      const remainingMinutes = Math.max(
        1,
        Math.ceil(totalMinutes * (1 - progress))
      );

      if (progress >= 0.95) {
        setTimeLeft("Concluído!");
      } else {
        setTimeLeft(`${remainingMinutes} min restantes`);
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress, totalTime]);

  return (
    <span className="text-sm text-zacon-graphite-muted">{timeLeft}</span>
  );
}
