import { Banner } from "./banner/banner";

export default function HomePage() {
  return (
    <main className="flex min-h-[90vh] flex-col items-center justify-start gap-8">
      <Banner />
    </main>
  );
}
