"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CrewMember } from "@/types";

interface CrewMemberCardProps {
  member: CrewMember;
}

export default function CrewMemberCard({ member }: CrewMemberCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
        },
      }}
      className="group relative w-[302px] max-w-full h-auto min-h-[314px] lg:h-[314px] cursor-default lg:cursor-pointer select-none mx-auto transition-transform duration-300 lg:hover:-translate-y-1"
    >
      {/* 
        Card Box:
        - Mobile/Tablet: relative (natural document flow) with details visible by default
        - Desktop: absolute overlay at top-0 that expands on hover without extending the section
      */}
      <div
        className={`relative lg:absolute lg:top-0 lg:inset-x-0 w-full min-h-[314px] rounded-[28px] transition-all duration-500 ease-out ${isExpanded
            ? "z-30"
            : "z-10 lg:hover:z-30 lg:group-hover:z-30"
          }`}
      >
        {/* 
          Card Background Surface (Luster & Sheen)
          Stretches to 100% of the content-driven card height
        */}
        <div
          className={`absolute inset-0 rounded-[28px] border transition-all duration-500 overflow-hidden ${isExpanded
              ? "border-[#4d74f9]/80 shadow-[0_20px_50px_-8px_rgba(59,105,255,0.35)]"
              : "border-[#2c3c6e]/70 lg:group-hover:border-[#4d74f9]/80 shadow-[0_12px_36px_rgba(0,0,0,0.5)] lg:group-hover:shadow-[0_20px_50px_-8px_rgba(59,105,255,0.35)]"
            }`}
        >
          {/* Default background (balanced sweet spot) */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#1c2652]/95 via-[#141c3e]/95 to-[#0e142e]" />

          {/* Current hover background (cross-fades in only on desktop hover / expanded, untouched) */}
          <div
            className={`absolute inset-0 bg-gradient-to-b from-[#141b38]/95 via-[#0e1329]/95 to-[#080b18] transition-opacity duration-500 ${isExpanded
                ? "opacity-100"
                : "opacity-0 lg:group-hover:opacity-100"
              }`}
          />

          {/* Top edge luster / sheen highlight */}
          <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />

          {/* Inner subtle ambient luster */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/15 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* 
          Member Image:
          - Mobile/Tablet: fixed at default 200px x 220px (hover turned off)
          - Desktop: expands to 279px x 300px and translates UP (-75px) on lg:group-hover
        */}
        <div className="absolute top-2 inset-x-0 flex items-start justify-center pointer-events-none z-10">
          <div
            className={`relative transition-all duration-500 ease-out origin-bottom ${isExpanded
                ? "w-[279px] h-[300px] -translate-y-[75px]"
                : "w-[200px] h-[220px] translate-y-0 lg:group-hover:w-[279px] lg:group-hover:h-[300px] lg:group-hover:-translate-y-[75px]"
              }`}
          >
            <Image
              src={member.image}
              alt={member.alt}
              fill
              sizes="300px"
              className="object-contain object-bottom drop-shadow-[0_10px_20px_rgba(0,0,0,0.4)]"
              priority={false}
            />
          </div>
        </div>

        {/* 
          Member Text Block:
          - Mobile/Tablet: pt-[240px] with details shown by default
          - Desktop: pt-[240px] default -> pt-[243px] on hover
        */}
        <div
          className={`relative inset-x-0 px-5 pb-6 z-20 flex flex-col justify-start text-start pointer-events-none transition-all duration-500 ease-out ${isExpanded
              ? "pt-[243px]"
              : "pt-[240px] lg:group-hover:pt-[243px]"
            }`}
        >
          <h3 className="font-secondary text-[24px] font-[500] text-[#FFFFFF] tracking-wide uppercase leading-tight">
            {member.name}
          </h3>
          <div className="font-secondary text-[12px] font-[400] text-[#C4C7C9] tracking-wider uppercase mt-1">
            {member.role}
          </div>

          {/* Description / Details:
              - Mobile/Tablet: visible by default (grid-rows-[1fr] opacity-100)
              - Desktop: hidden by default (lg:grid-rows-[0fr] lg:opacity-0), unfolds on lg:group-hover
          */}
          {member.description && (
            <div
              className={`grid transition-all duration-500 ease-out ${isExpanded
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[1fr] opacity-100 lg:grid-rows-[0fr] lg:opacity-0 lg:group-hover:grid-rows-[1fr] lg:group-hover:opacity-100"
                }`}
            >
              <div className="overflow-hidden">
                <p className="pt-2 font-secondary text-[12px] font-[400] text-[#8E9193] leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
