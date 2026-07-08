import { Building2, CalendarDays, MapPin } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Experience } from "@/lib/experiences";
import { formatPeriod } from "@/lib/format-date";
import { skillsById, type SkillLevel } from "@/lib/skills";
import { SkillBadge } from "./skill-badge";

interface ExperienceCardProps {
  experience: Experience;
  lang: Locale;
  /** Libellé « en cours » pour les postes sans date de fin. */
  presentLabel: string;
  /** Libellés localisés des niveaux (acquise/renforcée). */
  levelLabels: Record<SkillLevel, string>;
}

/** Carte détaillant une expérience et ses compétences. Server Component. */
export function ExperienceCard({
  experience,
  lang,
  presentLabel,
  levelLabels,
}: ExperienceCardProps) {
  const { role, organization, location, startDate, endDate, summary, skills } =
    experience;

  return (
    <article className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
      <h2 className="text-xl font-semibold tracking-tight text-black dark:text-white">
        {role[lang]}
      </h2>

      <dl className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-sm text-zinc-600 dark:text-zinc-400">
        <dd className="flex items-center gap-1.5">
          <Building2 className="h-4 w-4 text-orange-500" aria-hidden="true" />
          {organization}
        </dd>
        {location && (
          <dd className="flex items-center gap-1.5">
            <MapPin className="h-4 w-4 text-green-500" aria-hidden="true" />
            {location[lang]}
          </dd>
        )}
        <dd className="flex items-center gap-1.5">
          <CalendarDays className="h-4 w-4 text-zinc-500" aria-hidden="true" />
          {formatPeriod(startDate, endDate, lang, presentLabel)}
        </dd>
      </dl>

      <p className="mt-4 leading-relaxed text-zinc-700 dark:text-zinc-300">
        {summary[lang]}
      </p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {skills.map(({ skillId, level }) => (
          <li key={skillId}>
            <SkillBadge
              skill={skillsById[skillId]}
              level={level}
              levelLabel={levelLabels[level]}
            />
          </li>
        ))}
      </ul>
    </article>
  );
}
