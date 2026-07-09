import type { LocalizedText } from "@/i18n/config";

export interface Education {
  id: string;
  degree: LocalizedText;
  institution: string;
  logo?: string;
  location?: LocalizedText;
  startDate: string;
  endDate: string | null;
  description: LocalizedText;
}

export const educations: Education[] = [
  {
    id: "iut-paris-but-info",
    degree: {
      fr: "BUT Informatique",
      en: "Bachelor of Technology — Computer Science",
    },
    institution: "IUT de Paris - Rives de Seine",
    logo: "/univ-paris-cite-logo.svg",
    location: { fr: "Paris, France", en: "Paris, France" },
    startDate: "2024-09",
    endDate: "2027-06",
    description: {
      fr: "Formation universitaire en informatique : algorithmique, systèmes, réseaux, bases de données et développement logiciel.",
      en: "University programme in computer science: algorithms, systems, networking, databases and software development.",
    },
  },
  {
    id: "lycee-chaptal-btech",
    degree: {
      fr: "Baccalauréat Technologique STI2D",
      en: "Technology Baccalaureate — STI2D",
    },
    institution: "Lycée Chaptal",
    location: { fr: "Paris, France", en: "Paris, France" },
    startDate: "2022-09",
    endDate: "2024-07",
    description: {
      fr: "Spécialité Informatique et Réseaux (IR). Projets pratiques, câblage de composants électriques et programmation.",
      en: "Specialisation in IT & Networks (IR). Hands-on projects, electrical wiring and programming.",
    },
  },
];
