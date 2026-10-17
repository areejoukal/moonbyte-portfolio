"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Footer() {
  const t = useTranslations("Footer");
  const tUniverse = useTranslations("Universe.cards");

  return (
    <footer className="w-full bg-[#8fa7ff] text-[#0a0f20] pt-14 sm:pt-18 lg:pt-20 pb-8 sm:pb-10 relative overflow-hidden select-none">
      <div className="w-full max-w-[1760px] mx-auto px-4 sm:px-8 lg:px-[80px] relative z-10">
        <div className="w-full max-w-[1280px] xl:max-w-[1440px] 2xl:max-w-[1600px] mx-auto">
          {/* Main 4-Column Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-8 lg:gap-12 pb-12 sm:pb-16 items-start">
            
            {/* Column 1: Brand & Bio (Spans 5 cols on lg) */}
            <div className="sm:col-span-2 lg:col-span-5 flex flex-col items-start text-start">
              {/* Brand Logo with Moon Glyphs */}
              <Link
                href="#"
                className="inline-flex items-center font-secondary font-bold text-[28px] leading-none tracking-normal text-[#080B18] hover:opacity-90 transition-opacity"
              >
                <span className="font-secondary font-bold">M</span>
                <Image
                  src="/images/MoonGlyph.svg"
                  alt="O"
                  width={21}
                  height={21}
                  className="w-[21px] h-[21px] mx-[1.5px] -translate-y-[1px] shrink-0"
                />
                <Image
                  src="/images/MoonGlyph.svg"
                  alt="O"
                  width={21}
                  height={21}
                  className="w-[21px] h-[21px] mx-[1.5px] -translate-y-[1px] shrink-0"
                />
                <span className="font-secondary font-bold">NBYTE</span>
              </Link>

              {/* Tagline */}
              <h3 className="font-secondary font-semibold text-base sm:text-[17px] text-[#000000] mt-4 mb-2 tracking-tight">
                {t("tagline")}
              </h3>

              {/* Description */}
              <p className="font-secondary text-sm sm:text-sm text-[#080B18] leading-relaxed max-w-[280px] sm:max-w-[320px]">
                {t("description")}
              </p>
            </div>

            {/* Column 2: EXPLORE */}
            <div className="lg:col-span-2 flex flex-col text-start">
              <h4 className="font-secondary text-xs sm:text-[13px] font-medium text-[#3C3D77] uppercase tracking-widest mb-4 sm:mb-5">
                {t("exploreTitle")}
              </h4>
              <ul className="space-y-2.5 sm:space-y-3 font-secondary text-xs sm:text-sm font-semibold tracking-wider">
                <li>
                  <Link
                    href="#about"
                    className="text-[#080B18] font-normal hover:text-black hover:translate-x-1 rtl:hover:-translate-x-1 transition-all inline-block uppercase"
                  >
                    {t("navWorld")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#crew"
                    className="text-[#080B18] font-normal hover:text-black hover:translate-x-1 rtl:hover:-translate-x-1 transition-all inline-block uppercase"
                  >
                    {t("navCrew")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="text-[#080B18] font-normal hover:text-black hover:translate-x-1 rtl:hover:-translate-x-1 transition-all inline-block uppercase"
                  >
                    {t("navWhatWeBuild")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#portfolio"
                    className="text-[#080B18] font-normal hover:text-black hover:translate-x-1 rtl:hover:-translate-x-1 transition-all inline-block uppercase"
                  >
                    {t("navProjects")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="text-[#080B18] font-normal hover:text-black hover:translate-x-1 rtl:hover:-translate-x-1 transition-all inline-block uppercase"
                  >
                    {t("navContact")}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: THE UNIVERSE */}
            <div className="lg:col-span-3 flex flex-col text-start">
              <h4 className="font-secondary text-xs sm:text-[13px] font-medium text-[#3C3D77] uppercase tracking-widest mb-4 sm:mb-5">
                {t("universeTitle")}
              </h4>
              <ul className="space-y-2.5 sm:space-y-3 font-secondary text-xs sm:text-sm">
                <li>
                  <Link
                    href="#about"
                    className="flex items-center group hover:translate-x-1 rtl:hover:-translate-x-1 transition-all"
                  >
                    <span className="text-[#BDC2FF] font-sm me-2.5 text-xs sm:text-sm transition-colors group-hover:text-[#0a0f20]">
                      01
                    </span>
                    <span className="tracking-wider text-[#080B18] font-normal group-hover:text-black transition-colors uppercase">
                      {tUniverse("moonbase.title")}
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#about"
                    className="flex items-center group hover:translate-x-1 rtl:hover:-translate-x-1 transition-all"
                  >
                    <span className="text-[#BDC2FF] font-normal me-2.5 text-xs sm:text-sm transition-colors group-hover:text-[#0a0f20]">
                      02
                    </span>
                    <span className="tracking-wider text-[#080B18] font-normal group-hover:text-black transition-colors uppercase">
                      {tUniverse("byte-district.title")}
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#crew"
                    className="flex items-center group hover:translate-x-1 rtl:hover:-translate-x-1 transition-all"
                  >
                    <span className="text-[#BDC2FF] font-sm me-2.5 text-xs sm:text-sm transition-colors group-hover:text-[#0a0f20]">
                      03
                    </span>
                    <span className="tracking-wider text-[#080B18] font-normal group-hover:text-black transition-colors uppercase">
                      {tUniverse("crew-station.title")}
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="flex items-center group hover:translate-x-1 rtl:hover:-translate-x-1 transition-all"
                  >
                    <span className="text-[#BDC2FF] font-sm me-2.5 text-xs sm:text-sm transition-colors group-hover:text-[#0a0f20]">
                      04
                    </span>
                    <span className="tracking-wider text-[#080B18] font-normal group-hover:text-black transition-colors uppercase">
                      {tUniverse("launch-pad.title")}
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="flex items-center group hover:translate-x-1 rtl:hover:-translate-x-1 transition-all"
                  >
                    <span className="text-[#BDC2FF] font-sm me-2.5 text-xs sm:text-sm transition-colors group-hover:text-[#0a0f20]">
                      05
                    </span>
                    <span className="tracking-wider text-[#080B18] font-normal group-hover:text-black transition-colors uppercase">
                      {tUniverse("signal-center.title")}
                    </span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: FOLLOW THE SIGNAL */}
            <div className="lg:col-span-2 flex flex-col text-start">
              <h4 className="font-secondary text-xs sm:text-[13px] font-medium text-[#3C3D77] uppercase tracking-widest mb-4 sm:mb-5">
                {t("followTitle")}
              </h4>
              <ul className="space-y-2.5 sm:space-y-3 font-secondary text-xs sm:text-sm font-semibold">
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#080B18] font-normal hover:text-black hover:translate-x-1 rtl:hover:-translate-x-1 transition-all inline-block tracking-wide"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#080B18] font-normal hover:text-black hover:translate-x-1 rtl:hover:-translate-x-1 transition-all inline-block tracking-wide"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#080B18] font-normal hover:text-black hover:translate-x-1 rtl:hover:-translate-x-1 transition-all inline-block tracking-wide"
                  >
                    X
                  </a>
                </li>
                <li>
                  <a
                    href="https://behance.net"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#080B18] font-normal hover:text-black hover:translate-x-1 rtl:hover:-translate-x-1 transition-all inline-block tracking-wide"
                  >
                    Behance
                  </a>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Divider Line & Metadata Bar */}
          <div className="border-t border-[#0a0f20]/15 pt-6 sm:pt-7 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-start font-secondary text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-[#0a0f20]">
            <div>
              {t("copyright")}
            </div>

            <div className="flex items-center gap-1.5 opacity-90">
              <span>•</span>
              <span dir="ltr">{t("coordinates")}</span>
            </div>

            <div className="flex items-center gap-1.5">
              <span>{t("madeWith")}</span>
              <span className="text-sm">🌙</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
