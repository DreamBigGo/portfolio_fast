/**
 * Source de données minimale des projets.
 * Sert de base à la liste, au détail et à `generateStaticParams` afin que
 * l'export statique connaisse toutes les pages `/projets/[id]` à générer.
 * À remplacer par de vraies données (CMS, JSON, MDX…) ultérieurement.
 */
export interface Project {
  id: string;
}

export const projects: Project[] = [{ id: "1" }, { id: "2" }, { id: "3" }];

export const projectIds = projects.map((project) => project.id);
