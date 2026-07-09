"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

interface ThemeToggleProps {
  /** Libellé accessible du bouton (localisé). */
  label: string;
}

/**
 * Bascule clair/sombre : ajoute/retire `.dark` sur <html> et persiste le
 * choix dans localStorage (lu par le script inline du layout au chargement).
 * L'icône n'est rendue qu'après montage pour éviter tout écart d'hydratation.
 */
export function ThemeToggle({ label }: ThemeToggleProps) {
  const [isDark, setIsDark] = useState<boolean | null>(null);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    setIsDark(next);
  };

  return (
    <button
      type="button"
      aria-label={label}
      onClick={toggle}
      className="inline-flex h-9 w-9 items-center justify-center rounded-md text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-black dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white"
    >
      {isDark === null ? (
        <span className="h-4 w-4" aria-hidden="true" />
      ) : isDark ? (
        <Sun className="h-4 w-4" aria-hidden="true" />
      ) : (
        <Moon className="h-4 w-4" aria-hidden="true" />
      )}
    </button>
  );
}
