import { waitAndResolve } from "@/lib/utils";
import { ExperienceData, SkillData } from "./dummy-data";

const getSkills = () => {
  return waitAndResolve(SkillData);
};

const getExperiences = () => {
  return waitAndResolve(ExperienceData);
};

export { getSkills, getExperiences };
