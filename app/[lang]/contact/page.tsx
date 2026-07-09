import { ArrowUpRight, Mail } from "lucide-react";
import { notFound } from "next/navigation";
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons";
import { PageHeader } from "@/components/page-header";
import { isLocale } from "@/i18n/config";
import { localizedMetadata } from "@/lib/localized-metadata";
import { socialLinks } from "@/lib/social";
import { getDictionary } from "../dictionaries";

interface ContactProps {
  params: Promise<{ lang: string }>;
}

export const generateMetadata = localizedMetadata("contact");

interface ContactChannel {
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  name: string;
  value: string;
  hint: string;
  external: boolean;
}

export default async function ContactPage({ params }: ContactProps) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const dict = await getDictionary(lang);
  const page = dict.pages.contact;

  const channels: ContactChannel[] = [
    {
      href: `mailto:${socialLinks.email}`,
      icon: Mail,
      name: "Email",
      value: socialLinks.email,
      hint: page.emailHint,
      external: false,
    },
    {
      href: socialLinks.linkedin,
      icon: LinkedinIcon,
      name: "LinkedIn",
      value: "satyam-peshwa",
      hint: page.linkedinHint,
      external: true,
    },
    {
      href: socialLinks.github,
      icon: GithubIcon,
      name: "GitHub",
      value: "DreamBigGo",
      hint: page.githubHint,
      external: true,
    },
  ];

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-24">
      <PageHeader
        icon={Mail}
        eyebrow={page.eyebrow}
        title={page.title}
        description={page.description}
      />

      <div className="mt-12 flex flex-col gap-4">
        {channels.map(({ href, icon: Icon, name, value, hint, external }) => (
          <a
            key={name}
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className="group flex items-center gap-4 rounded-2xl border border-zinc-200 p-5 transition-colors hover:border-orange-500 dark:border-zinc-800"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-zinc-100 text-zinc-700 transition-colors group-hover:bg-orange-500 group-hover:text-white dark:bg-zinc-900 dark:text-zinc-300">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block font-medium text-black dark:text-white">
                {name}
              </span>
              <span className="block truncate text-sm text-zinc-600 dark:text-zinc-400">
                {value} · {hint}
              </span>
            </span>
            <ArrowUpRight
              className="h-4 w-4 shrink-0 text-zinc-400 transition-colors group-hover:text-orange-500"
              aria-hidden="true"
            />
          </a>
        ))}
      </div>
    </main>
  );
}
