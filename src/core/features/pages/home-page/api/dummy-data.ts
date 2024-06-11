import type { Experience, Project, Skill } from "./interface";

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
      "Consumed APIs, and managed an active ADMIN dashboard",
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
      "Collaborated (remotely) in building good user interfaces",
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
      "Assisted newer developers in understanding certain key concepts about JavaScript",
      "Collaborated in building good user interfaces",
      "Assisted new devs and saw them through a few but rather challenging aspects of JS, HTML, and CSS",
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
    description:
      "A cloud storage PWA (Progressive, Web App), designed with figma and built for storing and managing files online. I personally use it to save some of my files. I even used it on this portfolio to save some of these assets. It has a great monetization ability, and other features I intend to add to it, like file sharing (Which I've figured out how to go about it) and other things we could talk about during our interview 🙂",
    url: "https://r-cloud.vercel.app",
    tabValues: ["favorites"],
    images: [
      "https://firebasestorage.googleapis.com/v0/b/r-cloud-b40e6.appspot.com/o/users%2Forashusedmund%40gmail.com%2Fr-drive%2FScreenshot%20from%202024-06-01%2007-39-21-1717223987771.png?alt=media&token=a2834cc6-86d3-4f44-8683-dca9666f006a",
      "https://firebasestorage.googleapis.com/v0/b/r-cloud-b40e6.appspot.com/o/users%2Forashusedmund%40gmail.com%2Fr-drive%2FScreenshot%20from%202024-06-01%2007-40-04-1717224019526.png?alt=media&token=f0d60ded-df1f-4ac7-85f1-a3be56635e32",
      "https://firebasestorage.googleapis.com/v0/b/r-cloud-b40e6.appspot.com/o/users%2Forashusedmund%40gmail.com%2Fr-drive%2Fnaruto%20v%20sasuke%20finale-1717224722372.png?alt=media&token=a05d36d8-7846-48b3-ab48-85c6f39746fa",
      "https://firebasestorage.googleapis.com/v0/b/r-cloud-b40e6.appspot.com/o/users%2Forashusedmund%40gmail.com%2Fr-drive%2FScreenshot%20from%202024-03-25%2013-35-35.png-1711655772780.png?alt=media&token=30a5b597-aca2-4ed9-913d-0ad179e13c9f",
      "https://firebasestorage.googleapis.com/v0/b/r-cloud-b40e6.appspot.com/o/users%2Forashusedmund%40gmail.com%2Fr-drive%2FScreenshot%20from%202024-06-01%2007-45-59-1717224393411.png?alt=media&token=f145a600-aa5e-4dd0-9ac5-d4512a70114d",
      "https://firebasestorage.googleapis.com/v0/b/r-cloud-b40e6.appspot.com/o/users%2Forashusedmund%40gmail.com%2Fr-drive%2Fr-cloud-login-1717418302935.png?alt=media&token=ec2cc4e0-0d5d-4cdc-8932-8336a0a2d32e",
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
      },
    ],
    dateCreated: "",
    gitHubRepo: "https://github.com/rashjredmund/r-cloud",
    isPrivateRepo: true,
  },
  {
    id: "2",
    name: "Krash - Weather",
    description:
      "A simple yet beautiful weather APP, It is one among the many projects I built when I started out with NextJs, It has automatic geo-weather detection, (making use of Ipgeolocation), search features, and a 5 day weather forecast with each day having 8 forecasts with a 3 hour spacing",
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
      },
    ],
    dateCreated: "",
    gitHubRepo: "https://github.com/RashJrEdmund/krash-weather-app",
    isPrivateRepo: false,
  },
  {
    id: "3",
    name: "Portfolio",
    description:
      'My portfolio and blog site, designed with figma, and built to show case my abilities, so I can get hired and get paid to work 🙂. Don\'t forget to play with the mini space-ship parked right above the "Experience section"',
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
        label: "MongoDb",
        bgColor: "green",
        textColor: "#fff",
      },
      {
        id: "4",
        label: "PWA",
        bgColor: "purple",
        textColor: "#fff",
      },
      {
        id: "5",
        label: "Jest",
        bgColor: "green",
        textColor: "#000",
      },
      {
        id: "6",
        label: "Cypress",
        bgColor: "#fff",
        textColor: "#000",
      },
    ],
    dateCreated: "",
    gitHubRepo: "https://github.com/rashjredmund/my-portfolio",
    isPrivateRepo: true,
  },
  {
    id: "4",
    name: "Mini - Link",
    description:
      "A url shortener I built with svelteKit (TS), Tailwind, SASS (for the table, I didn't wanna write Tailwind for that), Fastify (for auth), Express (for redirects) and shortening, MongoDb. It should've been among my favorite list but render.com shuts down my free backend services after 15 mins of idling, causing my app to break.🤕 At times you'll have to refresh and wait till the service reboots.",
    url: "https://mini-link.vercel.app/",
    tabValues: ["fullstack"],
    images: [
      "https://firebasestorage.googleapis.com/v0/b/r-cloud-b40e6.appspot.com/o/users%2Forashusedmund%40gmail.com%2Fr-drive%2Fmini-link-landing-1717417908077.png?alt=media&token=5fc4abab-e6f2-435c-96be-df4154e36f0b",
      "https://firebasestorage.googleapis.com/v0/b/r-cloud-b40e6.appspot.com/o/users%2Forashusedmund%40gmail.com%2Fr-drive%2Fmini-link-home-1717417904532.png?alt=media&token=ce8b1b19-8efe-483a-85b2-e3b9d825d4ab",
      "https://firebasestorage.googleapis.com/v0/b/r-cloud-b40e6.appspot.com/o/users%2Forashusedmund%40gmail.com%2Fr-drive%2Fmini-link-rename-1717417914931.png?alt=media&token=63c10840-17b9-4461-89c2-9db5d052e3d2",
      "https://firebasestorage.googleapis.com/v0/b/r-cloud-b40e6.appspot.com/o/users%2Forashusedmund%40gmail.com%2Fr-drive%2Fmini-link-login-1717417911665.png?alt=media&token=743815fc-0067-4bb5-ac5b-f1f377635de4",
    ],
    logo: "https://firebasestorage.googleapis.com/v0/b/r-cloud-b40e6.appspot.com/o/users%2Forashusedmund%40gmail.com%2Fr-drive%2Fmini-link-logo-1717417885799.png?alt=media&token=b7361c2f-58fb-4444-b05a-e767d0418872",
    tags: [
      {
        id: "1",
        label: "Svelte",
        bgColor: "#dd4b25",
        textColor: "#fff",
      },
      {
        id: "2",
        label: "SCSS",
        bgColor: "#254bdd",
        textColor: "#fff",
      },
      {
        id: "3",
        label: "TailwindCss",
        bgColor: "#254bdd",
        textColor: "#fff",
      },
      {
        id: "4",
        label: "Fastify",
        bgColor: "#000",
        textColor: "#fff",
      },
      {
        id: "5",
        label: "Express",
        bgColor: "#fff",
        textColor: "#000",
      },
      {
        id: "6",
        label: "MongoDb",
        bgColor: "green",
        textColor: "#fff",
      },
    ],
    dateCreated: "",
    gitHubRepo: "https://github.com/RashJrEdmund/mini_link",
    isPrivateRepo: false,
  },
  {
    id: "5",
    name: "Mini - Link (Auth)",
    description:
      "The Auth back end API for mini - link, built with Fastify as a separate services from that built with express",
    url: "https://mini-link-auth.onrender.com/",
    tabValues: ["backend"],
    images: [],
    logo: "https://firebasestorage.googleapis.com/v0/b/r-cloud-b40e6.appspot.com/o/users%2Forashusedmund%40gmail.com%2Fr-drive%2Fmini-link-logo-1717417885799.png?alt=media&token=b7361c2f-58fb-4444-b05a-e767d0418872",
    tags: [
      {
        id: "1",
        label: "Fastify",
        bgColor: "#000",
        textColor: "#fff",
      },
      {
        id: "2",
        label: "MongoDb",
        bgColor: "green",
        textColor: "#fff",
      },
    ],
    dateCreated: "",
    gitHubRepo: "https://github.com/RashJrEdmund/mini-link-auth",
    isPrivateRepo: false,
  },
  {
    id: "6",
    name: "Casino",
    description:
      "A casino site I built as a take home assessment for a company I applied for, no feed back yet 🥲, but I found it worthy to be here because of the time and effort I put in to make this right. It is here I started writing tests,",
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
      },
    ],
    dateCreated: "",
    gitHubRepo: "https://github.com/RashJrEdmund/casino_brand",
    isPrivateRepo: false,
  },
  {
    id: "7",
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
    tags: [
      {
        id: "1",
        label: "VueJs",
        bgColor: "green",
        textColor: "#fff",
      },
    ],
    dateCreated: "",
    gitHubRepo: "https://github.com/RashJrEdmund/vue-apps",
    isPrivateRepo: false,
  },
  {
    id: "8",
    name: "My first portfolio",
    description:
      "The first portfolio site, I built, containing every other HTML5 & CSS3 project. I remember this as one of the best things I built back when I was still struggling to understand DOM manipulation in JS. It is here not for it's beauty or technicality (and no where near optimized 🫠), but for the story behind it 🫶🏾 😊",
    url: "https://rashjredmund.github.io/Portfolio/",
    tabValues: ["favorites", "html&css"],
    images: [
      "https://firebasestorage.googleapis.com/v0/b/r-cloud-b40e6.appspot.com/o/users%2Forashusedmund%40gmail.com%2Fr-drive%2Fportfolio-1-banner-1717413269428.png?alt=media&token=2a441828-2f1d-4e8c-9fe2-de918bbf3bf7",
      "https://firebasestorage.googleapis.com/v0/b/r-cloud-b40e6.appspot.com/o/users%2Forashusedmund%40gmail.com%2Fr-drive%2Fporfolio-1-projects-1717413254475.png?alt=media&token=53171725-2f0a-4097-bbe0-b98f73d42a75",
      "https://firebasestorage.googleapis.com/v0/b/r-cloud-b40e6.appspot.com/o/users%2Forashusedmund%40gmail.com%2Fr-drive%2Fporfolio-1-footer-1717413247454.png?alt=media&token=b62024e3-735f-447b-a589-8635115a6ffc",
    ],
    logo: "https://firebasestorage.googleapis.com/v0/b/r-cloud-b40e6.appspot.com/o/users%2Forashusedmund%40gmail.com%2Fr-drive%2Fportfolio-1-logo-1717413213488.jpeg?alt=media&token=9b25f06c-6f2b-4bea-9ff5-255ab92fa44d",
    tags: [
      {
        id: "1",
        label: "HTML",
        bgColor: "#dd4b25",
        textColor: "#fff",
      },
      {
        id: "2",
        label: "CSS",
        bgColor: "#254bdd",
        textColor: "#fff",
      },
      {
        id: "3",
        label: "JavaScript",
        bgColor: "#efd81d",
        textColor: "#000",
      },
    ],
    dateCreated: "",
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
];

export { SkillData, ExperienceData, ProjectData, CertificateData };
