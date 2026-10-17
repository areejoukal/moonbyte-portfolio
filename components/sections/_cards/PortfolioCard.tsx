"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PortfolioProject } from "@/types";

interface PortfolioCardProps {
  project: PortfolioProject;
}

export default function PortfolioCard({ project }: PortfolioCardProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 35 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="group relative bg-[#0e1328] hover:bg-[#111730] border border-[#1e2746]/60 hover:border-[#4d74f9]/50 rounded-[24px] sm:rounded-[28px] overflow-hidden transition-all duration-300 shadow-xl shadow-black/30 flex flex-col justify-between"
    >
      {/* Subtle ambient light on hover */}
      <div className="absolute -top-16 -end-16 w-36 h-36 bg-blue-500/0 group-hover:bg-blue-500/10 rounded-full blur-3xl pointer-events-none transition-all duration-500" />

      {/* Top Project Thumbnail Image */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#080b18]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
      </div>

      {/* Card Content Body */}
      <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 relative z-10">
        <div>
          {/* Header Row: Title & Category Pill */}
          <div className="flex items-center justify-between gap-3 mb-3">
            <h3 className="font-secondary text-xl sm:text-2xl text-white font-medium tracking-wide uppercase group-hover:text-blue-200 transition-colors">
              {project.title}
            </h3>
            <span className="text-xs font-secondary font-medium text-slate-300 px-3.5 py-1 rounded-full bg-[#20294b] border border-blue-400/20 whitespace-nowrap">
              {project.category}
            </span>
          </div>

          {/* Project Description */}
          <p className="text-xs sm:text-[13px] xl:text-[13.5px] font-secondary text-slate-300/85 leading-relaxed mb-6">
            {project.description}
          </p>
        </div>

        {/* Bottom Row: Badge + CTA */}
        <div className="flex items-center justify-between">
          {project.badge && (
            <span className="inline-flex items-center justify-center text-[11px] sm:text-xs font-main font-bold tracking-wider text-[#0a1024] uppercase px-3.5 py-1.5 rounded-full bg-[#8fa7ff] shadow-sm">
              {project.badge}
            </span>
          )}
          {project.ctaText && project.ctaLink && (
            <a
              href={project.ctaLink}
              className="text-xs sm:text-[13px] font-secondary font-bold text-[#8fa7ff] hover:text-[#b3c4ff] tracking-wider uppercase transition-colors inline-flex items-center gap-1.5"
            >
              <span>{project.ctaText}</span>
              <span className="rtl:rotate-180 inline-block transition-transform">→</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
