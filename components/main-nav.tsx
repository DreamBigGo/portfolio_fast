"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { Locale } from "@/i18n/config";

export interface NavItem {
  href: string;
  label: string;
}

interface MainNavProps {
  /** Locale active (pour identifier la racine). */
  lang: Locale;
  /** Liens de navigation déjà localisés, fournis par le layout serveur. */
  items: NavItem[];
}

/**
 * Navigation principale : liens vers toutes les pages, avec état actif.
 * Client Component : lit le pathname et gère l'ouverture du menu mobile.
 */
export function MainNav({ lang, items }: MainNavProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const home = `/${lang}`;
  const current = pathname.replace(/\/$/, "") || home;

  const isActive = (href: string): boolean =>
    href === home
      ? current === home
      : current === href || current.startsWith(`${href}/`);

  const linkClass = (href: string): string =>
    isActive(href)
      ? "font-semibold text-orange-500"
      : "font-medium text-zinc-600 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white";

  const renderLink = ({ href, label }: NavItem) => (
    <li key={href}>
      <Link
        href={href}
        onClick={() => setOpen(false)}
        aria-current={isActive(href) ? "page" : undefined}
        className={`block px-2 py-1 text-sm ${linkClass(href)}`}
      >
        {label}
      </Link>
    </li>
  );

  return (
    <>
      <ul className="hidden items-center gap-1 md:flex">
        {items.map(renderLink)}
      </ul>

      <button
        type="button"
        aria-label="Menu"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="inline-flex h-9 w-9 items-center justify-center rounded-md text-black transition-colors hover:bg-zinc-100 md:hidden dark:text-white dark:hover:bg-zinc-900"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          aria-hidden="true"
        >
          {open ? (
            <path d="M6 6l12 12M18 6L6 18" />
          ) : (
            <path d="M4 7h16M4 12h16M4 17h16" />
          )}
        </svg>
      </button>

      {open && (
        <div className="absolute inset-x-0 top-full z-50 border-b border-zinc-200 bg-white p-4 md:hidden dark:border-zinc-800 dark:bg-black">
          <ul className="flex flex-col gap-1">{items.map(renderLink)}</ul>
        </div>
      )}
    </>
  );
}
