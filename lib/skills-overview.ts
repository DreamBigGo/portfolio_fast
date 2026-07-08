import { experiences } from "./experiences";
import { projects } from "./projects";
import {
  skillCategoryOrder,
  skills,
  type Skill,
  type SkillCategory,
  type SkillLevel,
  type SkillRef,
} from "./skills";

export interface AggregatedSkill {
  skill: Skill;
  /** Niveau agrégé : « acquise » l'emporte sur « renforcée ». */
  level: SkillLevel;
}

export interface SkillGroup {
  category: SkillCategory;
  skills: AggregatedSkill[];
}

/** Toutes les références de compétences, expériences puis projets confondus. */
function collectSkillRefs(): SkillRef[] {
  return [
    ...experiences.flatMap((experience) => experience.skills),
    ...projects.flatMap((project) => project.skills),
  ];
}

/**
 * Construit la vue globale des compétences réellement utilisées, groupée par
 * catégorie. Aucune source de données séparée : tout est dérivé des références
 * portées par les expériences et les projets.
 */
export function getSkillsOverview(): SkillGroup[] {
  const levelById = new Map<string, SkillLevel>();
  for (const { skillId, level } of collectSkillRefs()) {
    if (levelById.get(skillId) === "acquired") continue;
    levelById.set(skillId, level);
  }

  return skillCategoryOrder
    .map((category) => ({
      category,
      skills: skills
        .filter((skill) => skill.category === category && levelById.has(skill.id))
        .map((skill) => ({ skill, level: levelById.get(skill.id)! })),
    }))
    .filter((group) => group.skills.length > 0);
}
