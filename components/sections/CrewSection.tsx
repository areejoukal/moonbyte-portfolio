"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import CrewMemberCard from "@/components/sections/_cards/CrewMemberCard";
import { CREW_MEMBERS } from "@/data/site-data";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export default function CrewSection() {
  const t = useTranslations("Crew");

  const translatedMembers = CREW_MEMBERS.map((member) => ({
    id: member.id,
    image: member.image,
    name: t(`members.${member.id}.name` as any),
    role: t(`members.${member.id}.role` as any),
    description: t(`members.${member.id}.description` as any),
    alt: `${t(`members.${member.id}.name` as any)} - ${t(`members.${member.id}.role` as any)}`,
  }));

  return (
    <section id="crew" className="pt-0 pb-[80px] lg:pb-[110px] min-[1200px]:pb-[100px] relative overflow-hidden bg-[#080B18]">
      <div className="w-full max-w-[1760px] mt-[40px] mx-auto px-4 sm:px-8 lg:px-[80px] relative z-10">
        <div className="w-full max-w-[1280px] xl:max-w-[1440px] 2xl:max-w-[1600px] mx-auto flex flex-col gap-6 md:gap-8 xl:gap-10">
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

          {/* Crew 4-Column Grid with compact shiny shape backdrop */}
          <div className="relative">
            {/* Localized shiny shape */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-4 sm:mt-6 w-[884px] sm:w-[1564px] lg:w-[2040px] h-[510px] sm:h-[646px] lg:h-[680px] pointer-events-none z-0"
              aria-hidden="true"
            >
              <div
                className="absolute inset-0 rounded-full blur-[75px] sm:blur-[105px]"
                style={{
                  background:
                    "radial-gradient(ellipse 65% 50% at 50% 50%, rgba(45, 95, 255, 0.3) 0%, rgba(20, 50, 180, 0.14) 55%, transparent 75%)",
                }}
              />
              <div
                className="absolute inset-x-[15%] inset-y-[15%] rounded-full blur-[38px] sm:blur-[55px]"
                style={{
                  background:
                    "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(85, 150, 255, 0.22) 0%, transparent 70%)",
                }}
              />
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 xl:gap-8 items-start justify-items-center pt-10 sm:pt-14"
            >
              {translatedMembers.map((member) => (
                <CrewMemberCard key={member.id} member={member} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
