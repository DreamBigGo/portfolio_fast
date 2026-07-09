"use client";

import type { Locale } from "@/i18n/config";
import { useProjectFilter } from "@/hooks/use-project-filter";
import type { Project } from "@/lib/projects";
import type { SkillLevel } from "@/lib/skills";
import { ProjectCard } from "./project-card";

interface FilterableProjectGridProps {
  projects: Project[];
  lang: Locale;
  levelLabels: Record<SkillLevel, string>;
  /** Libellés localisés du filtre. */
  labels: {
    filterLabel: string;
    filterAll: string;
    filterEmpty: string;
  };
}

const chipBase =
  "rounded-full border px-3 py-1 text-sm transition-colors cursor-pointer";
const chipActive = "border-orange-500 bg-orange-500 font-medium text-white";
const chipIdle =
  "border-zinc-300 text-zinc-600 hover:border-orange-500 hover:text-orange-500 dark:border-zinc-700 dark:text-zinc-400";

const chipClass = (active: boolean): string =>
  `${chipBase} ${active ? chipActive : chipIdle}`;

/** Grille de projets avec filtre par compétence (chips). Client Component. */
export function FilterableProjectGrid({
  projects,
  lang,
  levelLabels,
  labels,
}: FilterableProjectGridProps) {
  const { selected, toggle, reset, options, filtered } = useProjectFilter(
    projects,
    lang,
  );

  return (
    <>
      <fieldset className="mt-10">
        <legend className="text-sm font-medium uppercase tracking-widest text-zinc-500">
          {labels.filterLabel}
        </legend>
        <div className="mt-3 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={reset}
            aria-pressed={selected === null}
            className={chipClass(selected === null)}
          >
            {labels.filterAll}
          </button>
          {options.map(({ skillId, label }) => (
            <button
              key={skillId}
              type="button"
              onClick={() => toggle(skillId)}
              aria-pressed={selected === skillId}
              className={chipClass(selected === skillId)}
            >
              {label}
            </button>
          ))}
        </div>
      </fieldset>

      {filtered.length === 0 ? (
        <p className="mt-12 text-zinc-600 dark:text-zinc-400">
          {labels.filterEmpty}
        </p>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {filtered.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              lang={lang}
              levelLabels={levelLabels}
            />
          ))}
        </div>
      )}
    </>
  );
}
