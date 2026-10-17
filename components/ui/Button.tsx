"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { Link } from "@/i18n/navigation";

export type ButtonVariant = "primary" | "white-pill" | "outline" | "ghost" | "cyan";
export type ButtonSize = "sm" | "md" | "lg";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  className?: string;
  href?: string;
  icon?: React.ReactNode;
}

type ButtonProps = ButtonBaseProps &
  Omit<HTMLMotionProps<"button">, keyof ButtonBaseProps>;

export default function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  href,
  icon,
  ...props
}: ButtonProps) {
  const sizeStyles: Record<ButtonSize, string> = {
    sm: "px-4 py-2 text-xs font-semibold tracking-wider",
    md: "px-6 py-2.5 text-sm font-semibold tracking-wider",
    lg: "px-8 py-3.5 text-base font-bold tracking-wider",
  };

  const variantStyles: Record<ButtonVariant, string> = {
    primary:
      "bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white shadow-lg shadow-purple-600/30 hover:shadow-purple-500/50 hover:brightness-110 border border-purple-400/30",
    "white-pill":
      "bg-white text-slate-950 hover:bg-slate-100 shadow-xl shadow-white/10 font-bold",
    outline:
      "bg-transparent border border-purple-500/40 text-purple-200 hover:border-purple-400 hover:bg-purple-950/40 hover:text-white",
    ghost:
      "bg-transparent text-slate-300 hover:text-white hover:bg-white/5",
    cyan:
      "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40",
  };

  const combinedClasses = `inline-flex items-center justify-center gap-2 rounded-full cursor-pointer transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400/50 uppercase font-secondary tracking-wider ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className="inline-block">
        <motion.span
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className={combinedClasses}
        >
          {children}
          {icon && <span className="inline-flex">{icon}</span>}
        </motion.span>
      </Link>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      className={combinedClasses}
      {...props}
    >
      {children}
      {icon && <span className="inline-flex">{icon}</span>}
    </motion.button>
  );
}
