import { waitAndResolve } from "@/lib/utils";
import {
  CertificateData,
  ExperienceData,
  ProjectData,
  ToolsAndLanguageData,
  SkillData,
} from "./dummy-data";
import { type TabValues } from "./interface";

const getSkills = () => {
  return waitAndResolve(SkillData);
};

const getExperiences = () => {
  return waitAndResolve(ExperienceData);
};

const getToolAndLanguages = () => {
  return waitAndResolve(ToolsAndLanguageData);
};

const getProjects = async (tabValue: TabValues) => {
  if (tabValue === "all") return ProjectData;

  return ProjectData.filter((p) => p.tabValues.includes(tabValue));
};

const getCertificates = () => {
  return waitAndResolve(CertificateData, 300);
};

export {
  getSkills,
  getExperiences,
  getToolAndLanguages,
  getProjects,
  getCertificates,
};
