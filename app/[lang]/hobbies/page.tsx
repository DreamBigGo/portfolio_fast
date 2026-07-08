import { Heart } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HobbyCard } from "@/components/hobby-card";
import { isLocale } from "@/i18n/config";
import { hobbies } from "@/lib/hobbies";
import { getDictionary } from "../dictionaries";

interface HobbiesProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({
  params,
}: HobbiesProps): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};

  const { pages } = await getDictionary(lang);
  return {
    title: pages.hobbies.title,
    description: pages.hobbies.metaDescription,
  };
}

export default async function HobbiesPage({ params }: HobbiesProps) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const page = (await getDictionary(lang)).pages.hobbies;

  return (
    <main className="mx-auto w-full max-w-4xl flex-1 px-6 py-24">
      <span className="flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-orange-500">
        <Heart className="h-4 w-4" aria-hidden="true" />
        {page.eyebrow}
      </span>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-black dark:text-white sm:text-5xl">
        {page.title}
      </h1>
      <p className="mt-4 max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
        {page.description}
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {hobbies.map((hobby) => (
          <HobbyCard key={hobby.id} hobby={hobby} lang={lang} />
        ))}
      </div>
    </main>
  );
}
