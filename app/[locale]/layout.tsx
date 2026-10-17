import type { Viewport } from "next";
import { Coiny, Fredoka, Cairo } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "../globals.css";

const coiny = Coiny({
  weight: "400",
  variable: "--font-coiny",
  subsets: ["latin"],
  display: "swap",
});

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  display: "swap",
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#060714",
  width: "device-width",
  initialScale: 1,
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    metadataBase: new URL("https://moonbyte.studio"),
    title: t("title"),
    description: t("description"),
    keywords: [
      "Moonbyte",
      "Digital Studio",
      "Next.js",
      "Creative Development",
      "UI/UX Design",
      "Web Engineering",
      "Spatial Web",
    ],
    authors: [{ name: "Moonbyte Studio" }],
    alternates: {
      canonical: `https://moonbyte.studio/${locale}`,
      languages: {
        en: "https://moonbyte.studio/en",
        ar: "https://moonbyte.studio/ar",
      },
    },
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      type: "website",
      locale: locale === "ar" ? "ar_AR" : "en_US",
      images: [
        {
          url: "/images/moonbyte - hero image.webp",
          width: 1200,
          height: 630,
          alt: "Moonbyte Studio",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("twitterTitle"),
      description: t("twitterDescription"),
      images: ["/images/moonbyte - hero image.webp"],
    },
    icons: {
      icon: [
        { url: "/images/moonbyte-logo.webp" },
        { url: "/images/moonbyte-logo.webp", sizes: "32x32", type: "image/webp" },
        { url: "/images/moonbyte-logo.webp", sizes: "16x16", type: "image/webp" },
      ],
      shortcut: "/images/moonbyte-logo.webp",
      apple: "/images/moonbyte-logo.webp",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${coiny.variable} ${fredoka.variable} ${cairo.variable} dark scroll-smooth`}
    >
      <body className="min-h-screen bg-[#060714] text-slate-100 font-secondary antialiased selection:bg-purple-600 selection:text-white flex flex-col overflow-x-hidden">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex-1 w-full">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
