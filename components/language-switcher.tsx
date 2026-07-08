"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";

interface LanguageSwitcherProps {
  /** Locale actuellement active. */
  current: Locale;
}

/**
 * Bascule FR/EN en conservant le chemin courant.
 * Client Component : lit le pathname pour reconstruire l'URL localisée.
 */
export function LanguageSwitcher({ current }: LanguageSwitcherProps) {
  const pathname = usePathname();

  const buildHref = (locale: Locale): string => {
    const segments = pathname.split("/");
    // segments[0] est vide, segments[1] est la locale : on la remplace.
    segments[1] = locale;
    return segments.join("/") || `/${locale}`;
  };

  return (
    <nav aria-label="Sélecteur de langue" className="flex items-center gap-1">
      {locales.map((locale) => {
        const active = locale === current;
        return (
          <Link
            key={locale}
            href={buildHref(locale)}
            aria-current={active ? "true" : undefined}
            className={
              active
                ? "rounded-md px-2 py-1 text-sm font-semibold text-orange-500"
                : "rounded-md px-2 py-1 text-sm font-medium text-zinc-500 transition-colors hover:text-black dark:hover:text-white"
            }
          >
            {locale.toUpperCase()}
          </Link>
        );
      })}
    </nav>
  );
}
