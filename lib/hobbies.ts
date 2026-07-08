import {
  BookOpen,
  Gamepad2,
  Goal,
  Landmark,
  type LucideIcon,
  NotebookPen,
  Rocket,
} from "lucide-react";
import type { LocalizedText } from "@/i18n/config";

export interface Hobby {
  /** Identifiant stable (slug). */
  id: string;
  name: LocalizedText;
  /** Sous-catégories / précisions affichées en puces (optionnel). */
  tags?: LocalizedText[];
  icon: LucideIcon;
}

export const hobbies: Hobby[] = [
  {
    id: "dev",
    name: {
      fr: "Développement de projets simples",
      en: "Building small projects",
    },
    icon: Rocket,
  },
  {
    id: "reading",
    name: { fr: "Lecture", en: "Reading" },
    tags: [
      { fr: "Manga", en: "Manga" },
      { fr: "Roman", en: "Novel" },
      { fr: "Comic", en: "Comic" },
      { fr: "BD", en: "Graphic novel" },
      { fr: "Light novel", en: "Light novel" },
    ],
    icon: BookOpen,
  },
  {
    id: "history",
    name: { fr: "Histoire", en: "History" },
    tags: [
      { fr: "Figures historiques", en: "Historical figures" },
      { fr: "Événements marquants", en: "Key events" },
    ],
    icon: Landmark,
  },
  {
    id: "journaling",
    name: { fr: "Journaling", en: "Journaling" },
    icon: NotebookPen,
  },
  {
    id: "gaming",
    name: { fr: "Jeux vidéo", en: "Video games" },
    icon: Gamepad2,
  },
  {
    id: "football",
    name: { fr: "Football", en: "Football" },
    icon: Goal,
  },
];
