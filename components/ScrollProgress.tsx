"use client";

import { motion, useScroll, useSpring } from "motion/react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: .001 });
  return <motion.div aria-hidden className="fixed inset-x-0 top-0 z-[100] h-0.5 origin-left bg-gold" style={{ scaleX }} />;
}
