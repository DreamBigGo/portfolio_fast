import { Cpu, Layout, type LucideIcon, Server, Terminal } from "lucide-react";
import { getSkillsOverview } from "@/lib/skills-overview";
import type { SkillCategory, SkillLevel } from "@/lib/skills";

interface SkillsSectionLabels {
  heading: string;
  subtitle: string;
  categories: Record<SkillCategory, string>;
  levels: Record<SkillLevel, string>;
}

const categoryIcon: Record<SkillCategory, LucideIcon> = {
  frontend: Layout,
  backend: Server,
  tools: Terminal,
};

const levelDot: Record<SkillLevel, string> = {
  acquired: "bg-green-500",
  improved: "bg-orange-500",
};

/**
 * Vue globale des compétences, dérivée par agrégation des expériences/projets.
 * Server Component : les icônes Lucide sont rendues en SVG statique au build.
 */
export function SkillsSection({ labels }: { labels: SkillsSectionLabels }) {
  const groups = getSkillsOverview();

  return (
    <section className="mx-auto w-full max-w-3xl px-6 py-16">
      <div className="flex items-center gap-2 text-orange-500">
        <Cpu className="h-5 w-5" aria-hidden="true" />
        <h2 className="text-2xl font-semibold tracking-tight text-black dark:text-white">
          {labels.heading}
        </h2>
      </div>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">{labels.subtitle}</p>

      <ul className="mt-4 flex flex-wrap gap-4 text-sm text-zinc-500">
        {(Object.keys(levelDot) as SkillLevel[]).map((level) => (
          <li key={level} className="flex items-center gap-2">
            <span className={`h-2 w-2 rounded-full ${levelDot[level]}`} />
            {labels.levels[level]}
          </li>
        ))}
      </ul>

      <div className="mt-8 grid gap-8 sm:grid-cols-3">
        {groups.map((group) => {
          const CategoryIcon = categoryIcon[group.category];
          return (
            <div key={group.category}>
              <h3 className="flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-green-600 dark:text-green-500">
                <CategoryIcon className="h-4 w-4" aria-hidden="true" />
                {labels.categories[group.category]}
              </h3>
              <ul className="mt-4 flex flex-col gap-2">
                {group.skills.map(({ skill, level }) => {
                  const SkillIcon = skill.icon;
                  return (
                    <li
                      key={skill.id}
                      className="flex items-center gap-2 rounded-lg border border-zinc-200 px-3 py-2 dark:border-zinc-800"
                    >
                      <SkillIcon
                        className="h-4 w-4 text-zinc-500"
                        aria-hidden="true"
                      />
                      <span className="text-sm text-black dark:text-white">
                        {skill.name}
                      </span>
                      <span
                        className={`ml-auto h-2 w-2 rounded-full ${levelDot[level]}`}
                        title={labels.levels[level]}
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
