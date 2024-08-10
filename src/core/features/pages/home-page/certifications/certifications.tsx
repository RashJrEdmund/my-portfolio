import { Suspense } from "react";
import {
  CertificateContainer,
  CertificateShimmer,
} from "./certificate-container";
import { SectionHeader } from "@/components/ui/section-header";

function Certifications() {
  return (
    <div
      id="accolades"
      className="w-full max-w-app-dynamic-max-w h-fit flex items-center justify-center"
    >
      <div className="w-full min-h-app-section-min-h flex flex-col items-center justify-center pt-8 pb-12 gap-11">
        <SectionHeader>
          Certificates and achievements
        </SectionHeader>

        <div className="w-full mx-auto flex flex-col md:flex-row xl:flex-wrap items-center justify-center gap-4 md:gap-8 gap-y-6 mt-8">
          <Suspense fallback={<CertificateShimmer />}>
            <CertificateContainer />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export { Certifications };
