import type { LucideIcon } from "lucide-react";

interface PageHeaderProps {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  description: string;
}

/** En-tête commun des pages : eyebrow icônisé, titre et chapeau. */
export function PageHeader({
  icon: Icon,
  eyebrow,
  title,
  description,
}: PageHeaderProps) {
  return (
    <div className="fade-up">
      <span className="flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-orange-500">
        <Icon className="h-4 w-4" aria-hidden="true" />
        {eyebrow}
      </span>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-black dark:text-white sm:text-5xl">
        {title}
      </h1>
      <p className="mt-4 max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
        {description}
      </p>
    </div>
  );
}
