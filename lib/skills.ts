import type { LucideIcon } from "lucide-react";
import {
  Atom,
  Bot,
  Boxes,
  Braces,
  BrainCircuit,
  Cloud,
  Container,
  Database,
  GitBranch,
  Hexagon,
  Layers,
  Orbit,
  Palette,
  Server,
  SquareTerminal,
  Triangle,
  Wind,
} from "lucide-react";
import type { Locale, LocalizedText } from "@/i18n/config";

/** Domaines de compétences, dans l'ordre d'affichage souhaité. */
export type SkillCategory = "frontend" | "backend" | "tools";

export const skillCategoryOrder: SkillCategory[] = [
  "frontend",
  "backend",
  "tools",
];

/** Niveau d'appropriation d'une compétence via une expérience/un projet. */
export type SkillLevel = "acquired" | "improved";

export interface Skill {
  /** Identifiant stable, référencé par les expériences et projets. */
  id: string;
  /** Nom affiché : chaîne pour un nom propre, ou traduit si nécessaire. */
  name: string | LocalizedText;
  category: SkillCategory;
  icon: LucideIcon;
}

/** Résout le nom d'une compétence dans la locale demandée. */
export function skillName(skill: Skill, lang: Locale): string {
  return typeof skill.name === "string" ? skill.name : skill.name[lang];
}

/**
 * Référence d'une compétence depuis une expérience ou un projet, qualifiée
 * par le niveau atteint. C'est l'unique source des compétences : la vue
 * globale est dérivée par agrégation de ces références (cf. `skills-overview`).
 */
export interface SkillRef {
  skillId: SkillId;
  level: SkillLevel;
}

/** Catalogue des compétences. `as const` fige les `id` pour typer `SkillId`. */
export const skills = [
  { id: "typescript", name: "TypeScript", category: "frontend", icon: Braces },
  { id: "react", name: "React", category: "frontend", icon: Atom },
  { id: "nextjs", name: "Next.js", category: "frontend", icon: Triangle },
  { id: "tailwind", name: "Tailwind CSS", category: "frontend", icon: Wind },
  { id: "nodejs", name: "Node.js", category: "backend", icon: Server },
  { id: "nestjs", name: "NestJS", category: "backend", icon: Hexagon },
  { id: "prisma", name: "Prisma", category: "backend", icon: Layers },
  { id: "postgresql", name: "PostgreSQL", category: "backend", icon: Database },
  { id: "supabase", name: "Supabase", category: "backend", icon: Cloud },
  { id: "docker", name: "Docker", category: "tools", icon: Container },
  { id: "git", name: "Git", category: "tools", icon: GitBranch },
  { id: "figma", name: "Figma", category: "tools", icon: Palette },
  { id: "ci-cd", name: "CI/CD", category: "tools", icon: Boxes },
  { id: "claude-code", name: "Claude Code", category: "tools", icon: SquareTerminal },
  { id: "antigravity", name: "Antigravity", category: "tools", icon: Orbit },
  { id: "github-copilot", name: "GitHub Copilot", category: "tools", icon: Bot },
  {
    id: "ai-agents",
    name: { fr: "Gestion d'agents IA", en: "AI agent management" },
    category: "tools",
    icon: BrainCircuit,
  },
] as const satisfies readonly Skill[];

export type SkillId = (typeof skills)[number]["id"];

/** Index par identifiant pour retrouver une compétence en O(1). */
export const skillsById: Record<SkillId, Skill> = Object.fromEntries(
  skills.map((skill) => [skill.id, skill]),
) as Record<SkillId, Skill>;
