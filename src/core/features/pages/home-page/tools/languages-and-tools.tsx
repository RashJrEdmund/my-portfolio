import { SmallLineSvg } from "@/components/ui/svg";
import { Suspense } from "react";
import { ToolsShimmer, ToolList } from "./tool-list";
import { SectionHeader } from "@/components/ui/section-header";

function LanguagesAndTools() {
  return (
    <div id="tools" className="w-full flex items-center justify-center">
      <div className="w-full max-w-app-dynamic-max-w min-h-app-section-min-h flex flex-col items-center justify-center gap-8">
        <SectionHeader>
          Languages
        </SectionHeader>

        <div className="w-full flex flex-wrap items-center justify-start gap-4 gap-y-6 xl:gap-y-14">
          <Suspense fallback={<ToolsShimmer />}>
            <ToolList />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export { LanguagesAndTools };
