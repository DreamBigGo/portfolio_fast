import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { notFound } from "next/navigation";
import "../globals.css";
import { LanguageSwitcher } from "@/components/language-switcher";
import { MainNav, type NavItem } from "@/components/main-nav";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary, type Dictionary } from "./dictionaries";

/** Construit les liens de navigation localisés dans l'ordre d'affichage. */
function buildNavItems(lang: Locale, nav: Dictionary["nav"]): NavItem[] {
  return [
    { href: `/${lang}`, label: nav.home },
    { href: `/${lang}/experiences`, label: nav.experiences },
    { href: `/${lang}/etudes`, label: nav.etudes },
    { href: `/${lang}/competences`, label: nav.competences },
    { href: `/${lang}/projets`, label: nav.projets },
    { href: `/${lang}/hobbies`, label: nav.hobbies },
    { href: `/${lang}/contact`, label: nav.contact },
  ];
}

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
  const navItems = buildNavItems(lang, dict.nav);

  return (
    <html
      lang={lang}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white text-black dark:bg-black dark:text-white">
        <header className="relative flex items-center justify-between gap-4 border-b border-zinc-200 px-6 py-4 dark:border-zinc-800">
          <Link
            href={`/${lang}`}
            className="flex items-center gap-2 text-sm font-semibold tracking-tight"
          >
            <span className="h-2 w-2 rounded-full bg-orange-500" />
            Portfolio
          </Link>
          <div className="flex items-center gap-2 md:gap-4">
            <MainNav lang={lang} items={navItems} />
            <LanguageSwitcher current={lang} />
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
