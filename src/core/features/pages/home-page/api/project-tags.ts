import type { ProjectLabels, ProjectTag } from "./interface";

const ProjectTagsData: ProjectTag[] = [
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

  //
  {
    id: "4",
    label: "NextJs",
    bgColor: "#000",
    textColor: "#fff",
  },
  {
    id: "5",
    label: "VueJs",
    bgColor: "green",
    textColor: "#fff",
  },
  {
    id: "6",
    label: "VueJs",
    bgColor: "green",
    textColor: "#fff",
  },
  {
    id: "7",
    label: "Svelte",
    bgColor: "#dd4b25",
    textColor: "#fff",
  },

  //
  {
    id: "8",
    label: "Firebase",
    bgColor: "orange",
    textColor: "#fff",
  },
  {
    id: "9",
    label: "PWA",
    bgColor: "purple",
    textColor: "#fff",
  },

  // Languages
  {
    id: "10",
    label: "TypeScript",
    bgColor: "#254bdd",
    textColor: "#fff",
  },
  {
    id: "11",
    label: "Python",
    bgColor: "blue",
    textColor: "#fff",
  },
  {
    id: "12",
    label: "Java",
    bgColor: "blue",
    textColor: "#fff",
  },

  //
  {
    id: "13",
    label: "SCSS",
    bgColor: "#254bdd",
    textColor: "#fff",
  },
  {
    id: "14",
    label: "TailwindCss",
    bgColor: "#254bdd",
    textColor: "#fff",
  },

  //
  {
    id: "15",
    label: "Openweather API",
    bgColor: "orange",
    textColor: "#fff",
  },
  {
    id: "16",
    label: "IPGeolocation",
    bgColor: "purple",
    textColor: "#fff",
  },

  //
  {
    id: "17",
    label: "Express",
    bgColor: "#fff",
    textColor: "#000",
  },

  {
    id: "18",
    label: "NestJs",
    bgColor: "#000",
    textColor: "purple",
  },
  {
    id: "19",
    label: "Fastify",
    bgColor: "#000",
    textColor: "#fff",
  },

  {
    id: "20",
    label: "NodeJs",
    bgColor: "green",
    textColor: "#000",
  },

  // DBS

  {
    id: "21",
    label: "MongoDb",
    bgColor: "green",
    textColor: "#fff",
  },

  // TESTING
  {
    id: "22",
    label: "Jest",
    bgColor: "green",
    textColor: "#000",
  },
  {
    id: "23",
    label: "Cypress",
    bgColor: "#fff",
    textColor: "#000",
  },
];

const getProjectTags = (labels: ProjectLabels[]): ProjectTag[] => {
  return labels.map((label) => {
    return ProjectTagsData.find((tag) => tag.label === label) as ProjectTag;
  })
};

export {
  getProjectTags,
};
