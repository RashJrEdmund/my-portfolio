import { waitAndResolve } from "@/lib/utils";
import type { Skill } from "./interface";

const SkillData: Skill[] = [
  {
    id: "1",
    label: "Attention to details",
    description: "A have a keep eye not just for design, but for code smells, and properly coding patterns"
  },
  {
    id: "2",
    label: "Teachable",
    description: "I am teachable and will adhere to good council, both in and out of the programming world",
  },
  {
    id: "3",
    label: "Logical Approach",
    description: "I always strive to tackle a problem as the best way I can. Constantly seeking for ways to improve code quality and efficiency",
  },
  {
    id: "4",
    label: "Creative Ability",
    description: "A key factor all developers, front and back, should posses. I do believe that everything and anything can be made intuitive and fun to work with",
  }
];

const getSkills = () => {
  return waitAndResolve(SkillData);
};

export {
  getSkills,
};
