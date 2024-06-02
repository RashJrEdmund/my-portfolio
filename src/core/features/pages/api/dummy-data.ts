import type { Experience, Project, Skill } from "./interface";

const SkillData: Skill[] = [
  {
    id: "1",
    label: "Attention to details",
    description:
      "A have a keep eye not just for design, but for code smells, and properly coding patterns.",
  },
  {
    id: "2",
    label: "Teachable",
    description:
      "I am teachable and will adhere to good council, both in and out of the programming world.",
  },
  {
    id: "3",
    label: "Logical Approach",
    description:
      "I always strive to tackle a problem as the best way I can. Constantly seeking for ways to improve code quality and efficiency.",
  },
  {
    id: "4",
    label: "Creative Ability",
    description:
      "A key factor all developers, front and back, should posses. I do believe that everything and anything can be made intuitive and fun to work with.",
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
    role: "Front End Developer",
    achievements: [
      "Consumed APIs, and managed an active ADMIN dash board",
      "Collaborated with a team of developers in building good user interfaces",
      "Worked and reported remotely",
    ],
    startDate: "2024-05-30T12:43:11.700Z",
    endDate: "2024-05-30T12:43:11.700Z",
  },
  {
    id: "2",
    organization: "Azen Enterprise",
    orgLink: "https://www.linkedin.com/company/azen-enterprise/",
    orgDescription:
      "A freelance startup org, consisting of a few developers with the AIM to provide tech related services",
    orgLogo: "/org-logos/azen-enterprise.jpeg",
    role: "Full Stack Developer",
    achievements: [
      "Handle and consumed Restful APIs on the frontend",
      "Built Apis for authentication, with TypeScript always at the core",
      "Collaborated in building good user interfaces",
    ],
    startDate: "2024-05-30T12:43:11.700Z",
    endDate: "2024-05-30T12:43:11.700Z",
  },
  {
    id: "3",
    organization: "Rebase Academy",
    orgLink: "https://www.linkedin.com/in/rebase-academy-/",
    orgDescription:
      "Full-Stack Web Development BootCamps Web Design (UI/UX) BootCamps",
    orgLogo: "/org-logos/rebase-academy.jpeg",
    role: "Front End Mentor | JS Mentor",
    achievements: [
      "Assisted newer developers to understanding certain key concepts about JavaScript",
      "Collaborated in building good user interfaces",
      "Assisted new devs and saw them through a few but rather challenging aspect of JS, HTML, and CSS",
    ],
    startDate: "2024-05-30T12:43:11.700Z",
    endDate: "2024-05-30T12:43:11.700Z",
  },
];

// PROJECTS

const ProjectData: Project[] = [
  {
    id: "1",
    name: "R - Cloud",
    description: "A cloud storage PWA (Progressive, Web App), designed with figma and built for storing and managing files online. I personally use it to save some of my files. I even used it on this portfolio to save some of these assets",
    url: "https://r-cloud.vercel.app",
    tabValues: ["favorites"],
    images: [
      "https://firebasestorage.googleapis.com/v0/b/r-cloud-b40e6.appspot.com/o/users%2Forashusedmund%40gmail.com%2Fr-drive%2FScreenshot%20from%202024-06-01%2007-39-21-1717223987771.png?alt=media&token=a2834cc6-86d3-4f44-8683-dca9666f006a",
      "https://firebasestorage.googleapis.com/v0/b/r-cloud-b40e6.appspot.com/o/users%2Forashusedmund%40gmail.com%2Fr-drive%2FScreenshot%20from%202024-06-01%2007-40-04-1717224019526.png?alt=media&token=f0d60ded-df1f-4ac7-85f1-a3be56635e32",
      "https://firebasestorage.googleapis.com/v0/b/r-cloud-b40e6.appspot.com/o/users%2Forashusedmund%40gmail.com%2Fr-drive%2Fnaruto%20v%20sasuke%20finale-1717224722372.png?alt=media&token=a05d36d8-7846-48b3-ab48-85c6f39746fa",
      "https://firebasestorage.googleapis.com/v0/b/r-cloud-b40e6.appspot.com/o/users%2Forashusedmund%40gmail.com%2Fr-drive%2FScreenshot%20from%202024-03-25%2013-35-35.png-1711655772780.png?alt=media&token=30a5b597-aca2-4ed9-913d-0ad179e13c9f",
      "https://firebasestorage.googleapis.com/v0/b/r-cloud-b40e6.appspot.com/o/users%2Forashusedmund%40gmail.com%2Fr-drive%2FScreenshot%20from%202024-06-01%2007-45-59-1717224393411.png?alt=media&token=f145a600-aa5e-4dd0-9ac5-d4512a70114d",
    ],
    logo: "https://firebasestorage.googleapis.com/v0/b/r-cloud-b40e6.appspot.com/o/users%2Forashusedmund%40gmail.com%2Fr-drive%2Fr-cloud-logo-1717236660783.png?alt=media&token=1606af2d-dc5d-4ece-af84-24b1cb61fdc8",
    tags: [
      {
        id: "1",
        label: "NextJs",
        bgColor: "#000",
        textColor: "#fff",
      },
      {
        id: "2",
        label: "Firebase",
        bgColor: "orange",
        textColor: "#fff",
      },
      {
        id: "3",
        label: "PWA",
        bgColor: "purple",
        textColor: "#fff",
      }
    ],
    dateCreated: "",
    gitHubRepo: "https://github.com/rashjredmund/r-cloud",
    isPrivateRepo: true,
  },
  {
    id: "2",
    name: "Krash - Weather",
    description: "A simple yet beautiful weather APP, It is one among the many projects I built when I started out with NextJs, It has automatic geo-weather detection, (making use of Ipgeolocation), search features, and a 5 day weather forecast with each day having 8 forecasts with a 3 hour spacing",
    url: "https://krash-weather.vercel.app/",
    tabValues: ["favorites", "frontend"],
    images: [
      "https://firebasestorage.googleapis.com/v0/b/r-cloud-b40e6.appspot.com/o/users%2Forashusedmund%40gmail.com%2Fr-drive%2Fkrash-weather-1-1717321486868.png?alt=media&token=bc0b75a1-c341-4882-800d-5748413837dd",
      "https://firebasestorage.googleapis.com/v0/b/r-cloud-b40e6.appspot.com/o/users%2Forashusedmund%40gmail.com%2Fr-drive%2Fkrash-weather-2-1717321494011.png?alt=media&token=f61ed8bf-3d8d-4c67-a5bf-418239d2047e",
      "https://firebasestorage.googleapis.com/v0/b/r-cloud-b40e6.appspot.com/o/users%2Forashusedmund%40gmail.com%2Fr-drive%2Fkrash-weather-3-1717321500430.png?alt=media&token=eb34fecc-846f-4b10-b704-59cadf244fbf",
      "https://firebasestorage.googleapis.com/v0/b/r-cloud-b40e6.appspot.com/o/users%2Forashusedmund%40gmail.com%2Fr-drive%2Fkrash-weather-4-1717321825215.png?alt=media&token=2f80e067-13e8-4a0c-8b98-703c36417e44",
    ],
    logo: "https://firebasestorage.googleapis.com/v0/b/r-cloud-b40e6.appspot.com/o/users%2Forashusedmund%40gmail.com%2Fr-drive%2Fkrash-weather-logo-1717321615378.png?alt=media&token=20bc286b-514b-42ff-97da-ddfec670ee6d",
    tags: [
      {
        id: "1",
        label: "NextJs",
        bgColor: "#000",
        textColor: "#fff",
      },
      {
        id: "2",
        label: "Openweather API",
        bgColor: "orange",
        textColor: "#fff",
      },
      {
        id: "3",
        label: "IPGeolocation",
        bgColor: "purple",
        textColor: "#fff",
      }
    ],
    dateCreated: "",
    gitHubRepo: "https://github.com/RashJrEdmund/krash-weather-app",
    isPrivateRepo: false,
  },
  {
    id: "3",
    name: "Portfolio",
    description: "My portfolio and blog site, designed with figma, and built to show case my abilities, so I can get hired and get paid to work 🙂. Don't forget to play with the mini space-ship parked right above the \"Experience section\"",
    url: "https://orashus.vercel.app/",
    tabValues: ["favorites", "fullstack"],
    images: [
      "https://firebasestorage.googleapis.com/v0/b/r-cloud-b40e6.appspot.com/o/users%2Forashusedmund%40gmail.com%2Fr-drive%2Fportfolio-banner-1-1717246054898.png?alt=media&token=684c592c-04e5-46fe-b9ce-cc3d7bda3b54",
      "https://firebasestorage.googleapis.com/v0/b/r-cloud-b40e6.appspot.com/o/users%2Forashusedmund%40gmail.com%2Fr-drive%2Fexperience-section-1717246286069.png?alt=media&token=dd6a12e0-c2ff-473c-a75d-5f8a4a289a7b",
      "https://firebasestorage.googleapis.com/v0/b/r-cloud-b40e6.appspot.com/o/users%2Forashusedmund%40gmail.com%2Fr-drive%2Fportfolio-footer-1717246640388.png?alt=media&token=329ed02e-0429-474e-82ed-04b330b9daab",
    ],
    logo: "https://firebasestorage.googleapis.com/v0/b/r-cloud-b40e6.appspot.com/o/users%2Forashusedmund%40gmail.com%2Fr-drive%2Flogo-1717241835706.png?alt=media&token=fb9d6405-9dfa-417f-976c-aa8038a123c1",
    tags: [
      {
        id: "1",
        label: "NextJs",
        bgColor: "#000",
        textColor: "#fff",
      },
      {
        id: "2",
        label: "NestJs",
        bgColor: "#000",
        textColor: "purple",
      },
      {
        id: "3",
        label: "Jest",
        bgColor: "green",
        textColor: "#000",
      },
      {
        id: "4",
        label: "MongoDb",
        bgColor: "green",
        textColor: "#fff",
      },
      {
        id: "5",
        label: "PWA",
        bgColor: "purple",
        textColor: "#fff",
      }
    ],
    dateCreated: "",
    gitHubRepo: "https://github.com/rashjredmund/my-portfolio",
    isPrivateRepo: true,
  },
  {
    id: "4",
    name: "Casino",
    description: "A casino site I built as a take home assessment for a company I applied for, no feed back yet 🥲, but I found it worthy to be here because of the time and effort I put in to make this right. It is here I started writing tests,",
    url: "https://casino-brand.vercel.app/",
    tabValues: ["favorites", "frontend"],
    images: [
      "https://firebasestorage.googleapis.com/v0/b/r-cloud-b40e6.appspot.com/o/users%2Forashusedmund%40gmail.com%2Fr-drive%2Fcasino%20landing-1717248848762.png?alt=media&token=095263e6-4610-413f-be47-4e84edbfbea9",
      "https://firebasestorage.googleapis.com/v0/b/r-cloud-b40e6.appspot.com/o/users%2Forashusedmund%40gmail.com%2Fr-drive%2Ftop-games-1717248697308.png?alt=media&token=53a6b60d-0c5c-4257-bf66-ffe76724b0c2",
      "https://firebasestorage.googleapis.com/v0/b/r-cloud-b40e6.appspot.com/o/users%2Forashusedmund%40gmail.com%2Fr-drive%2Ftestimonials-1717248694238.png?alt=media&token=a2dad75c-04d9-40fa-bc01-a324dcb0367f",
    ],
    logo: "https://firebasestorage.googleapis.com/v0/b/r-cloud-b40e6.appspot.com/o/users%2Forashusedmund%40gmail.com%2Fr-drive%2Fcasino%20logo-1717248619287.png?alt=media&token=bcadc3b2-2176-4edf-9288-a4099b8bfe15",
    tags: [
      {
        id: "1",
        label: "NextJs",
        bgColor: "#000",
        textColor: "#fff",
      },
      {
        id: "2",
        label: "PWA",
        bgColor: "purple",
        textColor: "#fff",
      }
    ],
    dateCreated: "",
    gitHubRepo: "https://github.com/RashJrEdmund/casino_brand",
    isPrivateRepo: false,
  }
];

export { SkillData, ExperienceData, ProjectData };
