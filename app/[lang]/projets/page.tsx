import { FolderGit2 } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectCard } from "@/components/project-card";
import { isLocale } from "@/i18n/config";
import { projects } from "@/lib/projects";
import { getDictionary } from "../dictionaries";

interface ProjetsProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({
  params,
}: ProjetsProps): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};

  const { pages } = await getDictionary(lang);
  return {
    title: pages.projets.title,
    description: pages.projets.metaDescription,
  };
}

export default async function ProjetsPage({ params }: ProjetsProps) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const dict = await getDictionary(lang);
  const page = dict.pages.projets;
  const sorted = [...projects].sort((a, b) => b.year - a.year);

  return (
    <main className="mx-auto w-full max-w-4xl flex-1 px-6 py-24">
      <span className="flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-orange-500">
        <FolderGit2 className="h-4 w-4" aria-hidden="true" />
        {page.eyebrow}
      </span>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-black dark:text-white sm:text-5xl">
        {page.title}
      </h1>
      <p className="mt-4 max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
        {page.description}
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {sorted.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            lang={lang}
            levelLabels={dict.skills.levels}
          />
        ))}
      </div>
    </main>
  );
}
