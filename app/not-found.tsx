import { Compass } from "lucide-react";
import Link from "next/link";

/**
 * 404 globale, servie par GitHub Pages pour toute URL inconnue (404.html).
 * La locale du visiteur étant inconnue ici, la page est bilingue.
 */
export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-6 px-6 py-24 text-center">
      <Compass className="h-10 w-10 text-orange-500" aria-hidden="true" />
      <h1 className="text-6xl font-semibold tracking-tight text-black dark:text-white">
        404
      </h1>
      <div className="max-w-md text-zinc-600 dark:text-zinc-400">
        <p>Cette page n’existe pas ou a été déplacée.</p>
        <p className="mt-1 text-sm">This page does not exist or has moved.</p>
      </div>
      <div className="mt-2 flex flex-wrap justify-center gap-4">
        <Link
          href="/fr"
          className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
        >
          Accueil (FR)
        </Link>
        <Link
          href="/en"
          className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium transition-colors hover:border-orange-500 hover:text-orange-500 dark:border-zinc-700"
        >
          Home (EN)
        </Link>
      </div>
    </main>
  );
}
