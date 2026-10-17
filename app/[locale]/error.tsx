"use client";

import React, { useEffect } from "react";
import { useTranslations } from "next-intl";
import Button from "@/components/ui/Button";
import { AlertTriangle, RotateCcw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations("Error");

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#060714] flex flex-col items-center justify-center p-6 text-center">
      <div className="glass-card max-w-md w-full p-8 rounded-2xl flex flex-col items-center border border-purple-500/20">
        <div className="w-14 h-14 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 mb-6">
          <AlertTriangle className="w-7 h-7" />
        </div>
        <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-2">
          {t("title")}
        </h2>
        <p className="text-sm text-slate-400 mb-6 leading-relaxed">
          {t("description")}
        </p>
        <Button
          onClick={() => reset()}
          variant="primary"
          size="md"
          icon={<RotateCcw className="w-4 h-4" />}
        >
          {t("retry")}
        </Button>
      </div>
    </div>
  );
}
