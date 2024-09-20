import type { Experience, Project, Skill, Tool } from "./interface";
import { getProjectTags } from "./project-tags";

const SkillData: Skill[] = [
  {
    id: "1",
    label: "Attention to details",
    description:
      "I have a keen eye not just for design, but for code smells, and proper coding patterns.",
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
      "I always strive to tackle a problem the best way I can. Constantly seeking for ways to improve code quality and efficiency.",
  },
  {
    id: "4",
    label: "Creative Ability",
    description:
      "A key factor all developers (both front and back) should posses. I do believe that everything and anything can be made intuitive and fun to work with.",
  },
];

const ExperienceData: Experience[] = [
  {
    id: "1",
    organization: "AftaWallet",
    orgDescription:
      "A fin-tech start-up based in Kigali Rwanda, with a vision to make money transfer easy across a number of African countries",
    orgLink: "https://aftawallet.com/",
    orgLogo: "/org-logos/afta-wallet.jpeg",
    role: "Front End Developer",
    achievements: [
      "Consumed APIs, and managed an active admin dashboard",
      "Collaborated with a team of developers to build some parts of the web interface, with UX at the back of our minds",
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
      "Built and consumed Restful APIs on the frontend",
      "Built Apis for authentication, with TypeScript always at the core",
      "Collaborated (remotely) in building tools for users",
    ],
    startDate: "2024-05-30T12:43:11.700Z",
    endDate: "2024-05-30T12:43:11.700Z",
  },
  {
    id: "3",
    organization: "Rebase Academy",
    orgLink: "https://www.linkedin.com/in/rebase-academy-/",
    orgDescription:
      "Full-Stack Web Development BootCamp, with the goal of transforming anyone into a qualified developer",
    orgLogo: "/org-logos/rebase-academy.jpeg",
    role: "Front End Mentor | JS Mentor",
    achievements: [
      "Assisted newer developers in understanding some key concepts of JavaScript, from data types to how JS works",
      "Help debug code while learning and making them learn from their mistakes",
      "Primarily helped and assisted in their understanding of tools such as JS, HTML, CSS, extended to React",
    ],
    startDate: "2024-05-30T12:43:11.700Z",
    endDate: "2024-05-30T12:43:11.700Z",
  },
];

// TOOLS AND LANGUAGES

const ToolsAndLanguageData: Tool[] = [
  {
    id: "1",
    img_url: "/lang-logos/ts-logo.png",
    name: "TypeScript",
  },
  {
    id: "2",
    img_url: "/lang-logos/js-logo.png",
    name: "JavaScript",
  },
  {
    id: "3",
    img_url: "/lang-logos/python-logo.jpeg",
    name: "Python",
  },
  {
    id: "4",
    img_url: "/lang-logos/java-logo.png",
    name: "Java",
  },
  {
    id: "5",
    img_url: "/lang-logos/rust-logo.jpeg",
    name: "Rust",
  },
];

// PROJECTS

const ProjectData: Project[] = [
  {
    id: "1",
    name: "R - Cloud",
    description:
      "A cloud storage PWA (Progressive Web App), designed with figma and built for storing, sharing, and managing files. I use it to save some of my files, and used it on this portfolio to save some of these assets. It can be monetized, and has other features I intend to add to it, like google analytics, and other things we could talk about during our interview 🙂",
    url: "https://r-cloud.vercel.app",
    tabValues: ["favorites", "fullstack"],
    images: [
      "https://firebasestorage.googleapis.com/v0/b/r-cloud-b40e6.appspot.com/o/users%2Forashusedmund%40gmail.com%2Fr-drive%2FScreenshot%20from%202024-06-01%2007-39-21-1717223987771.png?alt=media&token=a2834cc6-86d3-4f44-8683-dca9666f006a",
      "https://firebasestorage.googleapis.com/v0/b/r-cloud-b40e6.appspot.com/o/users%2Forashusedmund%40gmail.com%2Fr-drive%2FScreenshot%20from%202024-06-01%2007-40-04-1717224019526.png?alt=media&token=f0d60ded-df1f-4ac7-85f1-a3be56635e32",
      "https://firebasestorage.googleapis.com/v0/b/r-cloud-b40e6.appspot.com/o/users%2Forashusedmund%40gmail.com%2Fr-drive%2Fnaruto%20v%20sasuke%20finale-1717224722372.png?alt=media&token=a05d36d8-7846-48b3-ab48-85c6f39746fa",
      "https://firebasestorage.googleapis.com/v0/b/r-cloud-b40e6.appspot.com/o/users%2Forashusedmund%40gmail.com%2Fr-drive%2FScreenshot%20from%202024-03-25%2013-35-35.png-1711655772780.png?alt=media&token=30a5b597-aca2-4ed9-913d-0ad179e13c9f",
      "https://firebasestorage.googleapis.com/v0/b/r-cloud-b40e6.appspot.com/o/users%2Forashusedmund%40gmail.com%2Fr-drive%2FScreenshot%20from%202024-06-01%2007-45-59-1717224393411.png?alt=media&token=f145a600-aa5e-4dd0-9ac5-d4512a70114d",
      "https://firebasestorage.googleapis.com/v0/b/r-cloud-b40e6.appspot.com/o/users%2Forashusedmund%40gmail.com%2Fr-drive%2Fr-cloud-login-1717418302935.png?alt=media&token=ec2cc4e0-0d5d-4cdc-8932-8336a0a2d32e",
    ],
    logo: "https://firebasestorage.googleapis.com/v0/b/r-cloud-b40e6.appspot.com/o/users%2Forashusedmund%40gmail.com%2Fr-drive%2Fr-cloud-logo-1717236660783.png?alt=media&token=1606af2d-dc5d-4ece-af84-24b1cb61fdc8",
    tags: getProjectTags(["NextJs", "Firebase", "PWA", "TypeScript"]),
    dateCreated: "Tue Jan 2 2024",
    gitHubRepo: "https://github.com/rashjredmund/r-cloud",
    isPrivateRepo: true,
  },
  {
    id: "2",
    name: "Krash - Weather",
    description:
      "A simple yet beautiful weather APP, It is one among the many projects I built when I started out with NextJs, It has automatic geo-weather detection, (making use of Ipgeolocation), search features, and a 5 day weather forecast with each day having 8 forecasts with a 3 hour spacing",
    url: "https://krash-weather.vercel.app/",
    tabValues: ["frontend"],
    images: [
      "https://firebasestorage.googleapis.com/v0/b/r-cloud-b40e6.appspot.com/o/users%2Forashusedmund%40gmail.com%2Fr-drive%2Fkrash-weather-1-1717321486868.png?alt=media&token=bc0b75a1-c341-4882-800d-5748413837dd",
      "https://firebasestorage.googleapis.com/v0/b/r-cloud-b40e6.appspot.com/o/users%2Forashusedmund%40gmail.com%2Fr-drive%2Fkrash-weather-2-1717321494011.png?alt=media&token=f61ed8bf-3d8d-4c67-a5bf-418239d2047e",
      "https://firebasestorage.googleapis.com/v0/b/r-cloud-b40e6.appspot.com/o/users%2Forashusedmund%40gmail.com%2Fr-drive%2Fkrash-weather-3-1717321500430.png?alt=media&token=eb34fecc-846f-4b10-b704-59cadf244fbf",
      "https://firebasestorage.googleapis.com/v0/b/r-cloud-b40e6.appspot.com/o/users%2Forashusedmund%40gmail.com%2Fr-drive%2Fkrash-weather-4-1717321825215.png?alt=media&token=2f80e067-13e8-4a0c-8b98-703c36417e44",
    ],
    logo: "https://firebasestorage.googleapis.com/v0/b/r-cloud-b40e6.appspot.com/o/users%2Forashusedmund%40gmail.com%2Fr-drive%2Fkrash-weather-logo-1717321615378.png?alt=media&token=20bc286b-514b-42ff-97da-ddfec670ee6d",
    tags: getProjectTags([
      "NextJs",
      "Openweather API",
      "IPGeolocation",
      "TypeScript",
    ]),
    dateCreated: "Mon Jun 26 2023",
    gitHubRepo: "https://github.com/RashJrEdmund/krash-weather-app",
    isPrivateRepo: false,
  },
  {
    id: "3",
    name: "Portfolio",
    description:
      'My portfolio and blog site, designed with figma, and built to show case my abilities, so I can get hired and get paid to work 🙂. Don\'t forget to play with the mini space-ship parked right above the "Experience section"',
    url: "https://orashus.vercel.app/",
    tabValues: ["fullstack"],
    images: [
      "https://firebasestorage.googleapis.com/v0/b/r-cloud-b40e6.appspot.com/o/users%2Forashusedmund%40gmail.com%2Fr-drive%2Fportfolio-banner-1-1717246054898.png?alt=media&token=684c592c-04e5-46fe-b9ce-cc3d7bda3b54",
      "https://firebasestorage.googleapis.com/v0/b/r-cloud-b40e6.appspot.com/o/users%2Forashusedmund%40gmail.com%2Fr-drive%2Fexperience-section-1717246286069.png?alt=media&token=dd6a12e0-c2ff-473c-a75d-5f8a4a289a7b",
      "https://firebasestorage.googleapis.com/v0/b/r-cloud-b40e6.appspot.com/o/users%2Forashusedmund%40gmail.com%2Fr-drive%2Fportfolio-footer-1717246640388.png?alt=media&token=329ed02e-0429-474e-82ed-04b330b9daab",
    ],
    logo: "https://firebasestorage.googleapis.com/v0/b/r-cloud-b40e6.appspot.com/o/users%2Forashusedmund%40gmail.com%2Fr-drive%2Flogo-1717241835706.png?alt=media&token=fb9d6405-9dfa-417f-976c-aa8038a123c1",
    tags: getProjectTags([
      "NextJs",
      /* "NestJs", "MongoDb", */ "PWA",
      "Jest",
      "Cypress",
      "TypeScript",
    ]),
    dateCreated: "Sun May 26 2024",
    gitHubRepo: "https://github.com/rashjredmund/my-portfolio",
    isPrivateRepo: true,
  },
  {
    id: "4",
    name: "R - Devs todo app",
    description:
      "A full stack todo application built by I and my team in preparation of a regional hackathon. The purpose of this project was to help everyone understand how to work with the rest of the team. Both the front-end and back-end of this mono-repo were uploaded and deployed on vercel. It from here I learned to use the vercel CLI in for deployment",
    url: "https://r-dev-to-do.vercel.app/",
    tabValues: ["fullstack"],
    images: [
      "https://firebasestorage.googleapis.com/v0/b/r-cloud-b40e6.appspot.com/o/users%2Forashusedmund%40gmail.com%2Fr-drive%2Fr-devs-todos-home-1719985712928.png?alt=media&token=6e32f447-83e6-41a6-8987-a366e8d1b866",
      "https://firebasestorage.googleapis.com/v0/b/r-cloud-b40e6.appspot.com/o/users%2Forashusedmund%40gmail.com%2Fr-drive%2Fr-devs-todo-meet-team-section-1719985706038.png?alt=media&token=80cdfe19-2432-45f2-bdea-cfda82494888",
      "https://firebasestorage.googleapis.com/v0/b/r-cloud-b40e6.appspot.com/o/users%2Forashusedmund%40gmail.com%2Fr-drive%2Fr-devs-todo-home-loading-1719985575051.png?alt=media&token=c811745a-9017-45fe-852e-28da0fa0af73",
      "https://firebasestorage.googleapis.com/v0/b/r-cloud-b40e6.appspot.com/o/users%2Forashusedmund%40gmail.com%2Fr-drive%2Fr-devs-todo-todos-1719985578755.png?alt=media&token=36b9922a-7381-4df5-8114-104cc35e3d58",
      "https://firebasestorage.googleapis.com/v0/b/r-cloud-b40e6.appspot.com/o/users%2Forashusedmund%40gmail.com%2Fr-drive%2Fr-devs-todo-create-todo-1719985572947.png?alt=media&token=d25d7fd0-f22d-45e9-9bcd-4a14c3255419",
      "https://firebasestorage.googleapis.com/v0/b/r-cloud-b40e6.appspot.com/o/users%2Forashusedmund%40gmail.com%2Fr-drive%2Fr-devs-todos-delete-todo-1719987775811.png?alt=media&token=8e3fa6d9-29b6-45c3-90b2-e0bff942815f",
    ],
    logo: "https://firebasestorage.googleapis.com/v0/b/r-cloud-b40e6.appspot.com/o/users%2Forashusedmund%40gmail.com%2Fr-drive%2Flogo-1720025011710.png?alt=media&token=57527cc7-8593-441a-8312-b54bdd3ed42b",
    tags: getProjectTags(["NextJs", "Express", "MongoDb", "TypeScript"]),
    dateCreated: "Mon Jun 24 2024",
    gitHubRepo: "https://github.com/solonkonora/To-Do",
    isPrivateRepo: false,
  },
  {
    id: "5",
    name: "Mini - Link",
    description:
      "A url shortener I built with svelteKit (TS), Tailwind, SASS for the table, Fastify for auth, Express for redirects & shortening, and MongoDb. I deployed the API's on render.com but render shuts down my free backend services after 15 mins of idling, causing my app to break.🤕 As of now, I have a cron job setup that hits the API every 12 mins, in hopes to keep it alive.",
    url: "https://mini-link.vercel.app/",
    tabValues: ["favorites", "fullstack"],
    images: [
      "https://firebasestorage.googleapis.com/v0/b/r-cloud-b40e6.appspot.com/o/users%2Forashusedmund%40gmail.com%2Fr-drive%2Fmini-link-landing-1717417908077.png?alt=media&token=5fc4abab-e6f2-435c-96be-df4154e36f0b",
      "https://firebasestorage.googleapis.com/v0/b/r-cloud-b40e6.appspot.com/o/users%2Forashusedmund%40gmail.com%2Fr-drive%2Fmini-link-home-1717417904532.png?alt=media&token=ce8b1b19-8efe-483a-85b2-e3b9d825d4ab",
      "https://firebasestorage.googleapis.com/v0/b/r-cloud-b40e6.appspot.com/o/users%2Forashusedmund%40gmail.com%2Fr-drive%2Fmini-link-rename-1717417914931.png?alt=media&token=63c10840-17b9-4461-89c2-9db5d052e3d2",
      "https://firebasestorage.googleapis.com/v0/b/r-cloud-b40e6.appspot.com/o/users%2Forashusedmund%40gmail.com%2Fr-drive%2Fmini-link-login-1717417911665.png?alt=media&token=743815fc-0067-4bb5-ac5b-f1f377635de4",
    ],
    logo: "https://firebasestorage.googleapis.com/v0/b/r-cloud-b40e6.appspot.com/o/users%2Forashusedmund%40gmail.com%2Fr-drive%2Fmini-link-logo-1717417885799.png?alt=media&token=b7361c2f-58fb-4444-b05a-e767d0418872",
    tags: getProjectTags([
      "Svelte",
      "SCSS",
      "TailwindCss",
      "Fastify",
      "Express",
      "MongoDb",
      "TypeScript",
    ]),
    dateCreated: "Mon Sep 4 2023",
    gitHubRepo: "https://github.com/RashJrEdmund/mini_link",
    isPrivateRepo: false,
  },
  {
    id: "6",
    name: "Mini - Link (Auth)",
    description:
      "The Auth back end API for mini - link, built with Fastify as a separate services from that built with express, I made this separation to get some level of experience in building micro-services",
    url: "https://mini-link-auth.onrender.com/",
    tabValues: ["backend"],
    images: [],
    logo: "https://firebasestorage.googleapis.com/v0/b/r-cloud-b40e6.appspot.com/o/users%2Forashusedmund%40gmail.com%2Fr-drive%2Fmini-link-logo-1717417885799.png?alt=media&token=b7361c2f-58fb-4444-b05a-e767d0418872",
    tags: getProjectTags(["Fastify", "MongoDb", "TypeScript"]),
    dateCreated: "Sun Oct 29 2023",
    gitHubRepo: "https://github.com/RashJrEdmund/mini-link-auth",
    isPrivateRepo: false,
  },
  {
    id: "7",
    name: "API re-starter (Cron Job)",
    description:
      "I built this to resolve the issue with Mini link APIs and other backend services I deployed on render. Since Render shuts down a free tier service after 15 minutes of idleness, I built this cron-job to hit all the API's I deployed on Render free tier after every 12mins. This makes sure my backend services on render are always live and active 😇",
    url: "https://api-re-starter.onrender.com/",
    tabValues: ["backend"],
    images: [],
    logo: "https://firebasestorage.googleapis.com/v0/b/r-cloud-b40e6.appspot.com/o/users%2Forashusedmund%40gmail.com%2Fr-drive%2Flogo-1717241835706.png?alt=media&token=fb9d6405-9dfa-417f-976c-aa8038a123c1",
    tags: getProjectTags(["NodeJs", "TypeScript"]),
    dateCreated: "Thu Jul 18 2024",
    gitHubRepo: "https://github.com/RashJrEdmund/api-re-starter",
    isPrivateRepo: false,
  },
  {
    id: "8",
    name: "@orashus/client-storage",
    description: `A package I built as browser storage API with a wrapper. It takes away all the manual stringifying and parsing. 
    It introduces a more concise syntax with intuitive methods like .save() and .get().
    I've implemented generics and function overloads, to narrow down the type of data you're working with or getting.
    It has a fallback option incase of missing data and some amount of error handling under the hood with clear, helpful error messages.
    And finally server-side detection for frame works like NextJs`,
    url: "https://api-re-starter.onrender.com/",
    tabValues: ["favorites", "libraries"],
    images: [],
    logo: "https://github.com/orashus/client-storage/blob/main/assets/client-storage%20logo.png?raw=true",
    tags: getProjectTags(["TypeScript", "NPM"]),
    dateCreated: "Thu Sep 19 2024",
    gitHubRepo: "https://github.com/orashus/client-storage",
    isPrivateRepo: false,
  },
  {
    id: "9",
    name: "Casino",
    description:
      "A casino site I built as a take home assessment for a company I applied for, didn't get any feed back. I found it worthy to be here because of the time and effort I put in to make this right. It is here I learned to and started writing tests.",
    url: "https://casino-brand.vercel.app/",
    tabValues: ["frontend"],
    images: [
      "https://firebasestorage.googleapis.com/v0/b/r-cloud-b40e6.appspot.com/o/users%2Forashusedmund%40gmail.com%2Fr-drive%2Fcasino%20landing-1717248848762.png?alt=media&token=095263e6-4610-413f-be47-4e84edbfbea9",
      "https://firebasestorage.googleapis.com/v0/b/r-cloud-b40e6.appspot.com/o/users%2Forashusedmund%40gmail.com%2Fr-drive%2Ftop-games-1717248697308.png?alt=media&token=53a6b60d-0c5c-4257-bf66-ffe76724b0c2",
      "https://firebasestorage.googleapis.com/v0/b/r-cloud-b40e6.appspot.com/o/users%2Forashusedmund%40gmail.com%2Fr-drive%2Ftestimonials-1717248694238.png?alt=media&token=a2dad75c-04d9-40fa-bc01-a324dcb0367f",
    ],
    logo: "https://firebasestorage.googleapis.com/v0/b/r-cloud-b40e6.appspot.com/o/users%2Forashusedmund%40gmail.com%2Fr-drive%2Fcasino%20logo-1717248619287.png?alt=media&token=bcadc3b2-2176-4edf-9288-a4099b8bfe15",
    tags: getProjectTags(["NextJs", "PWA", "TypeScript"]),
    dateCreated: "Wed May 22 2024",
    gitHubRepo: "https://github.com/RashJrEdmund/casino_brand",
    isPrivateRepo: false,
  },
  {
    id: "10",
    name: "My Vue app collection",
    description:
      "I compiled a few mini projects I built back when I was learning to use VueJs, It has a nav bar with routes to most of the presentable things I built with VueJs",
    url: "https://rash-vue-apps.vercel.app/",
    tabValues: ["frontend"],
    images: [
      "https://firebasestorage.googleapis.com/v0/b/r-cloud-b40e6.appspot.com/o/users%2Forashusedmund%40gmail.com%2Fr-drive%2Fvue-apps-home-1717414907885.png?alt=media&token=7c0c50ce-9917-4f8b-8dc1-f36d23773441",
      "https://firebasestorage.googleapis.com/v0/b/r-cloud-b40e6.appspot.com/o/users%2Forashusedmund%40gmail.com%2Fr-drive%2Fvue-apps-calculator-1717414905596.png?alt=media&token=e7338557-ccd3-4263-831f-6a0cf0615463",
      "https://firebasestorage.googleapis.com/v0/b/r-cloud-b40e6.appspot.com/o/users%2Forashusedmund%40gmail.com%2Fr-drive%2Fvue-apps-todos-1717414911654.png?alt=media&token=818e33b6-be1b-4de2-82ab-e32497519752",
    ],
    logo: "https://firebasestorage.googleapis.com/v0/b/r-cloud-b40e6.appspot.com/o/users%2Forashusedmund%40gmail.com%2Fr-drive%2Fvue-apps-logo-1717414885691.png?alt=media&token=94197b80-e154-496f-a398-386faa47128a",
    tags: getProjectTags(["VueJs", "TypeScript"]),
    dateCreated: "Wed Feb 14 2024",
    gitHubRepo: "https://github.com/RashJrEdmund/vue-apps",
    isPrivateRepo: false,
  },
  {
    id: "11",
    name: "My first portfolio",
    description:
      "The first portfolio site, I built, containing every other HTML5 & CSS3 project. I remember this as one of the best things I built back when I was still struggling to understand DOM manipulation in JS. It is here not for it's beauty or technicality (and no where near optimized 🫠), but for the story behind it 🫶🏾 😊",
    url: "https://rashjredmund.github.io/Portfolio/",
    tabValues: ["html&css"],
    images: [
      "https://firebasestorage.googleapis.com/v0/b/r-cloud-b40e6.appspot.com/o/users%2Forashusedmund%40gmail.com%2Fr-drive%2Fportfolio-1-banner-1717413269428.png?alt=media&token=2a441828-2f1d-4e8c-9fe2-de918bbf3bf7",
      "https://firebasestorage.googleapis.com/v0/b/r-cloud-b40e6.appspot.com/o/users%2Forashusedmund%40gmail.com%2Fr-drive%2Fporfolio-1-projects-1717413254475.png?alt=media&token=53171725-2f0a-4097-bbe0-b98f73d42a75",
      "https://firebasestorage.googleapis.com/v0/b/r-cloud-b40e6.appspot.com/o/users%2Forashusedmund%40gmail.com%2Fr-drive%2Fporfolio-1-footer-1717413247454.png?alt=media&token=b62024e3-735f-447b-a589-8635115a6ffc",
    ],
    logo: "https://firebasestorage.googleapis.com/v0/b/r-cloud-b40e6.appspot.com/o/users%2Forashusedmund%40gmail.com%2Fr-drive%2Fportfolio-1-logo-1717413213488.jpeg?alt=media&token=9b25f06c-6f2b-4bea-9ff5-255ab92fa44d",
    tags: getProjectTags(["HTML", "CSS", "JavaScript"]),
    dateCreated: "Wed Oct 26 2022",
    gitHubRepo: "https://github.com/RashJrEdmund/Portfolio",
    isPrivateRepo: false,
  },
];

// CERTIFICATES AND ACHIEVEMENTS

const CertificateData = [
  {
    id: "1",
    title: "HackerRank JavaScript Developer (Basic)",
    url: "https://www.hackerrank.com/certificates/ab41a92a50fd",
    previewImg:
      "https://firebasestorage.googleapis.com/v0/b/r-cloud-b40e6.appspot.com/o/users%2Forashusedmund%40gmail.com%2Fr-drive%2FHackerRank-cert-basic-1717359420485.png?alt=media&token=02a68a7f-d819-42e0-a88a-6e6e9ec99561",
    dateArchived: "6/17/2023",
  },
  {
    id: "2",
    title: "HackerRank JavaScript Developer (Intermediate)",
    url: "https://www.hackerrank.com/certificates/ab41a92a50fd",
    previewImg:
      "https://firebasestorage.googleapis.com/v0/b/r-cloud-b40e6.appspot.com/o/users%2Forashusedmund%40gmail.com%2Fr-drive%2FHackerRank-cert-intermediate-1717359441118.png?alt=media&token=f0d84986-ea75-4a08-b768-5974b0d13c4d",
    dateArchived: "10/6/2023",
  },
  {
    id: "3",
    title: "ALX AICE (AI Career Essentials)",
    url: "alx-aice-completion-badge-v2.gif",
    previewImg: "/alx-aice-completion-badge-v2.gif",
    dateArchived: "8/18/2024",
  },
];

export {
  SkillData,
  ExperienceData,
  ToolsAndLanguageData,
  ProjectData,
  CertificateData,
};
