import type { Locale } from "@/i18n/config";
import { skillName, type Skill, type SkillLevel } from "@/lib/skills";

const levelDot: Record<SkillLevel, string> = {
  acquired: "bg-green-500",
  improved: "bg-orange-500",
};

interface SkillBadgeProps {
  skill: Skill;
  level: SkillLevel;
  lang: Locale;
  /** Libellé du niveau (traduit), utilisé en info-bulle. */
  levelLabel: string;
}

/**
 * Puce de compétence réutilisable : icône + nom + pastille de niveau
 * (vert = acquise, orange = renforcée). Server Component.
 */
export function SkillBadge({ skill, level, lang, levelLabel }: SkillBadgeProps) {
  const Icon = skill.icon;
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 px-3 py-1 text-sm text-black dark:border-zinc-800 dark:text-white">
      <Icon className="h-3.5 w-3.5 text-zinc-500" aria-hidden="true" />
      {skillName(skill, lang)}
      <span
        className={`h-1.5 w-1.5 rounded-full ${levelDot[level]}`}
        title={levelLabel}
      />
    </span>
  );
}
