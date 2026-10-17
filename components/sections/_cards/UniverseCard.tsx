"use client";

import React from "react";
import { motion } from "framer-motion";
import { UniverseCardData } from "@/types";

interface UniverseCardProps {
  data: UniverseCardData;
}

export default function UniverseCard({ data }: UniverseCardProps) {
  const isColSpan2 = data.colSpan === 2;

  return (
    <motion.a
      href={data.href}
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
        },
      }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`group block bg-[#0f1424] hover:bg-[#12192e] border border-[#1c253d] hover:border-[#4d74f9]/50 rounded-[20px] 2xl:rounded-[24px] p-6 sm:p-7 md:p-8 xl:p-9 2xl:p-10 transition-all duration-300 relative overflow-hidden shadow-md shadow-black/20 ${
        isColSpan2 ? "col-span-1 md:col-span-2 lg:col-span-2" : "col-span-1"
      }`}
    >
      {/* Subtle ambient highlight on hover */}
      <div className="absolute -top-16 -end-16 w-36 h-36 bg-blue-500/0 group-hover:bg-blue-500/10 rounded-full blur-3xl pointer-events-none transition-all duration-500" />

      {isColSpan2 && data.stats ? (
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 xl:gap-8 h-full relative z-10">
          <div className="flex-1 max-w-lg xl:max-w-xl 2xl:max-w-2xl">
            {/* Location Tag */}
            <div className="text-[12px] xl:text-[13px] font-mono font-semibold text-[#5e82ff] tracking-widest uppercase mb-2 xl:mb-3">
              {data.loc}
            </div>

            {/* Title */}
            <h3 className="font-main text-2xl sm:text-[26px] xl:text-[28px] 2xl:text-[32px] text-white tracking-wide uppercase mb-1.5 xl:mb-2 group-hover:text-blue-300 transition-colors">
              {data.title}
            </h3>

            {/* Subtitle / Role */}
            <div className="text-[11px] sm:text-xs xl:text-sm font-mono font-bold tracking-wider text-slate-400 uppercase mb-4 xl:mb-5">
              {data.subtitle}
            </div>

            {/* Description */}
            <p className="text-xs sm:text-[13.5px] xl:text-[15px] 2xl:text-base font-secondary text-slate-300 leading-relaxed">
              {data.description}
            </p>
          </div>

          {/* Metric Stats Pills */}
          <div className="flex items-center gap-3 sm:gap-4 xl:gap-5 shrink-0 mt-4 lg:mt-0">
            {data.stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-[#8ea7ff] rounded-xl sm:rounded-2xl xl:rounded-[18px] px-4 py-3 sm:px-5 sm:py-3.5 xl:px-6 xl:py-4 flex flex-col items-center justify-center min-w-[110px] sm:min-w-[124px] xl:min-w-[136px] 2xl:min-w-[148px] shadow-md shadow-blue-900/10 transition-transform duration-300 group-hover:scale-[1.02]"
              >
                <span className="text-[10px] sm:text-[11px] xl:text-xs font-mono font-bold uppercase tracking-wider text-[#1a233d]">
                  {stat.label}
                </span>
                <span className="font-main text-xl sm:text-2xl xl:text-3xl 2xl:text-[34px] font-black text-[#080d1a] tracking-tight mt-1">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col h-full justify-between relative z-10">
          <div>
            {/* Location Tag */}
            <div className="text-[12px] xl:text-[13px] font-mono font-semibold text-[#5e82ff] tracking-widest uppercase mb-2 xl:mb-3">
              {data.loc}
            </div>

            {/* Title */}
            <h3 className="font-main text-2xl sm:text-[26px] xl:text-[28px] 2xl:text-[32px] text-white tracking-wide uppercase mb-1.5 xl:mb-2 group-hover:text-blue-300 transition-colors">
              {data.title}
            </h3>

            {/* Subtitle / Role */}
            <div className="text-[11px] sm:text-xs xl:text-sm font-mono font-bold tracking-wider text-slate-400 uppercase mb-4 xl:mb-5">
              {data.subtitle}
            </div>

            {/* Description */}
            <p className="text-xs sm:text-[13.5px] xl:text-[15px] 2xl:text-base font-secondary text-slate-300 leading-relaxed">
              {data.description}
            </p>
          </div>
        </div>
      )}
    </motion.a>
  );
}
