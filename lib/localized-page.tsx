import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PagePlaceholder } from "@/components/page-placeholder";
import { isLocale } from "@/i18n/config";
import { getDictionary, type Dictionary } from "@/app/[lang]/dictionaries";

type PageKey = keyof Dictionary["pages"];

interface RouteParams {
  params: Promise<{ lang: string }>;
}

/**
 * Fabrique une page « placeholder » localisée pour une clé de dictionnaire.
 * Retourne le composant par défaut et le `generateMetadata` associés,
 * évitant de dupliquer la logique lang/dictionnaire sur chaque route.
 */
export function createLocalizedPage(key: PageKey) {
  async function generateMetadata({
    params,
  }: RouteParams): Promise<Metadata> {
    const { lang } = await params;
    if (!isLocale(lang)) return {};

    const { pages } = await getDictionary(lang);
    return { title: pages[key].title, description: pages[key].metaDescription };
  }

  async function Page({ params }: RouteParams) {
    const { lang } = await params;
    if (!isLocale(lang)) notFound();

    const { pages } = await getDictionary(lang);
    const page = pages[key];
    return (
      <PagePlaceholder
        eyebrow={page.eyebrow}
        title={page.title}
        description={page.description}
      />
    );
  }

  return { generateMetadata, Page };
}
