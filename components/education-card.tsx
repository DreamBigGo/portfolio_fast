import { CalendarDays, GraduationCap, MapPin } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Education } from "@/lib/education";
import { formatPeriod } from "@/lib/format-date";

interface EducationCardProps {
  education: Education;
  lang: Locale;
  presentLabel: string;
}

export function EducationCard({ education, lang, presentLabel }: EducationCardProps) {
  const { degree, institution, logo, location, startDate, endDate, description } =
    education;

  return (
    <article className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
      <div className="flex items-start justify-between gap-4">
        <h2 className="text-xl font-semibold tracking-tight text-black dark:text-white">
          {degree[lang]}
        </h2>
        {logo && (
          <div className="shrink-0 flex items-center justify-center rounded-xl bg-white px-3 py-2 ring-1 ring-zinc-200">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${logo}`}
              alt={`${institution} logo`}
              width={120}
              height={46}
              className="object-contain"
            />
          </div>
        )}
      </div>

      <dl className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-sm text-zinc-600 dark:text-zinc-400">
        <dd className="flex items-center gap-1.5">
          <GraduationCap className="h-4 w-4 text-orange-500" aria-hidden="true" />
          {institution}
        </dd>
        {location && (
          <dd className="flex items-center gap-1.5">
            <MapPin className="h-4 w-4 text-green-500" aria-hidden="true" />
            {location[lang]}
          </dd>
        )}
        <dd className="flex items-center gap-1.5">
          <CalendarDays className="h-4 w-4 text-zinc-500" aria-hidden="true" />
          {formatPeriod(startDate, endDate, lang, presentLabel)}
        </dd>
      </dl>

      <p className="mt-4 leading-relaxed text-zinc-700 dark:text-zinc-300">
        {description[lang]}
      </p>
    </article>
  );
}
