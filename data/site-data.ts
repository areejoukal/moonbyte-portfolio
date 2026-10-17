import {
  NavItem,
  UniverseCardConfig,
  CrewMemberConfig,
  ServiceConfig,
  PortfolioProjectConfig,
} from "@/types";

export const NAV_ITEMS: NavItem[] = [
  { id: "world", href: "#about" },
  { id: "crew", href: "#crew" },
  { id: "build", href: "#services" },
  { id: "projects", href: "#portfolio" },
  { id: "contact", href: "#contact" },
];

export const UNIVERSE_CARDS: UniverseCardConfig[] = [
  {
    id: "moonbase",
    href: "#manifesto",
  },
  {
    id: "byte-district",
    href: "#portfolio",
  },
  {
    id: "crew-station",
    href: "#crew",
  },
  {
    id: "launch-pad",
    href: "#services",
    colSpan: 2,
    hasStats: true,
  },
  {
    id: "signal-center",
    href: "#contact",
  },
];

export const CREW_MEMBERS: CrewMemberConfig[] = [
  {
    id: "riwaa",
    image: "/images/moonbyte - riwaa.svg",
  },
  {
    id: "yousef",
    image: "/images/moonbyte - yousef.svg",
  },
  {
    id: "ayman",
    image: "/images/moonbyte - ayman.svg",
  },
  {
    id: "areej",
    image: "/images/moonbyte - areej.svg",
  },
];

export const SERVICES: ServiceConfig[] = [
  {
    id: "business-websites",
    number: "01",
  },
  {
    id: "portfolio-websites",
    number: "02",
  },
  {
    id: "landing-pages",
    number: "03",
  },
  {
    id: "custom-experiences",
    number: "04",
  },
];

export const PORTFOLIO_PROJECTS: PortfolioProjectConfig[] = [
  {
    id: "onos",
    image: "/images/portfolio-orol.webp",
    ctaLink: "#",
  },
  {
    id: "carads-plus",
    image: "/images/portfolio-centra.webp",
    ctaLink: "#",
  },
  {
    id: "ra-one",
    image: "/images/portfolio-bitone.webp",
    ctaLink: "#",
  },
];
