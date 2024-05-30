interface Skill {
  id: string;
  label: string;
  description: string;
};

interface Experience {
  id: string ;
  organization: string;
  orgLink: string;
  orgLogo: string;
  orgDescription: string;
  achievements: string[];
  startDate: Date | string;
  endDate: Date | string;
}

export type {
  Skill,
  Experience,
};
