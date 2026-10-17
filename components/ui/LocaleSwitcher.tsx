"use client";

import React, { useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { Globe } from "lucide-react";

interface LocaleSwitcherProps {
  className?: string;
  variant?: "desktop" | "mobile";
}

export default function LocaleSwitcher({
  className = "",
  variant = "desktop",
}: LocaleSwitcherProps) {
  const locale = useLocale();
  const t = useTranslations("LanguageSwitcher");
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const targetLocale = locale === "en" ? "ar" : "en";
  const targetLabel = t("switchLocale");

  const handleSwitch = () => {
    startTransition(() => {
      // In next-intl, router.replace(pathname, { locale: targetLocale }) keeps hash if present or updates route
      router.replace(pathname, { locale: targetLocale });
    });
  };

  if (variant === "mobile") {
    return (
      <button
        onClick={handleSwitch}
        disabled={isPending}
        className={`flex items-center justify-between w-full px-4 py-3 rounded-xl bg-purple-950/30 border border-purple-500/20 text-slate-200 hover:text-white font-secondary text-sm font-semibold transition-all ${
          isPending ? "opacity-60 cursor-wait" : ""
        } ${className}`}
        aria-label={`${t("label")}: ${targetLabel}`}
      >
        <span className="flex items-center gap-2.5">
          <Globe className="w-4 h-4 text-purple-400" />
          <span>{t("label")}</span>
        </span>
        <span className="text-xs font-mono font-bold tracking-wider px-2.5 py-1 rounded-md bg-purple-500/20 text-purple-300 uppercase">
          {targetLabel}
        </span>
      </button>
    );
  }

  return (
    <button
      onClick={handleSwitch}
      disabled={isPending}
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/35 hover:bg-black/55 border border-purple-500/20 hover:border-purple-400/40 text-slate-200 hover:text-white backdrop-blur-md transition-all text-xs font-secondary font-medium tracking-wide shadow-sm hover:shadow-[0_0_15px_rgba(168,85,247,0.25)] cursor-pointer group ${
        isPending ? "opacity-60 cursor-wait" : ""
      } ${className}`}
      aria-label={`${t("label")}: ${targetLabel}`}
      title={`${t("label")}: ${targetLabel}`}
    >
      <Globe className="w-3.5 h-3.5 text-cyan-400 group-hover:rotate-45 transition-transform duration-300" />
      <span className="font-semibold text-slate-300 group-hover:text-white transition-colors">
        {targetLabel}
      </span>
    </button>
  );
}
