import { GraduationCap } from "lucide-react";
import { notFound } from "next/navigation";
import { EducationCard } from "@/components/education-card";
import { PageHeader } from "@/components/page-header";
import { educations } from "@/lib/education";
import { localizedMetadata } from "@/lib/localized-metadata";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "../dictionaries";

interface EtudesProps {
  params: Promise<{ lang: string }>;
}

export const generateMetadata = localizedMetadata("etudes");

export default async function EtudesPage({ params }: EtudesProps) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const dict = await getDictionary(lang);
  const page = dict.pages.etudes;

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-24">
      <PageHeader
        icon={GraduationCap}
        eyebrow={page.eyebrow}
        title={page.title}
        description={page.description}
      />

      <div className="stagger mt-12 flex flex-col gap-6">
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
