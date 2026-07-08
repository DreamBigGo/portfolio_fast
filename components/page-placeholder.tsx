import type { LucideIcon } from "lucide-react";

interface PagePlaceholderProps {
  /** Icône Lucide illustrant la page. */
  icon: LucideIcon;
  /** Sur-titre (traduisible) affiché au-dessus du titre. */
  eyebrow: string;
  /** Titre principal de la page. */
  title: string;
  /** Courte description sous le titre. */
  description: string;
}

/**
 * Gabarit d'en-tête réutilisable pour les pages en cours de construction.
 * Server Component : aucune interactivité, purement présentationnel.
 */
export function PagePlaceholder({
  icon: Icon,
  eyebrow,
  title,
  description,
}: PagePlaceholderProps) {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center gap-4 px-6 py-24">
      <span className="flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-orange-500">
        <Icon className="h-4 w-4" aria-hidden="true" />
        {eyebrow}
      </span>
      <h1 className="text-4xl font-semibold tracking-tight text-black dark:text-white sm:text-5xl">
        {title}
      </h1>
      <p className="max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
        {description}
      </p>
      <div className="mt-2 h-1 w-16 rounded-full bg-green-500" />
    </section>
  );
}
