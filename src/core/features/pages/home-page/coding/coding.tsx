import Image from "next/image";

function Coding() {
  return (
    <>
      <div className="relative w-full flex flex-col xl:flex-row items-center justify-center md:min-h-[40px] bg-app-dark-600 py-4">
        <div className="absolute w-[2px] md:w-[4px] sm:w-[10px] h-full top-0 left-0 bottom-0 bg-app-blue-500" />

        <div className="w-full flex flex-col items-center justify-center p-4">
          <Image
            src="/git-map.png"
            alt="my git map"
            width={700}
            height={100}
            className=""
          />

          <p
            data-testid="i-code-text"
            className="text-sm md:text-base sm:font-semibold mt-4 text-center"
          >
            I code every single day. <br />
            And do my best to gain mastery over everything I do
          </p>
        </div>

        <div className="w-full flex flex-col items-center justify-center p-4">
          <Image
            src="/twitter-banner.png"
            alt="my git map"
            width={700}
            height={100}
            className=""
          />
        </div>
      </div>
    </>
  );
}

export { Coding };
