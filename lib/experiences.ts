import type { LocalizedText } from "@/i18n/config";
import type { SkillRef } from "./skills";

export interface Experience {
  /** Identifiant stable (slug). */
  id: string;
  role: LocalizedText;
  /** Nom de l'organisation (non traduit). */
  organization: string;
  location: LocalizedText;
  /** Début au format `YYYY-MM`. */
  startDate: string;
  /** Fin au format `YYYY-MM`, ou `null` si poste en cours. */
  endDate: string | null;
  summary: LocalizedText;
  /** Compétences acquises ou renforcées durant cette expérience. */
  skills: SkillRef[];
}

/** Données d'exemple — à remplacer par le contenu réel du parcours. */
export const experiences: Experience[] = [
  {
    id: "stage-fullstack",
    role: { fr: "Stage — Développeur Full-Stack", en: "Internship — Full-Stack Developer" },
    organization: "Acme Corp",
    location: { fr: "Paris, France", en: "Paris, France" },
    startDate: "2025-04",
    endDate: "2025-09",
    summary: {
      fr: "Développement d'une application web interne de gestion, du modèle de données à l'interface.",
      en: "Built an internal web management application, from the data model to the interface.",
    },
    skills: [
      { skillId: "typescript", level: "improved" },
      { skillId: "react", level: "improved" },
      { skillId: "nodejs", level: "acquired" },
      { skillId: "postgresql", level: "acquired" },
      { skillId: "git", level: "improved" },
    ],
  },
  {
    id: "projet-universitaire",
    role: { fr: "Chef de projet technique", en: "Technical Project Lead" },
    organization: "Université",
    location: { fr: "À distance", en: "Remote" },
    startDate: "2024-09",
    endDate: "2025-02",
    summary: {
      fr: "Coordination d'une équipe de quatre étudiants pour livrer une plateforme collaborative.",
      en: "Coordinated a team of four students to deliver a collaborative platform.",
    },
    skills: [
      { skillId: "nextjs", level: "acquired" },
      { skillId: "tailwind", level: "acquired" },
      { skillId: "figma", level: "improved" },
      { skillId: "ci-cd", level: "acquired" },
    ],
  },
];
