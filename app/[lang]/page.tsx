import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "./dictionaries";

interface HomeProps {
  params: Promise<{ lang: string }>;
}

/**
 * Accueil épuré : présentation flash + tagline, localisé via dictionnaire.
 * Server Component par défaut.
 */
export default async function Home({ params }: HomeProps) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const dict = await getDictionary(lang);
  const { home } = dict;

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center gap-6 px-6 py-24">
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
      <div className="mt-4 flex flex-wrap gap-4">
        <Link
          href={`/${lang}/projets`}
          className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
        >
          {home.ctaProjects}
        </Link>
        <Link
          href={`/${lang}/contact`}
          className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium transition-colors hover:border-orange-500 hover:text-orange-500 dark:border-zinc-700"
        >
          {home.ctaContact}
        </Link>
      </div>
    </main>
  );
}
