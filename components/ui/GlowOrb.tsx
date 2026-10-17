"use client";

import React from "react";
import { motion } from "framer-motion";

interface GlowOrbProps {
  color?: "purple" | "blue" | "cyan";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  delay?: number;
}

export default function GlowOrb({
  color = "purple",
  size = "md",
  className = "",
  delay = 0,
}: GlowOrbProps) {
  const colorGradients = {
    purple: "from-purple-600/25 via-indigo-600/15 to-transparent",
    blue: "from-blue-600/25 via-indigo-500/15 to-transparent",
    cyan: "from-cyan-500/20 via-blue-500/10 to-transparent",
  }[color];

  const sizeClasses = {
    sm: "w-48 h-48 blur-2xl",
    md: "w-80 h-80 blur-3xl",
    lg: "w-96 h-96 blur-[100px]",
    xl: "w-[500px] h-[500px] blur-[130px]",
  }[size];

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0.5 }}
      animate={{
        scale: [0.9, 1.15, 0.9],
        opacity: [0.4, 0.7, 0.4],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      className={`absolute rounded-full pointer-events-none bg-gradient-to-br ${colorGradients} ${sizeClasses} ${className}`}
      aria-hidden="true"
    />
  );
}
