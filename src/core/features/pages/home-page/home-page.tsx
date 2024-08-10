import { Banner } from "./banner/banner";
import { Certifications } from "./certifications/certifications";
import { Coding } from "./coding/coding";
import { Projects } from "./projects/projects";
import { Services } from "./services/services";
import { LanguagesAndTools } from "./tools/languages-and-tools";
import { WorkExperience } from "./work-experience/work-experience";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-start">
      <div className="w-full h-fit flex flex-col items-center justify-center gap-16 xl:gap-4">
        <Banner />

        <Services />

        <WorkExperience />

        {/* <LanguagesAndTools /> */}

        <Projects />

        <Certifications />

        programming languages
      </div>

      <Coding />
    </main>
  );
}
