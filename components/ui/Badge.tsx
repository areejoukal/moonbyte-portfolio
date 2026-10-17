import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "purple" | "cyan" | "white" | "outline";
  className?: string;
}

export default function Badge({
  children,
  variant = "purple",
  className = "",
}: BadgeProps) {
  const variantStyles = {
    purple: "bg-purple-950/70 border-purple-500/30 text-purple-300",
    cyan: "bg-cyan-950/70 border-cyan-500/30 text-cyan-300",
    white: "bg-white/10 border-white/20 text-slate-200",
    outline: "bg-transparent border-slate-700 text-slate-400",
  }[variant];

  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase border backdrop-blur-sm ${variantStyles} ${className}`}
    >
      {children}
    </span>
  );
}
