"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import PortfolioCard from "@/components/sections/_cards/PortfolioCard";
import GlowOrb from "@/components/ui/GlowOrb";
import { PORTFOLIO_PROJECTS } from "@/data/site-data";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export default function PortfolioSection() {
  const t = useTranslations("Portfolio");

  const translatedProjects = PORTFOLIO_PROJECTS.map((project) => ({
    id: project.id,
    image: project.image,
    ctaLink: project.ctaLink,
    title: t(`projects.${project.id}.title` as any),
    category: t(`projects.${project.id}.category` as any),
    description: t(`projects.${project.id}.description` as any),
    badge: t(`projects.${project.id}.badge` as any),
    ctaText: t(`projects.${project.id}.ctaText` as any),
  }));

  return (
    <section id="portfolio" className="py-[80px] relative overflow-hidden bg-[#060714]">
      {/* Decorative ambient orbs */}
      <GlowOrb color="blue" size="xl" className="top-1/2 -start-48 opacity-15" />
      <GlowOrb color="purple" size="lg" className="bottom-10 -end-24 opacity-20" />

      <div className="w-full max-w-[1760px] mx-auto px-4 sm:px-8 lg:px-[80px] relative z-10">
        <div className="w-full max-w-[1280px] xl:max-w-[1440px] 2xl:max-w-[1600px] mx-auto flex flex-col gap-8 md:gap-10 xl:gap-12">
          {/* Header Block */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col items-start text-start"
          >
            <h2 className="text-3xl sm:text-4xl md:text-[42px] xl:text-[48px] 2xl:text-[52px] font-main text-white tracking-wide uppercase leading-tight">
              {t("title")}
            </h2>
            <p className="mt-2.5 xl:mt-3 text-sm sm:text-base xl:text-lg font-secondary text-slate-300 leading-relaxed max-w-3xl xl:max-w-4xl">
              {t("subtitle")}
            </p>
          </motion.div>

          {/* 3-Column Portfolio Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8"
          >
            {translatedProjects.map((project) => (
              <PortfolioCard key={project.id} project={project} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
