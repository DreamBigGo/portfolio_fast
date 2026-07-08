import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Project } from "@/lib/projects";
import { skillsById, type SkillLevel } from "@/lib/skills";
import { SkillBadge } from "./skill-badge";

interface ProjectCardProps {
  project: Project;
  lang: Locale;
  /** Libellés localisés des niveaux (Notions/Intermédiaire/Avancé). */
  levelLabels: Record<SkillLevel, string>;
}

/** Carte de projet cliquable menant au détail. Server Component. */
export function ProjectCard({ project, lang, levelLabels }: ProjectCardProps) {
  const { id, name, year, tagline, skills } = project;

  return (
    <Link
      href={`/${lang}/projets/${id}`}
      className="group flex flex-col gap-3 rounded-2xl border border-zinc-200 p-6 transition-colors hover:border-orange-500 dark:border-zinc-800"
    >
      <div className="flex items-start justify-between gap-3">
        <h2 className="text-xl font-semibold tracking-tight text-black dark:text-white">
          {name}
        </h2>
        <span className="flex items-center gap-1 text-sm text-zinc-500">
          {year}
          <ArrowUpRight className="h-4 w-4 text-zinc-400 transition-colors group-hover:text-orange-500" aria-hidden="true" />
        </span>
      </div>

      <p className="text-zinc-600 dark:text-zinc-400">{tagline[lang]}</p>

      <ul className="mt-1 flex flex-wrap gap-2">
        {skills.map(({ skillId, level }) => (
          <li key={skillId}>
            <SkillBadge
              skill={skillsById[skillId]}
              level={level}
              lang={lang}
              levelLabel={levelLabels[level]}
            />
          </li>
        ))}
      </ul>
    </Link>
  );
}
