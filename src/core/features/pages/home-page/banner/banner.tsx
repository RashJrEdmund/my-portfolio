import { DynamicText } from "@/components/ui/dynamic-text";
import { BannerCTA } from "./banner-cta";
import Image from "next/image";
import { SquareTerminal, Terminal } from "lucide-react";

function Banner() {
  return (
    <div
      id="home"
      className="w-full max-w-app-dynamic-max-w flex items-center justify-center bg-app-dark-500"
    >
      <div className="w-full min-h-[60vh] md:min-h-app-section-min-h flex flex-col-reverse gap-2 sm:gap-4 md:flex-row items-center justify-center">
        <div className="w-full flex flex-col gap-4 md:gap-8 items-start justify-center">
          <h1 className="text-app-blue-500 font-semibold text-[1rem] md:text-[2rem]">
            Hello, I&apos;m Orashus, Rash for short{" "}
            <SquareTerminal className="inline size-4 md:size-8" />
          </h1>

          <DynamicText
            className="font-bold text-[1.6rem] md:text-[3.5rem] xl:text-[4.5rem] min-h-[50px] text-wrap xl:text-nowrap"
            writerOptions={{
              words: [
                "TypeScript Dev",
                "MERN Stack",
                "NextJs Fanboy",
                "Learning Rust",
                "Full stack Developer",
              ],
              loop: 1,
              typeSpeed: 100,
              cursorColor: "var(--app-blue-500)",
              cursorStyle: (
                <Terminal className="inline ml-1 size-[1.6rem] md:size-[3.5rem] xl:size-[4.5rem]" />
              ),
            }}
          />

          <p
            className="max-w-[600px] text-app-text-200 font-light sm:font-normal md:text-[1.2rem]"
            data-testid="aftawallet-internship-heading"
          >
            I am a detail-oriented, skilled software developer with a perfect
            understanding of TypeScript and JavaScript. I also code with Python
            (Flask), and have basic knowledge of Java, and expertise in
            frameworks like NextJs, React, NestJs, and Express. I&apos;m a quick
            learner, and can collaborate closely with a team and or clients to
            create efficient, scalable, and user-friendly solutions that solve
            real-world problems.
          </p>

          <BannerCTA />
        </div>

        <div className="w-full min-w-[250px] flex items-center justify-center md:justify-end 2xl:justify-center">
          <Image src="/logo.png" alt="rash dev logo" height={500} width={500} />
        </div>
      </div>
    </div>
  );
}

export { Banner };
