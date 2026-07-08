/**
 * Configuration i18n centrale, sans dépendance serveur.
 * Importable aussi bien par le proxy que par les Server Components.
 */
export const locales = ["fr", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "fr";

/** Garde de type : restreint une chaîne quelconque à une locale supportée. */
export const isLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);
