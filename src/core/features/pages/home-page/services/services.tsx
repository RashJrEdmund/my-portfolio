import { SmallLineSvg } from "@/components/ui/svg";

function Services() {
  return (
    <div id="services" className="w-full flex items-center justify-center">
      <div className="w-full max-w-app-dynamic-max-w min-h-app-section-min-h flex flex-col items-center justify-start gap-16">
        <div className="w-full flex flex-col sm:flex-row items-start justify-between gap-4">
          <h3 className="font-bold text-[1.6rem] sm:text-[2rem] md:text-[3rem] max-w-[500px] leading-none">
            &lt;= 2 years experience coding
          </h3>

          <div className="sm:max-w-[400px]">
            <p className="text-[1.3rem] text-app-blue-500">
              <SmallLineSvg className="mr-2" />
              Services
            </p>

            <p className="font-light sm:font-normal text-app-text-200">
              Discover the best services I offer, designed to ensure the success of your project.
            </p>
          </div>
        </div>

        <div className="grid grid-auto-fill-350">
          cards
        </div>
      </div>
    </div>
  );
};

export {
  Services
};
