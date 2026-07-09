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
  /** URL du dépôt GitHub (optionnelle), affichée sur le détail. */
  repo?: string;
  /** Compétences mobilisées, avec le niveau de maîtrise démontré. */
  skills: SkillRef[];
}

/** Projets scolaires (IUT de Paris — Rives de Seine) et personnels. */
export const projects: Project[] = [
  {
    id: "openminds",
    name: "OpenMinds",
    year: 2026,
    tagline: {
      fr: "Application mobile Android (SAE S4) développée en Kotlin.",
      en: "Android mobile app (SAE S4) built in Kotlin.",
    },
    summary: {
      fr: "SAE S4 en équipe de quatre : application Android développée en Kotlin, accompagnée d'un serveur applicatif et d'une base de données SQL.",
      en: "SAE S4 in a team of four: an Android app built in Kotlin, backed by an application server and a SQL database.",
    },
    repo: "https://github.com/DreamBigGo/OpenMinds",
    skills: [
      { skillId: "kotlin", level: "intermediate" },
      { skillId: "sql", level: "basics" },
      { skillId: "git", level: "intermediate" },
    ],
  },
  {
    id: "powerhome",
    name: "PowerHome",
    year: 2026,
    tagline: {
      fr: "Application Android de domotique (mini-projet IUT) en Java.",
      en: "Home-automation Android app (IUT mini-project) in Java.",
    },
    summary: {
      fr: "Application Android de gestion domotique développée en Java, itérée sur trois versions : habitats et appareils électroménagers, authentification (connexion/inscription), notifications, créneaux de consommation et mode éco.",
      en: "Home-automation Android app built in Java across three iterations: habitats and appliances, authentication (login/register), notifications, consumption timeslots and an eco mode.",
    },
    repo: "https://github.com/DreamBigGo/Powerhome3",
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
      fr: "Travail en équipe de trois. Frontend HTML/CSS/JavaScript : refonte visuelle complète, carte interactive dynamique et formulaires avec validation en temps réel. Backend PHP 8 orienté objet : tableau de bord d'administration (membres et missions), authentification par rôles et base MariaDB via PDO. Sécurité : hachage des mots de passe et requêtes préparées contre les injections SQL.",
      en: "Team of three. HTML/CSS/JavaScript frontend: full visual redesign, dynamic interactive map and forms with real-time validation. Object-oriented PHP 8 backend: admin dashboard (members and missions), role-based authentication and a MariaDB database via PDO. Security: password hashing and prepared statements against SQL injection.",
    },
    repo: "https://github.com/DreamBigGo/S3-01",
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
      fr: "Jeu avec interface graphique Windows Forms en Visual Basic .NET.",
      en: "Game with a Windows Forms graphical interface in Visual Basic .NET.",
    },
    summary: {
      fr: "Jeu de bureau développé en Visual Basic .NET avec Windows Forms : menu principal, écran d'options et boucle de jeu avec ressources graphiques.",
      en: "Desktop game built in Visual Basic .NET with Windows Forms: main menu, options screen and a game loop with graphical assets.",
    },
    repo: "https://github.com/DreamBigGo/SAE_IHM",
    skills: [{ skillId: "vbnet", level: "intermediate" }],
  },
  {
    id: "octoverso",
    name: "OCTOVERSO",
    year: 2025,
    tagline: {
      fr: "Jeu de plateau en C (SAE comparaison d'approches algorithmiques).",
      en: "Board game in C (SAE on comparing algorithmic approaches).",
    },
    summary: {
      fr: "SAE S1.02 « comparaison d'approches algorithmiques » : jeu de plateau développé en C, avec gestion des joueurs, des chevalets et des rails de tuiles.",
      en: "SAE S1.02 “comparing algorithmic approaches”: a board game built in C, managing players, racks and tile rails.",
    },
    repo: "https://github.com/DreamBigGo/OCTOVERSO",
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
    summary: {
      fr: "Recueil des SAE d'initiation au développement en C, dont un système de suivi de présence des étudiants (noms et groupes) pour l'université.",
      en: "Collection of introductory development SAE projects in C, including a student attendance tracking system (names and groups) for the university.",
    },
    repo: "https://github.com/DreamBigGo/School",
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
    repo: "https://github.com/DreamBigGo/SAE_SYSTEM",
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
      fr: "Travail en équipe de quatre. Analyse structurelle d'un jeu de données et conception du schéma relationnel, puis création d'un site vitrine statique en HTML/CSS présentant les missions successives de la SAE et leur conclusion.",
      en: "Team of four. Structural analysis of a dataset and relational schema design, then a static HTML/CSS showcase site presenting the successive SAE missions and their conclusion.",
    },
    repo: "https://github.com/DreamBigGo/SAE-BD-WEB",
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
  {
    id: "library-zettelkasten",
    name: "LibraryZettelkasten",
    year: 2026,
    tagline: {
      fr: "Projet personnel : gestionnaire d'e-books avec prise de notes.",
      en: "Personal project: an e-book manager with side note-taking.",
    },
    summary: {
      fr: "Projet personnel en Java (en cours) : gestionnaire d'e-books permettant de prendre des notes en marge de la lecture, inspiré de la méthode Zettelkasten.",
      en: "Personal Java project (in progress): an e-book manager that lets you take notes alongside your reading, inspired by the Zettelkasten method.",
    },
    repo: "https://github.com/DreamBigGo/LibraryZettleKasten",
    skills: [
      { skillId: "java", level: "intermediate" },
      { skillId: "git", level: "intermediate" },
    ],
  },
  {
    id: "markdown-to-pdf",
    name: "MarkDownToPDF",
    year: 2025,
    tagline: {
      fr: "Projet personnel : convertisseur Markdown vers PDF en C.",
      en: "Personal project: a Markdown-to-PDF converter in C.",
    },
    summary: {
      fr: "Projet personnel en C : outil en ligne de commande convertissant un fichier .md en .pdf.",
      en: "Personal C project: a command-line tool that converts a .md file into a .pdf.",
    },
    repo: "https://github.com/DreamBigGo/MarkDownToPDF",
    skills: [{ skillId: "c", level: "intermediate" }],
  },
];

export const projectIds = projects.map((project) => project.id);
