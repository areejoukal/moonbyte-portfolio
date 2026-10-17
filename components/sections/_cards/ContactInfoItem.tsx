import React from "react";
import { ContactInfo } from "@/types";
import { Mail, Phone, MapPin, Clock, LucideIcon } from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  Mail,
  Phone,
  MapPin,
  Clock,
};

interface ContactInfoItemProps {
  info: ContactInfo;
}

export default function ContactInfoItem({ info }: ContactInfoItemProps) {
  const IconComponent = ICON_MAP[info.icon] || Mail;

  const content = (
    <div className="glass-card group rounded-xl p-4 flex items-center gap-4 border border-purple-500/15 hover:border-purple-500/40 transition-colors">
      <div className="w-10 h-10 rounded-lg bg-purple-950/60 border border-purple-500/25 flex items-center justify-center text-purple-400 group-hover:text-cyan-300 group-hover:scale-105 transition-all">
        <IconComponent className="w-5 h-5" />
      </div>
      <div>
        <span className="text-[11px] font-mono tracking-wider text-slate-400 uppercase block">
          {info.title}
        </span>
        <span className="text-sm font-semibold text-white group-hover:text-purple-200 transition-colors">
          {info.value}
        </span>
      </div>
    </div>
  );

  if (info.link) {
    return (
      <a href={info.link} className="block">
        {content}
      </a>
    );
  }

  return content;
}
