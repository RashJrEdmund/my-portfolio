interface Skill {
  id: string;
  label: string;
  description: string;
}

interface Tool {
  id: string;
  img_url: string;
  name: string;
}

interface Experience {
  id: string;
  organization: string;
  orgLink: string;
  orgLogo: string;
  orgDescription: string;
  achievements: string[];
  role: string;
  startDate: Date | string;
  endDate: Date | string;
}

// PROJECTS

type ProjectLabels = "HTML" | "CSS" | "JavaScript" | "NextJs" | "VueJs"
  | "Svelte" | "Firebase" | "PWA" | "TypeScript" | "Python" | "Java" | "SCSS"
  | "TailwindCss" | "Openweather API" | "IPGeolocation" | "NestJs" | "Express"
  | "Fastify" | "NodeJs" | "MongoDb" | "Jest" | "Cypress";

interface ProjectTag {
  id: string;
  label: ProjectLabels;
  bgColor: string;
  textColor: string;
}

interface Project {
  id: string;
  name: string;
  description: string;
  url: string;
  images: string[];
  logo: string;
  tabValues: TabValues[];
  tags: ProjectTag[];
  dateCreated: string;
  gitHubRepo: string;
  isPrivateRepo: boolean;
}

const ArrTabValues = [
  "favorites",
  "fullstack",
  "backend",
  "frontend",
  "html&css",
  "all",
] as const;

type TabValues = (typeof ArrTabValues)[number];

export { ArrTabValues };

export type {
  Skill,
  Tool,
  Experience,
  TabValues,

  // Project
  Project,
  ProjectTag,
  ProjectLabels,
};
