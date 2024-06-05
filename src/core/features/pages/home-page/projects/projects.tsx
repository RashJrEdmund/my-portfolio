import { SmallLineSvg } from "@/components/ui/svg";
import { ProjectTabs } from "./tabs";
import { Suspense } from "react";

function Projects() {
  return (
    <div
      id="projects"
      className="w-full flex items-center justify-center bg-app-dark-200 p-8 pb-14"
    >
      <div className="w-full max-w-app-dynamic-max-w min-h-app-section-min-h flex flex-col items-center justify-center gap-14">
        <div className="w-full flex flex-col sm:flex-row items-start justify-between gap-4">
          <h3 className="font-bold text-[1.6rem] sm:text-[2rem] md:text-[3rem] max-w-[500px] leading-none">
            Personal Projects
          </h3>

          <div className="w-full max-w-[660px]">
            <p className="text-[1.3rem] text-app-blue-500">
              <SmallLineSvg className="mr-2" />
              Recent Projects
            </p>

            <p className="font-light text-app-text-200 sm:font-normal sm:max-w-[400px]">
              Take a look at some of things I&apos;ve been up to
            </p>
          </div>
        </div>

        <Suspense>
          <ProjectTabs />
        </Suspense>
      </div>
    </div>
  );
}

export { Projects };
