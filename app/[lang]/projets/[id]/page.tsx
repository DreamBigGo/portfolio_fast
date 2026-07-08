import { ArrowLeft, CalendarDays } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SkillBadge } from "@/components/skill-badge";
import { isLocale, locales } from "@/i18n/config";
import { projectIds, projects } from "@/lib/projects";
import { skillsById } from "@/lib/skills";
import { getDictionary } from "../../dictionaries";

interface ProjetDetailProps {
  /** Dans cette version de Next.js, `params` est asynchrone (Promise). */
  params: Promise<{ lang: string; id: string }>;
}

/**
 * Requis pour l'export statique : énumère les couples (lang, id) à pré-générer.
 * `dynamicParams = false` renvoie un 404 pour tout id hors de cette liste.
 */
export const dynamicParams = false;

export function generateStaticParams(): Array<{ lang: string; id: string }> {
  return locales.flatMap((lang) => projectIds.map((id) => ({ lang, id })));
}

export async function generateMetadata({
  params,
}: ProjetDetailProps): Promise<Metadata> {
  const { lang, id } = await params;
  if (!isLocale(lang)) return {};

  const project = projects.find((item) => item.id === id);
  if (!project) return {};

  return { title: project.name, description: project.tagline[lang] };
}

export default async function ProjetDetailPage({ params }: ProjetDetailProps) {
  const { lang, id } = await params;
  if (!isLocale(lang)) notFound();

  const project = projects.find((item) => item.id === id);
  if (!project) notFound();

  const dict = await getDictionary(lang);
  const { projectDetail } = dict;

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-6 py-24">
      <Link
        href={`/${lang}/projets`}
        className="mb-8 inline-flex items-center gap-1.5 text-sm text-zinc-500 transition-colors hover:text-orange-500"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        {dict.nav.projets}
      </Link>

      <span className="text-sm font-medium uppercase tracking-widest text-orange-500">
        {projectDetail.eyebrow}
      </span>
      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1">
        <h1 className="text-4xl font-semibold tracking-tight text-black dark:text-white sm:text-5xl">
          {project.name}
        </h1>
        <span className="flex items-center gap-1.5 text-sm text-zinc-500">
          <CalendarDays className="h-4 w-4" aria-hidden="true" />
          {project.year}
        </span>
      </div>

      <p className="mt-4 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
        {project.tagline[lang]}
      </p>
      {project.summary && (
        <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
          {project.summary[lang]}
        </p>
      )}

      <ul className="mt-8 flex flex-wrap gap-2">
        {project.skills.map(({ skillId, level }) => (
          <li key={skillId}>
            <SkillBadge
              skill={skillsById[skillId]}
              level={level}
              lang={lang}
              levelLabel={dict.skills.levels[level]}
            />
          </li>
        ))}
      </ul>
    </main>
  );
}
