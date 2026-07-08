import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, locales } from "@/i18n/config";
import { projectIds } from "@/lib/projects";
import { getDictionary } from "../../dictionaries";

interface ProjetDetailProps {
  /** Dans cette version de Next.js, `params` est asynchrone (Promise). */
  params: Promise<{ lang: string; id: string }>;
}

/**
 * Requis pour l'export statique : énumère les couples (lang, id) à pré-générer.
 * `dynamicParams = false` renvoie un 404 pour tout id hors de cette liste.
 */
export const dynamicParams = false;

export function generateStaticParams(): Array<{ lang: string; id: string }> {
  return locales.flatMap((lang) =>
    projectIds.map((id) => ({ lang, id })),
  );
}

export async function generateMetadata({
  params,
}: ProjetDetailProps): Promise<Metadata> {
  const { lang, id } = await params;
  if (!isLocale(lang)) return {};

  const { projectDetail } = await getDictionary(lang);
  return {
    title: `${projectDetail.metaTitlePrefix} ${id}`,
    description: `${projectDetail.metaDescriptionPrefix} ${id}.`,
  };
}

export default async function ProjetDetailPage({ params }: ProjetDetailProps) {
  const { lang, id } = await params;
  if (!isLocale(lang)) notFound();

  const { projectDetail } = await getDictionary(lang);

  return (
    <section className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center gap-4 px-6 py-24">
      <span className="text-sm font-medium uppercase tracking-widest text-orange-500">
        {projectDetail.eyebrow}
      </span>
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
        {projectDetail.titlePrefix} {id}
      </h1>
      <p className="max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
        {projectDetail.description}
      </p>
      <div className="mt-2 h-1 w-16 rounded-full bg-green-500" />
    </section>
  );
}
