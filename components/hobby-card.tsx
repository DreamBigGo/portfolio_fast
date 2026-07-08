import type { Locale } from "@/i18n/config";
import type { Hobby } from "@/lib/hobbies";

interface HobbyCardProps {
  hobby: Hobby;
  lang: Locale;
}

/** Carte présentant un centre d'intérêt et ses éventuelles précisions. */
export function HobbyCard({ hobby, lang }: HobbyCardProps) {
  const { name, tags, icon: Icon } = hobby;

  return (
    <article className="flex flex-col gap-3 rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500/10 text-orange-500">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <h2 className="text-lg font-semibold tracking-tight text-black dark:text-white">
          {name[lang]}
        </h2>
      </div>

      {tags && (
        <ul className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li
              key={tag.en}
              className="rounded-full border border-zinc-200 px-3 py-1 text-sm text-zinc-600 dark:border-zinc-800 dark:text-zinc-400"
            >
              {tag[lang]}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
