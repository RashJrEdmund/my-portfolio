import Image from "next/image";
import Link from "next/link";

function HeaderLogo({ hTagLevel: Htag = "h1" }: { hTagLevel?: keyof JSX.IntrinsicElements }) {
  return (
    <Htag className="font-semibold sm:text-[1.5rem] w-fit">
      <Link
        title="Rash for short"
        href="/"
        className="w-fit hover:text-app-blue-500 duration-300"
      >
        Orashus <span className="text-app-blue-500 text-[2rem] sm:text-[4rem] border border-gray-400 leading-[0]">.</span>

        <Image
          src="/logo.png"
          alt="rash edmund"
          width={40}
          height={40}
          className="rounded-full hidden sm:inline"
        />
      </Link>
    </Htag>
  );
};

export {
  HeaderLogo
};
