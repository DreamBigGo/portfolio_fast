import type { LocalizedText } from "@/i18n/config";
import type { SkillRef } from "./skills";

export interface Experience {
  /** Identifiant stable (slug). */
  id: string;
  role: LocalizedText;
  /** Nom de l'organisation (non traduit). */
  organization: string;
  /** Lieu (optionnel). */
  location?: LocalizedText;
  /** Début au format `YYYY-MM`. */
  startDate: string;
  /** Fin au format `YYYY-MM`, ou `null` si poste en cours. */
  endDate: string | null;
  summary: LocalizedText;
  /** Compétences acquises ou renforcées durant cette expérience. */
  skills: SkillRef[];
}

export const experiences: Experience[] = [
  {
    id: "holinea",
    role: {
      fr: "Stagiaire Full-Stack",
      en: "Full-Stack Intern",
    },
    organization: "Holinea",
    startDate: "2026-04",
    endDate: "2026-06",
    summary: {
      fr: "Formation de stagiaires aux outils du projet. Site réalisé de A à Z exclusivement à l'aide de l'IA.",
      en: "Trained interns on the project's tools. Site built end-to-end exclusively with AI.",
    },
    skills: [
      { skillId: "typescript", level: "intermediate" },
      { skillId: "nextjs", level: "advanced" },
      { skillId: "react", level: "intermediate" },
      { skillId: "tailwind", level: "advanced" },
      { skillId: "nestjs", level: "basics" },
      { skillId: "prisma", level: "basics" },
      { skillId: "supabase", level: "basics" },
      { skillId: "postgresql", level: "intermediate" },
      { skillId: "docker", level: "basics" },
      { skillId: "git", level: "intermediate" },
      { skillId: "ci-cd", level: "intermediate" },
      { skillId: "ai-agents", level: "advanced" },
      { skillId: "claude-code", level: "advanced" },
      { skillId: "antigravity", level: "intermediate" },
      { skillId: "github-copilot", level: "intermediate" },
    ],
  },
];
