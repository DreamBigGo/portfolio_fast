import { FolderGit2 } from "lucide-react";
import { notFound } from "next/navigation";
import { FilterableProjectGrid } from "@/components/filterable-project-grid";
import { PageHeader } from "@/components/page-header";
import { localizedMetadata } from "@/lib/localized-metadata";
import { isLocale } from "@/i18n/config";
import { projects } from "@/lib/projects";
import { getDictionary } from "../dictionaries";

interface ProjetsProps {
  params: Promise<{ lang: string }>;
}

export const generateMetadata = localizedMetadata("projets");

export default async function ProjetsPage({ params }: ProjetsProps) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const dict = await getDictionary(lang);
  const page = dict.pages.projets;
  const sorted = [...projects].sort((a, b) => b.year - a.year);

  return (
    <main className="mx-auto w-full max-w-4xl flex-1 px-6 py-24">
      <PageHeader
        icon={FolderGit2}
        eyebrow={page.eyebrow}
        title={page.title}
        description={page.description}
      />

      <FilterableProjectGrid
        projects={sorted}
        lang={lang}
        levelLabels={dict.skills.levels}
        labels={{
          filterLabel: page.filterLabel,
          filterAll: page.filterAll,
          filterEmpty: page.filterEmpty,
        }}
      />
    </main>
  );
}
