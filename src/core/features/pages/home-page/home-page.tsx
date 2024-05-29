import { Banner } from "./banner/banner";
import { Services } from "./services/services";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-start gap-8">
      <Banner />

      <Services />
    </main>
  );
}
