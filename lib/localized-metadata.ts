import type { Metadata } from "next";
import { isLocale } from "@/i18n/config";
import { getDictionary, type Dictionary } from "@/app/[lang]/dictionaries";

export type PageKey = keyof Dictionary["pages"];

interface RouteParams {
  params: Promise<{ lang: string }>;
}

/**
 * Fabrique le `generateMetadata` localisé d'une page du portfolio,
 * évitant de dupliquer la logique lang/dictionnaire sur chaque route.
 */
export function localizedMetadata(key: PageKey) {
  return async function generateMetadata({
    params,
  }: RouteParams): Promise<Metadata> {
    const { lang } = await params;
    if (!isLocale(lang)) return {};

    const { pages } = await getDictionary(lang);
    return { title: pages[key].title, description: pages[key].metaDescription };
  };
}
