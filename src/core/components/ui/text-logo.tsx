import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface Props {
  hTagLevel?: keyof JSX.IntrinsicElements;
  imgSx?: string;
}

function HeaderLogo({ hTagLevel: Htag = "h1", imgSx = "" }: Props) {
  return (
    <Htag className="font-semibold sm:text-[1.5rem] w-fit">
      <Link
        title="Rash for short"
        href="/"
        className="w-fit hover:text-app-blue-500 duration-300 text-nowrap"
      >
        Orashus <span className="text-app-blue-500 text-[2rem] sm:text-[4rem] leading-[0]">.</span>

        <Image
          src="/logo.png"
          alt="rash edmund"
          width={40}
          height={40}
          className={cn("rounded-full hidden sm:inline", imgSx)}
        />
      </Link>
    </Htag>
  );
};

export {
  HeaderLogo
};
