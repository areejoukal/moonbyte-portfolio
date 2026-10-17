"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { CheckCircle2 } from "lucide-react";
import { fadeInStart, fadeInEnd } from "@/lib/animations";

function EmailIcon({ className = "w-6 h-6 text-[#C2B0F8]" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="#C2B0F8"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

function PhoneWavesIcon({ className = "w-6 h-6 text-[#C2B0F8]" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="#C2B0F8"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      <path d="M14 3.5a6 6 0 0 1 6 6" />
      <path d="M14 7.5a2 2 0 0 1 2 2" />
    </svg>
  );
}

function AddressMapIcon({ className = "w-6 h-6 text-[#C2B0F8]" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="#C2B0F8"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 2a4.5 4.5 0 0 0-4.5 4.5c0 3.2 4.5 7.5 4.5 7.5s4.5-4.3 4.5-7.5A4.5 4.5 0 0 0 12 2z" />
      <circle cx="12" cy="6.5" r="1.5" />
      <path d="M3 18l5-2 8 3 5-2v3l-5 2-8-3-5 2z" />
      <path d="M8 16v3" />
      <path d="M16 19v3" />
    </svg>
  );
}

function WorkstationDeskIcon({ className = "w-7 h-7 text-[#C2B0F8]" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      stroke="#C2B0F8"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M5 21h18" />
      <path d="M10 21l1.2-5h5.6l1.2 5" />
      <rect x="12" y="16" width="4" height="3" rx="0.5" />
      <circle cx="14" cy="10" r="2.5" />
      <path d="M9.5 21c0-2.8 2-4.5 4.5-4.5s4.5 1.7 4.5 4.5" />
      <path d="M11 9.5a3.5 3.5 0 0 1 6 0" />
      <path d="M7 16a7 7 0 0 1 0-10" />
      <path d="M7 11h2" />
      <path d="M20 7v3.5M23 6v3.5M20 7l3-1" />
      <circle cx="19" cy="11" r="1" fill="#C2B0F8" />
      <circle cx="22" cy="10" r="1" fill="#C2B0F8" />
    </svg>
  );
}

export default function ContactSection() {
  const locale = useLocale();
  const isRtl = locale === "ar";
  const t = useTranslations("Contact");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send");
      }

      setSubmitted(true);
    } catch (err) {
      setError(
        "عذراً، حدث خطأ في الإرسال. يرجى المحاولة لاحقاً أو التواصل عبر البريد الإلكتروني مباشرة."
      );
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden bg-[#060714]">
      <div className="w-full max-w-[1760px] mx-auto px-4 sm:px-8 lg:px-[80px] relative z-10">
        <div className="w-full max-w-[1280px] xl:max-w-[1440px] 2xl:max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-start lg:items-stretch">
            
            {/* Left Column: Heading and 4 Contact Info Cards (5 cols) */}
            <motion.div
              variants={fadeInStart(isRtl)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="lg:col-span-5 flex flex-col text-start"
            >
              {/* Main Headline */}
              <h2 className="text-3xl sm:text-4xl md:text-[38px] xl:text-[42px] font-main font-normal text-white leading-[1.18] mb-3.5">
                {t("headlinePart1")}<br className="hidden sm:inline" /> {t("headlinePart2")}<br className="hidden sm:inline" /> {t("headlinePart3")}
              </h2>

              {/* Subtitle */}
              <p className="text-xs sm:text-[13px] font-secondary text-slate-300 leading-relaxed max-w-sm mb-7 sm:mb-8">
                {t("subtitle")}
              </p>

              {/* Outer Contact Items Card Container */}
              <div className="bg-[#080D2B] border border-[#1b2552] rounded-[24px] sm:rounded-[28px] py-[32px] px-[24px] flex flex-col gap-3 lg:gap-3.5 shadow-xl lg:flex-1">
                {/* 1. Email */}
                <a
                  href="mailto:hello@moonbyte.studio"
                  className="bg-[#0e163d]/60 hover:bg-[#131d4e]/80 border border-[#232f60] hover:border-[#3a4b8c] rounded-[20px] p-4 sm:p-4.5 flex items-center gap-4 transition-all group lg:flex-1"
                >
                  <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-[16px] border border-[#C2B0F8]/45 bg-transparent flex items-center justify-center text-[#C2B0F8] shrink-0 transition-colors group-hover:border-[#C2B0F8]">
                    <EmailIcon />
                  </div>
                  <div className="flex flex-col text-start">
                    <span className="text-[15px] sm:text-base font-secondary font-bold text-[#7b9aff] group-hover:text-[#9bb3ff] transition-colors">
                      {t("info.emailTitle")}
                    </span>
                    <span className="text-xs sm:text-[13px] font-secondary text-white mt-0.5 dir-ltr text-start">
                      hello@moonbyte.studio
                    </span>
                    <span className="text-xs font-secondary font-bold text-white mt-0.5">
                      {t("info.emailSubtitle")}
                    </span>
                  </div>
                </a>

                {/* 2. Phone */}
                <a
                  href="tel:+970597163524"
                  className="bg-[#0e163d]/60 hover:bg-[#131d4e]/80 border border-[#232f60] hover:border-[#3a4b8c] rounded-[20px] p-4 sm:p-4.5 flex items-center gap-4 transition-all group lg:flex-1"
                >
                  <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-[16px] border border-[#C2B0F8]/45 bg-transparent flex items-center justify-center text-[#C2B0F8] shrink-0 transition-colors group-hover:border-[#C2B0F8]">
                    <PhoneWavesIcon />
                  </div>
                  <div className="flex flex-col text-start">
                    <span className="text-[15px] sm:text-base font-secondary font-bold text-[#7b9aff] group-hover:text-[#9bb3ff] transition-colors">
                      {t("info.phoneTitle")}
                    </span>
                    <span className="text-xs sm:text-[13px] font-secondary text-white mt-0.5" dir="ltr">
                      +970 59 716 3524
                    </span>
                  </div>
                </a>

                {/* 3. Address */}
                <div className="bg-[#0e163d]/60 hover:bg-[#131d4e]/80 border border-[#232f60] hover:border-[#3a4b8c] rounded-[20px] p-4 sm:p-4.5 flex items-center gap-4 transition-all group lg:flex-1">
                  <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-[16px] border border-[#C2B0F8]/45 bg-transparent flex items-center justify-center text-[#C2B0F8] shrink-0 transition-colors group-hover:border-[#C2B0F8]">
                    <AddressMapIcon />
                  </div>
                  <div className="flex flex-col text-start">
                    <span className="text-[15px] sm:text-base font-secondary font-bold text-[#7b9aff] group-hover:text-[#9bb3ff] transition-colors">
                      {t("info.addressTitle")}
                    </span>
                    <span className="text-xs sm:text-[13px] font-secondary text-white mt-0.5">
                      {t("info.addressValue")}
                    </span>
                  </div>
                </div>

                {/* 4. Working Hours */}
                <div className="bg-[#0e163d]/60 hover:bg-[#131d4e]/80 border border-[#232f60] hover:border-[#3a4b8c] rounded-[20px] p-4 sm:p-4.5 flex items-center gap-4 transition-all group lg:flex-1">
                  <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-[16px] border border-[#C2B0F8]/45 bg-transparent flex items-center justify-center text-[#C2B0F8] shrink-0 transition-colors group-hover:border-[#C2B0F8]">
                    <WorkstationDeskIcon />
                  </div>
                  <div className="flex flex-col text-start">
                    <span className="text-[15px] sm:text-base font-secondary font-bold text-[#7b9aff] group-hover:text-[#9bb3ff] transition-colors">
                      {t("info.hoursTitle")}
                    </span>
                    <span className="text-xs sm:text-[13px] font-secondary text-white mt-0.5">
                      {t("info.hoursValue")}
                    </span>
                    <span className="text-xs font-secondary font-bold text-white mt-0.5">
                      {t("info.hoursSubtitle")}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Contact Form (7 cols) */}
            <motion.div
              variants={fadeInEnd(isRtl)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="lg:col-span-7 flex flex-col text-start"
            >
              <div className="bg-[#080D2B] border border-[#1b2552] rounded-[24px] sm:rounded-[28px] p-6 sm:p-8 md:p-9 shadow-2xl lg:h-full lg:flex lg:flex-col lg:justify-between">
                {submitted ? (
                  <div className="py-16 text-center flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-blue-500/20 border border-blue-400/40 flex items-center justify-center text-blue-300 mb-4">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-main text-white mb-2">
                      {t("form.successTitle")}
                    </h3>
                    <p className="text-sm font-secondary text-slate-300 max-w-md mx-auto mb-6">
                      {t("form.successMessage")}
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="bg-[#8fa7ff] hover:bg-[#9db4ff] text-[#0a1024] font-secondary font-bold text-sm px-6 py-3 rounded-xl transition-all cursor-pointer"
                    >
                      {t("form.anotherButton")}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-4.5 lg:h-full lg:justify-between">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs sm:text-[13px] font-secondary font-medium text-slate-200 mb-2">
                        {t("form.fullName")} <span className="text-[#8fa7ff]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder={t("form.fullNamePlaceholder")}
                        className="w-full bg-[#080b19] border border-[#1a2238] focus:border-[#4d66b5] focus:outline-none focus:ring-1 focus:ring-[#4d66b5]/50 rounded-xl px-4 py-3 sm:py-3.5 text-xs sm:text-sm text-white placeholder:text-slate-500 font-secondary transition-colors text-start"
                      />
                    </div>

                    {/* Email Address */}
                    <div>
                      <label className="block text-xs sm:text-[13px] font-secondary font-medium text-slate-200 mb-2">
                        {t("form.email")} <span className="text-[#8fa7ff]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder={t("form.emailPlaceholder")}
                        className="w-full bg-[#080b19] border border-[#1a2238] focus:border-[#4d66b5] focus:outline-none focus:ring-1 focus:ring-[#4d66b5]/50 rounded-xl px-4 py-3 sm:py-3.5 text-xs sm:text-sm text-white placeholder:text-slate-500 font-secondary transition-colors text-start"
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs sm:text-[13px] font-secondary font-medium text-slate-200 mb-2">
                        {t("form.phone")} <span className="text-[#8fa7ff]">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder={t("form.phonePlaceholder")}
                        className="w-full bg-[#080b19] border border-[#1a2238] focus:border-[#4d66b5] focus:outline-none focus:ring-1 focus:ring-[#4d66b5]/50 rounded-xl px-4 py-3 sm:py-3.5 text-xs sm:text-sm text-white placeholder:text-slate-500 font-secondary transition-colors text-start"
                      />
                    </div>

                    {/* Project Type */}
                    <div>
                      <label className="block text-xs sm:text-[13px] font-secondary font-medium text-slate-200 mb-2">
                        {t("form.projectType")} <span className="text-[#8fa7ff]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.projectType}
                        onChange={(e) =>
                          setFormData({ ...formData, projectType: e.target.value })
                        }
                        placeholder={t("form.projectTypePlaceholder")}
                        className="w-full bg-[#080b19] border border-[#1a2238] focus:border-[#4d66b5] focus:outline-none focus:ring-1 focus:ring-[#4d66b5]/50 rounded-xl px-4 py-3 sm:py-3.5 text-xs sm:text-sm text-white placeholder:text-slate-500 font-secondary transition-colors text-start"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs sm:text-[13px] font-secondary font-medium text-slate-200 mb-2">
                        {t("form.message")} <span className="text-[#8fa7ff]">*</span>
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder={t("form.messagePlaceholder")}
                        className="w-full bg-[#080b19] border border-[#1a2238] focus:border-[#4d66b5] focus:outline-none focus:ring-1 focus:ring-[#4d66b5]/50 rounded-xl px-4 py-3 sm:py-3.5 text-xs sm:text-sm text-white placeholder:text-slate-500 font-secondary transition-colors resize-none leading-relaxed lg:h-[200px] text-start"
                      />
                    </div>

                    {/* Error Message */}
                    {error && (
                      <p className="text-red-400 text-xs text-center font-secondary">
                        {error}
                      </p>
                    )}

                    {/* Send The Idea Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#8fa7ff] hover:bg-[#9db4ff] text-[#0a1024] font-secondary font-bold text-sm sm:text-base py-3.5 sm:py-4 rounded-xl sm:rounded-2xl transition-all shadow-md active:scale-[0.99] mt-2 cursor-pointer tracking-wide disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "جارٍ الإرسال..." : t("form.submitButton")}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}