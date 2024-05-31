import { Banner } from "./banner/banner";
import { Services } from "./services/services";
import { WorkExperience } from "./work-experience/work-experience";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-start gap-4">
      <Banner />

      <Services />

      <WorkExperience />
    </main>
  );
}
