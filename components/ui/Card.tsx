import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
}

export default function Card({ children, className = "", glow = false }: CardProps) {
  return (
    <div
      className={`glass-card rounded-2xl p-6 transition-all duration-300 relative overflow-hidden ${
        glow ? "hover:border-purple-500/50 hover:shadow-purple-500/20" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
