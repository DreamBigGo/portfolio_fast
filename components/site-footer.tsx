import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons";
import { socialLinks } from "@/lib/social";

/** Pied de page : copyright et liens vers les profils publics. Server Component. */
export function SiteFooter() {
  const iconClass =
    "h-5 w-5 text-zinc-500 transition-colors hover:text-orange-500";

  return (
    <footer className="border-t border-zinc-200 px-6 py-8 dark:border-zinc-800">
      <div className="mx-auto flex w-full max-w-4xl items-center justify-between gap-4">
        <p className="text-sm text-zinc-500">
          © {new Date().getFullYear()} Satyam Peshwa
        </p>
        <div className="flex items-center gap-4">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <GithubIcon className={iconClass} aria-hidden="true" />
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className={iconClass} aria-hidden="true" />
          </a>
          <a href={`mailto:${socialLinks.email}`} aria-label="Email">
            <Mail className={iconClass} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
