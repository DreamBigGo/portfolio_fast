import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { notFound } from "next/navigation";
import "../globals.css";
import { LanguageSwitcher } from "@/components/language-switcher";
import { isLocale, locales } from "@/i18n/config";
import { getDictionary } from "./dictionaries";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

interface LangLayoutProps {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}

/** Pré-génère une variante statique par locale supportée. */
export function generateStaticParams(): Array<{ lang: string }> {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: Pick<LangLayoutProps, "params">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};

  const dict = await getDictionary(lang);
  return {
    title: {
      default: dict.home.metaTitle,
      template: `%s — Portfolio`,
    },
    description: dict.home.metaDescription,
  };
}

export default async function LangLayout({
  children,
  params,
}: LangLayoutProps) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const dict = await getDictionary(lang);

  return (
    <html
      lang={lang}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white text-black dark:bg-black dark:text-white">
        <header className="flex items-center justify-between px-6 py-5">
          <Link href={`/${lang}`} className="text-sm font-semibold tracking-tight">
            {dict.nav.home}
          </Link>
          <LanguageSwitcher current={lang} />
        </header>
        {children}
      </body>
    </html>
  );
}
