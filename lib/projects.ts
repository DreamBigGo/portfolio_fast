import type { LocalizedText } from "@/i18n/config";
import type { SkillRef } from "./skills";

export interface Project {
  /** Identifiant stable (slug), utilisé par la route `/projets/[id]`. */
  id: string;
  /** Nom affiché (nom propre du projet). */
  name: string;
  /** Année de réalisation. */
  year: number;
  /** Accroche courte, une ligne. */
  tagline: LocalizedText;
  /** Description plus détaillée (optionnelle), affichée sur le détail. */
  summary?: LocalizedText;
  /** Compétences mobilisées, avec le niveau de maîtrise démontré. */
  skills: SkillRef[];
}

/** Projets réalisés durant la scolarité (IUT de Paris — Rives de Seine). */
export const projects: Project[] = [
  {
    id: "openminds",
    name: "OpenMinds",
    year: 2026,
    tagline: {
      fr: "Projet d'équipe (SAE S4) développé en Kotlin.",
      en: "Team project (SAE S4) built in Kotlin.",
    },
    skills: [
      { skillId: "kotlin", level: "intermediate" },
      { skillId: "git", level: "intermediate" },
    ],
  },
  {
    id: "powerhome",
    name: "PowerHome",
    year: 2026,
    tagline: {
      fr: "Mini-projet IUT développé en Java.",
      en: "IUT mini-project built in Java.",
    },
    skills: [{ skillId: "java", level: "intermediate" }],
  },
  {
    id: "s3-01",
    name: "S3-01",
    year: 2026,
    tagline: {
      fr: "Refonte du site de l'association AgirABCD.",
      en: "Redesign of the AgirABCD association website.",
    },
    summary: {
      fr: "Travail en équipe de trois. Frontend HTML/CSS/JavaScript avec une carte interactive dynamique, backend PHP/SQL et base de données MariaDB. Objectifs : modernisation complète de l'UI/UX, accessibilité, sécurité et nouvelles fonctionnalités.",
      en: "Team of three. HTML/CSS/JavaScript frontend with a dynamic interactive map, PHP/SQL backend and a MariaDB database. Goals: full UI/UX modernisation, accessibility, security and new features.",
    },
    skills: [
      { skillId: "php", level: "intermediate" },
      { skillId: "javascript", level: "intermediate" },
      { skillId: "html", level: "advanced" },
      { skillId: "css", level: "advanced" },
      { skillId: "sql", level: "intermediate" },
      { skillId: "git", level: "intermediate" },
    ],
  },
  {
    id: "sae-ihm",
    name: "SAE-IHM",
    year: 2025,
    tagline: {
      fr: "Application avec interface homme-machine en Visual Basic .NET.",
      en: "Application with a graphical user interface in Visual Basic .NET.",
    },
    skills: [{ skillId: "vbnet", level: "intermediate" }],
  },
  {
    id: "octoverso",
    name: "OCTOVERSO",
    year: 2025,
    tagline: {
      fr: "SAE de programmation en C.",
      en: "C programming project (SAE).",
    },
    skills: [{ skillId: "c", level: "intermediate" }],
  },
  {
    id: "school",
    name: "School",
    year: 2024,
    tagline: {
      fr: "Recueil de projets d'apprentissage en C.",
      en: "Collection of learning projects in C.",
    },
    skills: [{ skillId: "c", level: "basics" }],
  },
  {
    id: "sae-system",
    name: "SAE-SYSTEM",
    year: 2025,
    tagline: {
      fr: "Site sur les machines virtuelles et serveurs, hébergé sur une VM Linux Fedora.",
      en: "Site about virtual machines and servers, hosted on a Linux Fedora VM.",
    },
    summary: {
      fr: "Travail en binôme. Site vitrine réalisé avec Bootstrap, puis déployé et hébergé sur une machine virtuelle Linux Fedora (mise en ligne via SSH/SFTP), avec documentation des processus de déploiement et de sécurisation du serveur.",
      en: "Pair project. Showcase site built with Bootstrap, then deployed and hosted on a Linux Fedora virtual machine (published over SSH/SFTP), with documentation of the deployment and server-hardening processes.",
    },
    skills: [
      { skillId: "html", level: "intermediate" },
      { skillId: "css", level: "intermediate" },
      { skillId: "bootstrap", level: "intermediate" },
      { skillId: "linux", level: "intermediate" },
    ],
  },
  {
    id: "sae-bd-web",
    name: "SAE-BD-WEB",
    year: 2025,
    tagline: {
      fr: "Volet web d'une SAE Base de Données.",
      en: "Web part of a database SAE project.",
    },
    summary: {
      fr: "Travail en équipe de quatre. Analyse structurelle d'un jeu de données et conception du schéma relationnel, puis création d'un site vitrine statique en HTML/CSS pour l'exposition des résultats.",
      en: "Team of four. Structural analysis of a dataset and relational schema design, then a static HTML/CSS showcase site to present the results.",
    },
    skills: [
      { skillId: "sql", level: "intermediate" },
      { skillId: "html", level: "intermediate" },
      { skillId: "css", level: "basics" },
    ],
  },
  {
    id: "r3-04",
    name: "R3-04",
    year: 2026,
    tagline: {
      fr: "Moteur d'échecs UCI (finales KRK) en Java, Clean Architecture.",
      en: "UCI chess engine (KRK endgames) in Java, Clean Architecture.",
    },
    summary: {
      fr: "Projet d'équipe : moteur d'échecs UCI spécialisé dans les finales Roi + Tour contre Roi (KRK), développé en Java selon la Clean Architecture, avec communication UCI (CuteChess).",
      en: "Team project: a UCI chess engine specialised in King + Rook vs King (KRK) endgames, built in Java following Clean Architecture, with UCI communication (CuteChess).",
    },
    skills: [
      { skillId: "java", level: "advanced" },
      { skillId: "git", level: "intermediate" },
    ],
  },
  {
    id: "archiprojet",
    name: "ArchiProjet",
    year: 2026,
    tagline: {
      fr: "Projet d'architecture (serveurs) en Java.",
      en: "Architecture project (servers) in Java.",
    },
    skills: [
      { skillId: "java", level: "intermediate" },
      { skillId: "git", level: "intermediate" },
    ],
  },
  {
    id: "graphes",
    name: "GRAPHES",
    year: 2025,
    tagline: {
      fr: "Projet d'équipe sur les graphes en Java.",
      en: "Team project on graph algorithms in Java.",
    },
    skills: [
      { skillId: "java", level: "intermediate" },
      { skillId: "git", level: "intermediate" },
    ],
  },
];

export const projectIds = projects.map((project) => project.id);
