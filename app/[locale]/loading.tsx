import React from "react";
import { useTranslations } from "next-intl";

export default function Loading() {
  const t = useTranslations("Loading");
  return (
    <div className="min-h-screen bg-[#060714] flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background glowing pulse */}
      <div className="w-64 h-64 rounded-full bg-purple-600/20 blur-3xl animate-pulse" />
      <div className="relative z-10 flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-full border-2 border-purple-500/20 border-t-purple-400 animate-spin" />
        <span className="text-xs font-mono tracking-widest text-purple-300 uppercase">
          {t("text")}
        </span>
      </div>
    </div>
  );
}
