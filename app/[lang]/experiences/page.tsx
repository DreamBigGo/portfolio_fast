import { Briefcase } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ExperienceCard } from "@/components/experience-card";
import { experiences } from "@/lib/experiences";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "../dictionaries";

interface ExperiencesProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({
  params,
}: ExperiencesProps): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};

  const { pages } = await getDictionary(lang);
  return {
    title: pages.experiences.title,
    description: pages.experiences.metaDescription,
  };
}

export default async function ExperiencesPage({ params }: ExperiencesProps) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const dict = await getDictionary(lang);
  const page = dict.pages.experiences;

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-24">
      <span className="flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-orange-500">
        <Briefcase className="h-4 w-4" aria-hidden="true" />
        {page.eyebrow}
      </span>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-black dark:text-white sm:text-5xl">
        {page.title}
      </h1>
      <p className="mt-4 max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
        {page.description}
      </p>

      <div className="mt-12 flex flex-col gap-6">
        {experiences.map((experience) => (
          <ExperienceCard
            key={experience.id}
            experience={experience}
            lang={lang}
            presentLabel={dict.common.present}
            levelLabels={dict.skills.levels}
          />
        ))}
      </div>
    </main>
  );
}
