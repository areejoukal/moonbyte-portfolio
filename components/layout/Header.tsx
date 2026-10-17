"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { NAV_ITEMS } from "@/data/site-data";
import Button from "@/components/ui/Button";
import LocaleSwitcher from "@/components/ui/LocaleSwitcher";
import { Menu, X } from "lucide-react";

export default function Header() {
  const t = useTranslations("Nav");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "glass-nav py-3.5 shadow-2xl shadow-purple-950/20"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-[1440px] 2xl:max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center group">
          <Image
            src="/images/MoonByte-HeaderLogo.webp"
            alt="Moonbyte"
            width={160}
            height={40}
            priority
            className="h-8 sm:h-9 md:h-10 w-auto object-contain hover:opacity-90 transition-opacity"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 bg-black/25 backdrop-blur-md px-6 py-2 rounded-full border border-purple-500/15 font-secondary">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs font-secondary font-medium tracking-wider text-slate-300 hover:text-white uppercase transition-colors relative py-1 group"
            >
              {t(item.id as any)}
              <span className="absolute bottom-0 inset-x-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-400 group-hover:w-full transition-all duration-300 rounded-full" />
            </Link>
          ))}
        </nav>

        {/* Desktop Actions: LocaleSwitcher + CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <LocaleSwitcher />
          <Button
            href="#about"
            variant="cyan"
            size="sm"
            className="font-bold text-xs px-5 py-2.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white shadow-lg shadow-blue-500/25"
          >
            {t("enterWorld")}
          </Button>
        </div>

        {/* Mobile: LocaleSwitcher + Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <LocaleSwitcher />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-purple-950/40 focus:outline-none cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-nav border-b border-purple-500/20 px-6 py-6 overflow-hidden"
          >
            <div className="flex flex-col gap-4">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-semibold tracking-wider text-slate-200 hover:text-purple-400 uppercase py-2 border-b border-purple-900/30"
                >
                  {t(item.id as any)}
                </Link>
              ))}
              <div className="pt-2">
                <Button
                  href="#contact"
                  variant="primary"
                  size="md"
                  className="w-full"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t("startProject")}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
