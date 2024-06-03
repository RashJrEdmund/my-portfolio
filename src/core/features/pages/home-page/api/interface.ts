interface Skill {
  id: string;
  label: string;
  description: string;
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

interface ProjectTags {
  id: string;
  label: string;
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
  tags: ProjectTags[];
  dateCreated: string;
  gitHubRepo: string;
  isPrivateRepo: boolean;
}

const ArrTabValues = ["favorites", "fullstack", "backend", "frontend", "html&css", "all"] as const;

type TabValues = typeof ArrTabValues[number];

export { ArrTabValues };

export type {
  Skill, Experience,

  TabValues,

  // Project
  Project,
  ProjectTags,
};
