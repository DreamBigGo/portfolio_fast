"use client";

import { useMemo, useState } from "react";
import type { Locale } from "@/i18n/config";
import type { Project } from "@/lib/projects";
import { skillName, skillsById, type SkillId } from "@/lib/skills";

interface FilterOption {
  skillId: SkillId;
  label: string;
}

interface ProjectFilter {
  /** Compétence sélectionnée, ou `null` pour tout afficher. */
  selected: SkillId | null;
  /** Sélectionne une compétence ; re-cliquer la même la désélectionne. */
  toggle: (skillId: SkillId) => void;
  /** Réinitialise le filtre (affiche tout). */
  reset: () => void;
  /** Compétences réellement utilisées par au moins un projet, triées. */
  options: FilterOption[];
  /** Projets retenus par le filtre courant. */
  filtered: Project[];
}

/** Logique de filtrage des projets par compétence. */
export function useProjectFilter(
  projects: Project[],
  lang: Locale,
): ProjectFilter {
  const [selected, setSelected] = useState<SkillId | null>(null);

  const options = useMemo<FilterOption[]>(() => {
    const used = new Set<SkillId>();
    for (const project of projects) {
      for (const { skillId } of project.skills) used.add(skillId);
    }
    return [...used]
      .map((skillId) => ({ skillId, label: skillName(skillsById[skillId], lang) }))
      .sort((a, b) => a.label.localeCompare(b.label, lang));
  }, [projects, lang]);

  const filtered = useMemo(
    () =>
      selected === null
        ? projects
        : projects.filter((project) =>
            project.skills.some(({ skillId }) => skillId === selected),
          ),
    [projects, selected],
  );

  return {
    selected,
    toggle: (skillId) =>
      setSelected((current) => (current === skillId ? null : skillId)),
    reset: () => setSelected(null),
    options,
    filtered,
  };
}
