"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

interface AnimatedContainerProps {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
  id?: string;
}

export default function AnimatedContainer({
  children,
  className = "",
  variants = fadeInUp,
  delay = 0,
  id,
}: AnimatedContainerProps) {
  return (
    <motion.div
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
