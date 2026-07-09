import { GraduationCap } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EducationCard } from "@/components/education-card";
import { educations } from "@/lib/education";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "../dictionaries";

interface EtudesProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: EtudesProps): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};

  const { pages } = await getDictionary(lang);
  return {
    title: pages.etudes.title,
    description: pages.etudes.metaDescription,
  };
}

export default async function EtudesPage({ params }: EtudesProps) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const dict = await getDictionary(lang);
  const page = dict.pages.etudes;

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-24">
      <span className="flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-orange-500">
        <GraduationCap className="h-4 w-4" aria-hidden="true" />
        {page.eyebrow}
      </span>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-black dark:text-white sm:text-5xl">
        {page.title}
      </h1>
      <p className="mt-4 max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
        {page.description}
      </p>

      <div className="mt-12 flex flex-col gap-6">
        {educations.map((education) => (
          <EducationCard
            key={education.id}
            education={education}
            lang={lang}
            presentLabel={dict.common.present}
          />
        ))}
      </div>
    </main>
  );
}
