"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { useEffect } from "react";
import { EASE } from "@/lib/motion";

let hasNavigated = false;

export default function Template({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();
  const animate = hasNavigated && reduce !== true;

  useEffect(() => {
    hasNavigated = true;
  }, []);

  return (
    <motion.div
      className="flex flex-1 flex-col"
      initial={animate ? { opacity: 0 } : false}
      animate={{ opacity: 1 }}
      transition={{ duration: animate ? 0.28 : 0, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
