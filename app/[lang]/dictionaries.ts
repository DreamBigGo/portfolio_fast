import "server-only";
import type { Locale } from "@/i18n/config";

/**
 * Chargeurs paresseux des dictionnaires : le JSON n'est importé que côté
 * serveur, il n'alourdit donc jamais le bundle client.
 * Volontairement non annoté pour laisser TypeScript inférer la forme réelle
 * du JSON (une annotation `Record<Locale, …>` masquerait ce type).
 */
const dictionaries = {
  fr: () => import("./dictionaries/fr.json").then((m) => m.default),
  en: () => import("./dictionaries/en.json").then((m) => m.default),
};

/** Forme d'un dictionnaire, dérivée du fichier de référence (français). */
export type Dictionary = Awaited<ReturnType<(typeof dictionaries)["fr"]>>;

export const getDictionary = async (locale: Locale): Promise<Dictionary> =>
  dictionaries[locale]() as Promise<Dictionary>;
