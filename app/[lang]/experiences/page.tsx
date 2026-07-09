import { Briefcase } from "lucide-react";
import { notFound } from "next/navigation";
import { ExperienceCard } from "@/components/experience-card";
import { PageHeader } from "@/components/page-header";
import { experiences } from "@/lib/experiences";
import { localizedMetadata } from "@/lib/localized-metadata";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "../dictionaries";

interface ExperiencesProps {
  params: Promise<{ lang: string }>;
}

export const generateMetadata = localizedMetadata("experiences");

export default async function ExperiencesPage({ params }: ExperiencesProps) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const dict = await getDictionary(lang);
  const page = dict.pages.experiences;

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-24">
      <PageHeader
        icon={Briefcase}
        eyebrow={page.eyebrow}
        title={page.title}
        description={page.description}
      />

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
