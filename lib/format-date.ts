import type { Locale } from "@/i18n/config";

/** Formate un `YYYY-MM` en mois + année localisés (ex. « avr. 2026 »). */
export function formatMonthYear(iso: string, lang: Locale): string {
  const [year, month] = iso.split("-").map(Number);
  return new Intl.DateTimeFormat(lang, {
    month: "short",
    year: "numeric",
  }).format(new Date(year, month - 1));
}

/** Construit une plage « début – fin » ; `presentLabel` si le poste est en cours. */
export function formatPeriod(
  startDate: string,
  endDate: string | null,
  lang: Locale,
  presentLabel: string,
): string {
  const end = endDate ? formatMonthYear(endDate, lang) : presentLabel;
  return `${formatMonthYear(startDate, lang)} – ${end}`;
}
