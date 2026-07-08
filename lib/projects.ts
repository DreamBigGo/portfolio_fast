import type { LocalizedText } from "@/i18n/config";
import type { SkillRef } from "./skills";

export interface Project {
  /** Identifiant stable (slug), utilisé par la route `/projets/[id]`. */
  id: string;
  name: LocalizedText;
  tagline: LocalizedText;
  /** Année de réalisation. */
  year: number;
  summary: LocalizedText;
  /** Compétences acquises ou renforcées sur ce projet. */
  skills: SkillRef[];
}

/** Données d'exemple — à remplacer par les vraies réalisations. */
export const projects: Project[] = [
  {
    id: "portfolio",
    name: { fr: "Portfolio", en: "Portfolio" },
    tagline: {
      fr: "Site portfolio multilingue en Next.js.",
      en: "Multilingual portfolio site built with Next.js.",
    },
    year: 2026,
    summary: {
      fr: "Portfolio statique bilingue (FR/EN) déployé sur GitHub Pages via GitHub Actions.",
      en: "Bilingual (FR/EN) static portfolio deployed to GitHub Pages via GitHub Actions.",
    },
    skills: [
      { skillId: "nextjs", level: "advanced" },
      { skillId: "typescript", level: "intermediate" },
      { skillId: "tailwind", level: "advanced" },
      { skillId: "ci-cd", level: "intermediate" },
    ],
  },
  {
    id: "task-manager",
    name: { fr: "Gestionnaire de tâches", en: "Task Manager" },
    tagline: {
      fr: "Application de suivi de tâches en temps réel.",
      en: "Real-time task tracking application.",
    },
    year: 2025,
    summary: {
      fr: "Application full-stack de gestion de tâches avec API et base de données relationnelle.",
      en: "Full-stack task management app with an API and a relational database.",
    },
    skills: [
      { skillId: "react", level: "intermediate" },
      { skillId: "nodejs", level: "basics" },
      { skillId: "postgresql", level: "intermediate" },
      { skillId: "docker", level: "basics" },
    ],
  },
  {
    id: "design-system",
    name: { fr: "Design System", en: "Design System" },
    tagline: {
      fr: "Bibliothèque de composants réutilisables.",
      en: "Reusable component library.",
    },
    year: 2025,
    summary: {
      fr: "Système de composants documenté, pensé pour la cohérence et l'accessibilité.",
      en: "Documented component system focused on consistency and accessibility.",
    },
    skills: [
      { skillId: "react", level: "advanced" },
      { skillId: "tailwind", level: "advanced" },
      { skillId: "figma", level: "intermediate" },
    ],
  },
];

export const projectIds = projects.map((project) => project.id);
