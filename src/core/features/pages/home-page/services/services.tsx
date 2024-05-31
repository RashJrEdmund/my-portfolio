import { SmallLineSvg } from "@/components/ui/svg";
import { Suspense } from "react";
import { SillShimmer, Skills } from "./skills";

function Services() {
  return (
    <div id="services" className="w-full flex items-center justify-center">
      <div className="w-full max-w-app-dynamic-max-w min-h-app-section-min-h flex flex-col items-center justify-center gap-14">
        <div className="w-full flex flex-col sm:flex-row items-start justify-between gap-4">
          <h3 className="font-bold text-[1.6rem] sm:text-[2rem] md:text-[3rem] max-w-[500px] leading-none">
            1.7+ years coding experience.
          </h3>

          <div className="w-full max-w-[660px]">
            <p className="text-[1.3rem] text-app-blue-500">
              <SmallLineSvg className="mr-2" />
              Services
            </p>

            <p className="font-light text-app-text-200 sm:font-normal sm:max-w-[400px]">
              Discover the best services I offer, designed to ensure the success of your project.
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col items-center justify-start gap-8">
          <h3 className="font-semibold text-[1.3rem] md:text-[2rem]">
            Skill Set
          </h3>

          <div className="w-full flex flex-col items-center justify-center sm:grid grid-auto-fill-350 2xl:flex 2xl:flex-row gap-4 gap-y-6">
            <Suspense fallback={<SillShimmer />}>
              <Skills />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

export {
  Services
};
