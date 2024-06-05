import { waitAndResolve } from "@/lib/utils";
import {
  CertificateData,
  ExperienceData,
  ProjectData,
  SkillData,
} from "./dummy-data";
import { type TabValues } from "./interface";

const getSkills = () => {
  return waitAndResolve(SkillData);
};

const getExperiences = () => {
  return waitAndResolve(ExperienceData);
};

const getProjects = async (tabValue: TabValues) => {
  const projects = await waitAndResolve(ProjectData, 200);

  if (tabValue === "all") return projects;

  return projects.filter((p) => p.tabValues.includes(tabValue));
};

const getCertificates = () => {
  return waitAndResolve(CertificateData, 300);
};

export { getSkills, getExperiences, getProjects, getCertificates };
