import { Suspense } from "react";
import { ToolsShimmer, ToolList } from "./tool-list";
import { SectionHeader } from "@/components/ui/section-header";

const SkillIconUrl = "https://skillicons.dev/icons";

function LanguagesAndTools() {
  return (
    <div id="tools" className="w-full flex items-center justify-center">
      <div className="w-full max-w-app-dynamic-max-w min-h-app-section-min-h flex flex-col items-center justify-center gap-8">
        <SectionHeader>Languages And Tools</SectionHeader>

        <div className="w-full max-w-[850px] grid grid-auto-fill-150 md:grid-auto-fill-200 items-center justify-center gap-4 gap-y-6 xl:gap-y-14">
          <Suspense fallback={<ToolsShimmer />}>
            <ToolList />
          </Suspense>
        </div>

        {[
          "next,react,svelte,vue,tailwind,sass,emotion",
          "nodejs,express,nestjs,flask,prisma,firebase,git,github,mongodb,postgres,mysql,redux,docker,kafka",
          "jest,cypress,redis,grafana,md",
        ].map((iconSet) => (
          <img
            key={iconSet}
            src={`${SkillIconUrl}?i=${iconSet}&perline=10`}
            alt="my skills"
          />
        ))}
      </div>
    </div>
  );
}

export { LanguagesAndTools };
