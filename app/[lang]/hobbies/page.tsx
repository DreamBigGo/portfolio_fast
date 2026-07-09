import { Heart } from "lucide-react";
import { notFound } from "next/navigation";
import { HobbyCard } from "@/components/hobby-card";
import { PageHeader } from "@/components/page-header";
import { hobbies } from "@/lib/hobbies";
import { localizedMetadata } from "@/lib/localized-metadata";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "../dictionaries";

interface HobbiesProps {
  params: Promise<{ lang: string }>;
}

export const generateMetadata = localizedMetadata("hobbies");

export default async function HobbiesPage({ params }: HobbiesProps) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const page = (await getDictionary(lang)).pages.hobbies;

  return (
    <main className="mx-auto w-full max-w-4xl flex-1 px-6 py-24">
      <PageHeader
        icon={Heart}
        eyebrow={page.eyebrow}
        title={page.title}
        description={page.description}
      />

      <div className="stagger mt-12 grid gap-6 sm:grid-cols-2">
        {hobbies.map((hobby) => (
          <HobbyCard key={hobby.id} hobby={hobby} lang={lang} />
        ))}
      </div>
    </main>
  );
}
