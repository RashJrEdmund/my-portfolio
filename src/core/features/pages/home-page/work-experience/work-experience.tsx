import { SpaceShip } from "@/components/molecules/space-ship/space-ship";
import { getExperiences } from "../api/queries";
import { Suspense } from "react";
import { ExperienceCard, ExperienceShimmer } from "./experience-card";
import { SectionHeader } from "@/components/ui/section-header";

async function ExperienceList() {
  const Experiences = await getExperiences();
  return (
    <>
      {Experiences.map((experience) => (
        <ExperienceCard key={experience.id} experience={experience} />
      ))}
    </>
  );
}

function WorkExperience() {
  return (
    <div
      id="work-experience"
      className="w-full flex items-center justify-center"
    >
      <div className="w-full max-w-app-dynamic-max-w mx-auto min-h-app-section-min-h pb-17">
        <SpaceShip />

        <SectionHeader className="mb-11">Work Experience</SectionHeader>

        <div className="w-full flex flex-wrap gap-6 md:gap-8 items-start justify-center">
          <Suspense fallback={<ExperienceShimmer />}>
            <ExperienceList />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export { WorkExperience };
