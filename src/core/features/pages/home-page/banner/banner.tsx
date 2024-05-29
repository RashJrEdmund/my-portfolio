import { DynamicText } from "@/components/ui/dynamic-text";
import { BannerCTA } from "./banner-cta";

function Banner() {
  return (
    <div className="w-full max-w-app-dynamic-max-w flex items-center justify-center bg-app-dark-500">
      <div className="w-full min-h-app-section-min-h flex flex-col gap-4 md:gap-8 items-start justify-center pt-8">
        <h1 className="text-app-blue-500 font-semibold text-[1rem] md:text-[2rem] border border-gray-200">
          Hello, I&apos;m Orashus {JSON.stringify("{ }").slice(1, -1)} Rash for short.
        </h1>

        <DynamicText
          className="font-bold text-[1.6rem] md:text-[3.5rem] xl:text-[4.5rem] min-h-[50px] border"
          writerOptions={{
            words: ["TypeScript Enthusiast", "MERN Stack", "NextJs Fanboy", "Full Stack Developer", "Back End Developer", "Front End Developer"],
            loop: 1,
            typeSpeed: 100,
            cursorColor: "var(--app-blue-500)",
            cursorStyle: "{}",
          }}
        />

        <p className="max-w-[500px] text-app-text-200 font-light sm:font-normal md:text-[1.2rem]">
          I&apos;m from Cameroon and I have been working as a full stack web developer for over than 2 years. I&apos;ve interned
          at a fin-tech startup (Aftawallet) as a front-end developer for a month.
        </p>

        <BannerCTA />
      </div>
    </div>
  );
}

export {
  Banner
};
