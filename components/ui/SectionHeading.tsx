import React from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  tag?: string;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  align = "left",
  tag,
  className = "",
}: SectionHeadingProps) {
  const alignmentClass = {
    left: "text-start items-start",
    center: "text-center items-center mx-auto",
    right: "text-end items-end",
  }[align];

  return (
    <div className={`flex flex-col mb-12 md:mb-16 ${alignmentClass} ${className}`}>
      {tag && (
        <span className="inline-block text-xs font-secondary font-bold tracking-widest text-purple-400 uppercase px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/20 mb-3">
          {tag}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-main tracking-normal text-white uppercase text-glow-sm">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-sm sm:text-base font-secondary text-slate-300 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
