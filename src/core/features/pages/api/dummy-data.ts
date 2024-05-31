import type { Experience, Skill } from "./interface";

const SkillData: Skill[] = [
  {
    id: "1",
    label: "Attention to details",
    description:
      "A have a keep eye not just for design, but for code smells, and properly coding patterns",
  },
  {
    id: "2",
    label: "Teachable",
    description:
      "I am teachable and will adhere to good council, both in and out of the programming world",
  },
  {
    id: "3",
    label: "Logical Approach",
    description:
      "I always strive to tackle a problem as the best way I can. Constantly seeking for ways to improve code quality and efficiency",
  },
  {
    id: "4",
    label: "Creative Ability",
    description:
      "A key factor all developers, front and back, should posses. I do believe that everything and anything can be made intuitive and fun to work with",
  },
];

const ExperienceData: Experience[] = [
  {
    id: "1",
    organization: "AftaWallet",
    orgDescription:
      "A fin tech start up base in Kigali Rwanda, with a vision to make money transfer easy across a number of African countries",
    orgLink: "https://aftawallet.com/",
    orgLogo: "/org-logos/afta-wallet.jpeg",
    achievements: [
      "Colaborated in building good user interfaces",
      "Colaborated in building good user interfaces",
      "Colaborated in building good user interfaces",
    ],
    startDate: "2024-05-30T12:43:11.700Z",
    endDate: "2024-05-30T12:43:11.700Z",
  },
  {
    id: "2",
    organization: "Azen Enterprise",
    orgLink: "https://www.linkedin.com/company/azen-enterprise/",
    orgDescription:
      "A freelance tech organization consisting of a few developers",
    orgLogo: "/org-logos/azen-enterprise.jpeg",
    achievements: [
      "Colaborated in building good user interfaces",
      "Built Apis with for authentication",
      "Handle and consumed Restfull APIs on the frontend",
    ],
    startDate: "2024-05-30T12:43:11.700Z",
    endDate: "2024-05-30T12:43:11.700Z",
  },
  {
    id: "3",
    organization: "Azen Enterprise",
    orgLink: "",
    orgDescription:
      "A freelance tech organization consisting of a few developers",
    orgLogo: "/org-logos/azen-enterprise.jpeg",
    achievements: [
      "Colaborated in building good user interfaces",
      "Built Apis with for authentication",
      "Handle and consumed Restfull APIs on the frontend",
    ],
    startDate: "2024-05-30T12:43:11.700Z",
    endDate: "2024-05-30T12:43:11.700Z",
  },
];

export { SkillData, ExperienceData };
