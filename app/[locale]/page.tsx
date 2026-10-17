import { setRequestLocale } from "next-intl/server";
import HeroSection from "@/components/sections/HeroSection";
import UniverseSection from "@/components/sections/UniverseSection";
import CrewSection from "@/components/sections/CrewSection";
import WhatWeBuildSection from "@/components/sections/WhatWeBuildSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import ManifestoSection from "@/components/sections/ManifestoSection";
import ContactSection from "@/components/sections/ContactSection";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="flex flex-col w-full relative">
      <HeroSection />
      <UniverseSection />
      <CrewSection />
      <WhatWeBuildSection />
      <PortfolioSection />
      <ManifestoSection />
      <ContactSection />
    </div>
  );
}
