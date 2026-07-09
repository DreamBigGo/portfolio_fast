import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LanguageSwitcher } from "@/components/language-switcher";
import { MainNav, type NavItem } from "@/components/main-nav";
import { SiteFooter } from "@/components/site-footer";
import { ThemeToggle } from "@/components/theme-toggle";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { siteUrl } from "@/lib/site";
import { getDictionary, type Dictionary } from "./dictionaries";

/** Construit les liens de navigation localisés dans l'ordre d'affichage. */
function buildNavItems(lang: Locale, nav: Dictionary["nav"]): NavItem[] {
  return [
    { id: "home", href: `/${lang}`, label: nav.home },
    { id: "experiences", href: `/${lang}/experiences`, label: nav.experiences },
    { id: "etudes", href: `/${lang}/etudes`, label: nav.etudes },
    { id: "projets", href: `/${lang}/projets`, label: nav.projets },
    { id: "hobbies", href: `/${lang}/hobbies`, label: nav.hobbies },
    { id: "contact", href: `/${lang}/contact`, label: nav.contact },
  ];
}

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
    metadataBase: new URL(siteUrl),
    title: {
      default: dict.home.metaTitle,
      template: `%s — Portfolio`,
    },
    description: dict.home.metaDescription,
    alternates: {
      languages: { fr: "/fr/", en: "/en/" },
    },
    openGraph: {
      type: "website",
      siteName: "Satyam Peshwa — Portfolio",
      locale: lang === "fr" ? "fr_FR" : "en_US",
      title: dict.home.metaTitle,
      description: dict.home.metaDescription,
      images: ["/og.png"],
    },
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
    <>
      {/* Le layout racine fixe lang="fr" ; on pose ici la locale réelle. */}
      <script
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.lang=${JSON.stringify(lang)}`,
        }}
      />
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
          <ThemeToggle label={dict.common.themeToggle} />
          <LanguageSwitcher current={lang} />
        </div>
      </header>
      {children}
      <SiteFooter />
    </>
  );
}
