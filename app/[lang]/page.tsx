import { ArrowRight, FileDown, Languages, Mail } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SkillsSection } from "@/components/skills-section";
import { isLocale } from "@/i18n/config";
import { assetUrl } from "@/lib/asset-url";
import { getDictionary } from "./dictionaries";

interface HomeProps {
  params: Promise<{ lang: string }>;
}

/**
 * Accueil : hero (tagline) + section compétences globale agrégée.
 * Server Component par défaut.
 */
export default async function Home({ params }: HomeProps) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const dict = await getDictionary(lang);
  const { home } = dict;

  return (
    <main className="flex flex-1 flex-col">
      <section className="stagger mx-auto flex w-full max-w-3xl flex-col gap-6 px-6 py-24">
        <span className="text-sm font-medium uppercase tracking-widest text-orange-500">
          {home.eyebrow}
        </span>
        <h1 className="text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">
          {home.headlineStart}
          <span className="text-green-500">{home.headlineAccent}</span>
          {home.headlineEnd}
        </h1>
        <p className="max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          {home.description}
        </p>

        <div className="flex flex-wrap items-center gap-2">
          <Languages className="h-4 w-4 shrink-0 text-zinc-400" aria-hidden="true" />
          {dict.languages.map((spoken, i) => (
            <span key={spoken.name} className="flex items-center gap-2">
              <span className="text-sm text-zinc-700 dark:text-zinc-300">
                {spoken.name}
                <span className="ml-1 text-xs text-zinc-400">— {spoken.level}</span>
              </span>
              {i < dict.languages.length - 1 && (
                <span className="text-zinc-300 dark:text-zinc-600" aria-hidden="true">·</span>
              )}
            </span>
          ))}
        </div>

        <div className="mt-2 flex flex-wrap gap-4">
          <Link
            href={`/${lang}/projets`}
            className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
          >
            {home.ctaProjects}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            href={`/${lang}/contact`}
            className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium transition-colors hover:border-orange-500 hover:text-orange-500 dark:border-zinc-700"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            {home.ctaContact}
          </Link>
          <a
            href={assetUrl("/cv.pdf")}
            download
            className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium transition-colors hover:border-green-500 hover:text-green-600 dark:border-zinc-700"
          >
            <FileDown className="h-4 w-4" aria-hidden="true" />
            {home.ctaCv}
          </a>
        </div>
      </section>

      <div className="border-t border-zinc-200 dark:border-zinc-800">
        <SkillsSection labels={dict.skills} lang={lang} />
      </div>
    </main>
  );
}
